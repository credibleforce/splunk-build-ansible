#!/bin/bash

display_help() {
        echo "Usage: $(basename "$0") [option...]" >&2
        echo
        echo "  $(basename "$0") -p <SPLUNK PASSWORD>     Splunk Web Password"
        echo "  $(basename "$0") -l <SPLUNK_LICENSE_FILE> Path to Splunk License (e.g. ./splunk.lic)"
        echo "  $(basename "$0") -h                       Display this help message"
        echo
        exit 1
}

while getopts p:l:h opt
do
    case "${opt}" in
        p)
            SPLUNK_PASSWORD=${OPTARG}
            ;;
        l)
            LICENSE_FILE=${OPTARG}
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
elif [[ -z "$LICENSE_FILE" ]]
then
    echo "Required Option: -l not set" 1>&2
    echo
    display_help
fi

# export splunk password for ansible usage
export SPLUNK_PASSWORD=$SPLUNK_PASSWORD

# install pre-requisites
yum install -y epel-release 
yum install -y git python3-pip
python -m pip install --upgrade pip

# setup standalone ansible
git clone --single-branch --branch 'stable-2.9' https://github.com/ansible/ansible.git
python -m pip install -r ansible/requirements.txt
source ansible/hacking/env-setup


# setup splunk-ansible
git clone --recursive https://github.com/mobia-security-services/splunk-engagement-ansible.git
cd splunk-engagement-ansible
git submodule update --init --recursive
cd ansible

# stage license file
cp $LICENSE_FILE /tmp/splunk.lic >/dev/null 2>&1

# install
ansible-playbook -vv -i example-inventory/splunk-local-standalone.yml playbooks/install-standalone.yml