#!/usr/bin/env python

'''
Example custom dynamic inventory script for Ansible, in Python.
'''

import os
import sys
import argparse

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
        self.local = os.path.join(self.inventory_dir,"local","hosts.yml")
        self.inventory = {}
        self.read_cli_args()

        # Called with `--list`
        if self.args.list:
            self.inventory = self.build_inventory()
        # Return inventory based on SPLUNK_DEPLOYMENT_TYPE
        else:
            self.inventory = self.build_inventory()

        print json.dumps(self.inventory);

    # Example inventory for testing.
    def build_inventory(self):
        deployment_types=os.environ.get('SPLUNK_DEPLOYMENT_TYPE', 'splunk_standalone')

        # load the associated inventory for the associated deployment type
        sources=[self.local]
        for deployment_type in deployment_types.split(":"):
            sources.append(os.path.join(self.inventory_dir,"splunk",deployment_type,"hosts.yml"))

        inventory = InventoryManager(self.loader, sources=sources)
        inventory.parse_sources()
        
        out = {'_meta': {'hostvars': {}}}
        for group in inventory.groups.values():
            out[group.name] = {
                'hosts': [h.name for h in group.hosts],
                'vars': group.vars,
                'children': [c.name for c in group.child_groups]
            }
        for host in inventory.get_hosts():
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