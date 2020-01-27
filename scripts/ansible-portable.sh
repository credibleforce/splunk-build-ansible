#!/bin/bash
yum update && yum install -y git python-pip
mkdir ~/git
cd ~/git
git clone https://github.com/ansible/ansible.git
cd ansible
pip install -r requirements.txt

cat >> ~/.bashrc <<EOF
cd ~/git/ansible
source ./hacking/env-setup
cd $HOME
EOF