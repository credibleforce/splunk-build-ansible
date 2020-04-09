#!/bin/bash


################################################################################
# Example local deployment server setup
################################################################################

################################################################################
#
#   Before running this script:
#   ----------------------------
#
#   1) update the example-inventory/splunk-local-deploymentserver.yml replacing splkdp1.psl.local with the hostname of the system being setup
#   2) update the splunk.password in vars/default.yml with the password you will use to access the splunk web interface
#
################################################################################

# install pre-requisites
yum install -y epel-release 
yum install -y git python-pip
pip install --upgrade pip

# setup standalone ansible
git clone --single-branch --branch 'stable-2.9' https://github.com/ansible/ansible.git
source ansible/hacking/env-setup
pip install -r ansible/requirements.txt

# setup splunk-ansible
git clone --single-branch --branch 'develop' https://github.com/ps-sec-analytics/splunk-engagement-ansible.git
cd splunk-engagement-ansible
git submodule update --init --recursive
cd ansible

# install
ansible-playbook -vv -i example-inventory/splunk-local-deploymentserver.yml example-playbooks/install-local-deploymentserver.yml