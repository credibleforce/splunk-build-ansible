#!/bin/bash
ansible-playbook -i inventory.yml playbooks/deploy-deployer-user.yml --extra-vars "@default.yml"