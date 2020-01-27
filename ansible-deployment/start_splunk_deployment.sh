#!/bin/bash
ansible-playbook -i inventory.yml install-splunk.yml --extra-vars "@default.yml"
