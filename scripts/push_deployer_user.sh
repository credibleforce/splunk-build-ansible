#!/bin/bash
ansible-playbook -i inventory.yml custom-plays/deploy-deployer-user.yml --extra-vars "@default.yml"