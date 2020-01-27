# splunk-engagement-ansible

Example usage of [splunk ansible](https://github.com/splunk/splunk-ansible) project.

Usage:
1. Ensure `ansible` user exists on all target machines
2. Download latest version of Splunk to `/tmp/splunk.rpm`
3. Place the license file in `/tmp/splunk.lic`
4. Clone repo `https://github.com/ps-sec-analytics/splunk-engagement-ansible.git`
5. Update the splunk-ansible submodule `git submodule init`
6. Change directory to ansible-deployment folder `cd splunk-engagement-ansible/ansible-deployment`
7. Update inventory.xml as required
8. Update the install-splunk.yml playbook as required
9. Run `./start_splunk_deployment.sh`
