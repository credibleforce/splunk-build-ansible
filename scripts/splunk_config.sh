# example add indexes (volumes and size need to be added)
/opt/splunk/bin/splunk add index wineventlog -auth 'admin:changeme'
/opt/splunk/bin/splunk add index osquery -auth 'admin:changeme'
/opt/splunk/bin/splunk add index osquery-status -auth 'admin:changeme'
/opt/splunk/bin/splunk add index sysmon -auth 'admin:changeme'
/opt/splunk/bin/splunk add index powershell -auth 'admin:changeme'
/opt/splunk/bin/splunk add index zeek -auth 'admin:changeme'
/opt/splunk/bin/splunk add index suricata -auth 'admin:changeme'
/opt/splunk/bin/splunk add index threathunting -auth 'admin:changeme'

# example add apps
/opt/splunk/bin/splunk install app /vagrant/resources/splunk_forwarder/splunk-add-on-for-microsoft-windows_500.tgz -auth 'admin:changeme'
/opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/add-on-for-microsoft-sysmon_800.tgz -auth 'admin:changeme'
/opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/asn-lookup-generator_101.tgz -auth 'admin:changeme'
/opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/lookup-file-editor_331.tgz -auth 'admin:changeme'
/opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/splunk-add-on-for-zeek-aka-bro_400.tgz -auth 'admin:changeme'
/opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/force-directed-app-for-splunk_200.tgz  -auth 'admin:changeme'
/opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/punchcard-custom-visualization_130.tgz  -auth 'admin:changeme'
/opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/sankey-diagram-custom-visualization_130.tgz  -auth 'admin:changeme'
/opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/link-analysis-app-for-splunk_161.tgz -auth 'admin:changeme'
/opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/threathunting_141.tgz  -auth 'admin:changeme'

# Uncomment the following block to install BOTSv2 
# Thanks to @MHaggis for this addition!
# It is recommended to only uncomment the attack-only dataset comment block. 
# You may also link to the full dataset which is ~12GB if you prefer.
# More information on BOTSv2 can be found at https://github.com/splunk/botsv2

### BOTSv2 COMMENT BLOCK BEGINS ###
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/base64_11.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/jellyfisher_010.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/palo-alto-networks-add-on-for-splunk_611.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/SA-ctf_scoreboard_admin-master.zip  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/SA-ctf_scoreboard-master.zip  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/sa-investigator-for-enterprise-security_200.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/splunk-add-on-for-apache-web-server_100.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/splunk-add-on-for-microsoft-cloud-services_310.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/splunk-add-on-for-microsoft-iis_101.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/splunk-add-on-for-microsoft-windows_600.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/splunk-add-on-for-symantec-endpoint-protection_230.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/splunk-add-on-for-unix-and-linux_602.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/splunk-app-for-osquery_10.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/splunk-common-information-model-cim_4130.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/splunk-security-essentials_241.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/splunk-ta-for-suricata_233.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/ssl-certificate-checker_32.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/url-toolbox_16.tgz  -auth 'admin:changeme'
# /opt/splunk/bin/splunk install app /vagrant/resources/splunk_server/website-monitoring_274.tgz  -auth 'admin:changeme'

### UNCOMMENT THIS BLOCK FOR THE ATTACK-ONLY DATASET (Recommended) ###
# echo "[$(date +%H:%M:%S)]: Downloading Splunk BOTSv2 Attack Only Dataset..."
# wget --progress=bar:force -P /opt/ https://s3.amazonaws.com/botsdataset/botsv2/botsv2_data_set_attack_only.tgz
# echo "[$(date +%H:%M:%S)]: Download Complete."
# echo "[$(date +%H:%M:%S)]: Extracting to Splunk Apps directory"
# tar zxvf /opt/botsv2_data_set_attack_only.tgz -C /opt/splunk/etc/apps/
### ATTACK-ONLY COMMENT BLOCK ENDS ###

### UNCOMMENT THIS BLOCK FOR THE FULL 12GB DATASET (Not recommended) ###
# echo "[$(date +%H:%M:%S)]: Downloading Splunk BOTSv2..."
# wget --progress=bar:force https://s3.amazonaws.com/botsdataset/botsv2/botsv2_data_set.tgz /opt/
# echo "[$(date +%H:%M:%S)]: Download Complete."
# echo "[$(date +%H:%M:%S)]: Extracting to Splunk Apps directory"
# tar zxvf botsv2_data_set.tgz /opt/splunk/etc/apps
### FULL DATASET COMMENT BLOCK ENDS ###


# other considerations
cp /opt/splunk/etc/system/default/limits.conf /opt/splunk/etc/system/local/limits.conf
# Bump the memtable limits to allow for the ASN lookup table
sed -i.bak 's/max_memtable_bytes = 10000000/max_memtable_bytes = 30000000/g' /opt/splunk/etc/system/local/limits.conf

# generate asn lookup
 /opt/splunk/bin/splunk search "|asngen | outputlookup asn" -auth 'admin:changeme'