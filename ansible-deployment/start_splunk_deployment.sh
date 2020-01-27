#!/bin/bash
ansible-playbook -i inventory.yml custom-plays/install-splunk.yml --extra-vars "@default.yml"
