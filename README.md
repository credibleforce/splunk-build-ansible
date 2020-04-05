# splunk-engagement-ansible

Example usage of [splunk ansible](https://github.com/splunk/splunk-ansible) project.

Playbooks use a named account `deployer` for ansible ansible tasks on inventory hosts, either update this named account or ensure the user exists on all target machines

## Pre-requisites

1. These examples assume CentOS images exist
2. The example infrastructure assumes the the local domain `psl.local` (e.g. splksh1.psl.local)
3. The `splunk-ansible` build and maintained by Splunk assumes that hostname in inventory and the result of `hostname` on the Linux host are identical. Some plays and tasks will not execute if those mismatch.

## Usage

1. Download latest version of Splunk to `/tmp/splunk.rpm`
2. Place the license file in `/tmp/splunk.lic`
3. Clone repo `git clone https://github.com/ps-sec-analytics/splunk-engagement-ansible.git`
4. Change directory to `cd splunk-engagement-ansible`
5. Pull the splunk-ansible submodule `git submodule update --init --recursive`
6. Change directory to ansible-deployment folder `cd ansible-deployment`
7. Use or update one of the existing inventory files in `inventory` directory
8. Use or update one of the existing playbooks in the `playbooks`. Examples of standalone, deploymentserver only, and advanced configuration are provided.
9. Run the playbook and inventory of your choice, for example `ansible-playbook -vv -i example-inventory/splunk-standalone.yml playbooks/install-standalone.yml`

## Updating

1. To update run `git pull` and to pull an updated splunk-ansible submodule `git submodule update --recursive --remote`

## Using Ansible from a Single Host

In scenarios where ansible testing is taking place or where it cannot be installed via pacakge manager (e.g. yum), it is possible to run a _portable_ ansible installation. The following steps outline the requirements for setting this up:

1. Clone the ansible repo `git clone --single-branch --branch 'stable-2.9' https://github.com/ansible/ansible.git`
2. Change director to ansible directory `cd ansible`
3. Install required python modules `pip-3 install -r requirements.txt`
4. Setup ansible environment `source ./hacking/env-setup`

## Example Standalone Deployment Architecture

**Hosts**
* splkutil1.psl.local (ansible host)
* splksh1.psl.local (host to be used for Splunk Standalone instance)

## Other Examples

The following scenarios have example inventory and playbooks associated with them:

### Distrbuted:

**Hosts** 
* splkutil1.psl.local (ansible host)
* splksh1.psl.local (Splunk Search Head)
* splkidx1.psl.local (Splunk Indexer)
* splkdp1.psl.local (Splunk Deployment Server & Splunk License Master)
* splunkuf1.psl.local (Splunk Universal Forwarder)

**Ansible Install Command**

`ansible-playbook -vv -i example-inventory/splunk-distributed.yml playbooks/install-distributed.yml`

### Indexer Cluster:

**Hosts** 
* splkutil1.psl.local (ansible host)
* splksh1.psl.local (Splunk Search Head)
* splkcm1.psl.local (Splunk Indexer Cluster Master)
* splkidx1.psl.local (Splunk Indexer Cluster Node)
* splkidx2.psl.local (Splunk Indexer Cluster Node)
* splkdp1.psl.local (Splunk Deployment Server & Splunk License Master)
* splunkuf1.psl.local (Splunk Universal Forwarder)

**Ansible Install Command**

`ansible-playbook -vv -i example-inventory/splunk-indexcluster.yml playbooks/install-indexcluster.yml`

### Indexer Cluster and Search Cluster:

**Hosts** 
* splkutil1.psl.local (ansible host)
* splksh1.psl.local (Splunk Search Head Cluster Node)
* splksh2.psl.local (Splunk Search Head Cluster Node)
* splksh3.psl.local (Splunk Search Head Cluster Node)
* splkcm1.psl.local (Splunk Indexer Cluster Master)
* splkidx1.psl.local (Splunk Indexer Cluster Node)
* splkidx2.psl.local (Splunk Indexer Cluster Node)
* splkdp1.psl.local (Splunk Deployment Server & Splunk License Master)
* splunkuf1.psl.local (Splunk Universal Forwarder)

**Ansible Install Command**

`ansible-playbook -vv -i example-inventory/splunk-searchcluster-indexcluster.yml playbooks/install-searchcluster-indexcluster.yml`
