#!/usr/bin/env python

'''
Example custom dynamic inventory script for Ansible, in Python.
'''

import os
import sys
import argparse
from dumper import dump

try:
    import json
except ImportError:
    import simplejson as json

from ansible.parsing.dataloader import DataLoader
from ansible.inventory.manager import InventoryManager

class ExampleInventory(object):

    def __init__(self):
        self.loader = DataLoader()
        self.inventory_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)))
        self.local = os.path.join(self.inventory_dir,"local.yml")
        self.splunk = os.path.join(self.inventory_dir,"splunk.yml")
        self.inventory = {}
        self.read_cli_args()

        # Called with `--list`
        if self.args.list:
            self.inventory = self.build_inventory()
        # Return inventory based on SPLUNK_DEPLOYMENT_TYPE
        else:
            self.inventory = self.build_inventory()

        print(json.dumps(self.inventory,indent=4));

    # Example inventory for testing.
    def build_inventory(self):
        # read deployment roles from environment and add local role
        deployment_roles=['local']
        deployment_roles.extend(os.environ.get('SPLUNK_DEPLOYMENT_ROLES', 'splunk_standalone').split(":"))

        # load the associated inventory for the associated deployment type
        sources=[self.local,self.splunk]
        inventory = InventoryManager(self.loader, sources=sources)
        inventory.parse_sources()
        standalone = ('splunk_standalone' in deployment_roles)
        print(standalone)

        #print(inventory.groups)
        out = {'_meta': {'hostvars': {}}}
        hosts = []
        # depth of child group discovery is one
        for group in inventory.groups.values():
            if group.name in deployment_roles:
                hosts.extend([h.name for h in group.hosts])
                out[group.name] = {
                    'hosts': [h.name for h in group.hosts],
                    'vars': group.vars,
                    'children': [c.name for c in group.child_groups]
                }
                
                for child_group in group.child_groups:
                    # a yukcy hack for some splunk-ansible splunk_search_head "logic" forcing empty list for standalone
                    hosts.extend([] if standalone else [h.name for h in child_group.hosts])
                    out[child_group.name] = {
                        'hosts': [] if standalone else [h.name for h in child_group.hosts],
                        'vars': None if standalone else child_group.vars,
                        'children': [] if standalone else [c.name for c in child_group.child_groups]
                    }
        for host in inventory.get_hosts():
            if host.name in hosts:
                out['_meta']['hostvars'][host.name] = host.vars

        return out

    # Empty inventory for testing.
    def empty_inventory(self):
        return {'_meta': {'hostvars': {}}}

    # Read the command line args passed to the script.
    def read_cli_args(self):
        parser = argparse.ArgumentParser()
        parser.add_argument('--list', action = 'store_true')
        self.args = parser.parse_args()

# Get the inventory.
ExampleInventory()