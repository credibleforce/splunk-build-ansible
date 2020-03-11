#!/bin/bash

# clustered
SPLUNK_DEPLOYMENT_ROLES="splunk_indexer:splunk_cluster_master:splunk_search_head:splunk_search_head_captain:splunk_deployer:splunk_license_master:splunk_deployment_server" ansible-playbook -i ./inventory/inventory.py playbooks/install-clustered.yml 

# standalone
#SPLUNK_DEPLOYMENT_ROLES="splunk_standalone" ansible-playbook -i ./inventory/inventory.py playbooks/install-standalone.yml 