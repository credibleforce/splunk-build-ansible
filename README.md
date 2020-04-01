# splunk-engagement-ansible

Example usage of [splunk ansible](https://github.com/splunk/splunk-ansible) project.

Playbooks use a named account `deployer` for ansible ansible tasks on inventory hosts, either update this named account or ensure the user exists on all target machines

**Usage**:

1. Download latest version of Splunk to `/tmp/splunk.rpm`
2. Place the license file in `/tmp/splunk.lic`
3. Clone repo `git clone https://github.com/ps-sec-analytics/splunk-engagement-ansible.git`
4. Change directory to `cd splunk-engagement-ansible`
5. Pull the splunk-ansible submodule `git submodule update --init --recursive`
6. Change directory to ansible-deployment folder `cd ansible-deployment`
7. Use or update one of the existing inventory files in `inventory` directory
8. Use or update one of the existing playbooks in the `playbooks`. Examples of standalone, deploymentserver only, and advanced configuration are provided.
9. Run the playbook and inventory of your choice, for example `ansible-playbook -vv -i inventory/splunk.yml playbooks/install-standalone.yml`

**Updating**

1. To update run `git pull` and to pull an updated splunk-ansible submodule `git submodule update --recursive --remote`

**Testing**:

In scenarios where ansible testing is taking place or where it cannot be installed via pacakge manager (e.g. yum), it is possible to run a _portable_ ansible installation. The following steps outline the requirements for setting this up:

1. Clone the ansible repo `git clone https://github.com/ansible/ansible.git`
2. Change director to ansible directory `cd ansible`
3. Install required python modules `pip-3 install -r requirements.txt`
4. Setup ansible environment `source ./hacking/env-setup`
