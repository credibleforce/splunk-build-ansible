#!/bin/bash
ansible-playbook -i inventory.yml custom-plays/deploy-ansible-user.yml --extra-vars "@default.yml"