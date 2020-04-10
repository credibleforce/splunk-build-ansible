#!/bin/bash

display_help() {
        echo "Usage: $(basename "$0") [option...]" >&2
        echo
        echo "  $(basename "$0") -p <SPLUNK PASSWORD>     Splunk Web Password"
        echo "  $(basename "$0") -d <HOSTNAME FOR SPLUNK DEPLOYMENTSERVER>     Splunk Deployment Server"
        echo "  $(basename "$0") -h                       Display this help message"
        echo
        exit 1
}

while getopts p:d:h opt
do
    case "${opt}" in
        p)
            SPLUNK_PASSWORD=${OPTARG}
            ;;
        d)
            SPLUNK_DEPLOYMENT_SERVER=${OPTARG}
            ;;
        h)
            display_help
            ;;
        \?)
            echo "Invalid Option: -$OPTARG" 1>&2
            echo
            display_help
            ;;
    esac
done

if [[ -z "$SPLUNK_PASSWORD" ]]
then
        echo "Required Option: -p not set" 1>&2
    echo
    display_help
fi

if [[ -z "$SPLUNK_DEPLOYMENT_SERVER" ]]
then
        echo "Required Option: -p not set" 1>&2
    echo
    display_help
fi

# export splunk password and deployment server for ansible usage
export SPLUNK_PASSWORD=$SPLUNK_PASSWORD
export SPLUNK_DEPLOYMENT_SERVER=$SPLUNK_DEPLOYMENT_SERVER

# install pre-requisites
yum install -y epel-release 
yum install -y git python-pip
pip install --upgrade pip

# setup standalone ansible
git clone --single-branch --branch 'stable-2.9' https://github.com/ansible/ansible.git
source ansible/hacking/env-setup
pip install -r ansible/requirements.txt

# setup splunk-ansible
git clone https://github.com/ps-sec-analytics/splunk-engagement-ansible.git
cd splunk-engagement-ansible
git submodule update --init --recursive
cd ansible

# install
ansible-playbook -vv -i example-inventory/splunk-local-universal-forwarder.yml example-playbooks/install-local-universal0-forwarder.yml