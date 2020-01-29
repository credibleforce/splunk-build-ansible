#!/bin/bash
ansible all -m ping -u deployer -i inventory.yml
