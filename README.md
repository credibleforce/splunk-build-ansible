# splunk-engagement-ansible

Example usage of [splunk ansible](https://github.com/splunk/splunk-ansible) project.

**Usage**:

1. Ensure `ansible` user exists on all target machines
2. Download latest version of Splunk to `/tmp/splunk.rpm`
3. Place the license file in `/tmp/splunk.lic`
4. Clone repo `git clone https://github.com/ps-sec-analytics/splunk-engagement-ansible.git`
5. Change directory to `cd splunk-engagement-ansible`
6. Pull the splunk-ansible submodule `git submodule update --init --recursive`
6. Change directory to ansible-deployment folder `cd ansible-deployment`
7. Update inventory.xml as required
8. Update the install-splunk.yml playbook as required
9. Run `./start_splunk_deployment.sh`


**Testing**:

In scenarios where ansible testing is taking place or where it cannot be installed via pacakge manager (e.g. yum), it is possible to run a _portable_ ansible installation. The following steps outline the requirements for setting this up:

1. Clone the ansible repo `git clone https://github.com/ansible/ansible.git`
2. Change director to ansible directory `cd ansible`
3. Install required python modules `pip-3 install -r requirements.txt`
4. Setup ansible environment `source ./hacking/env-setup`
