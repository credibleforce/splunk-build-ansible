#!/bin/bash

# download splunk RPM
curl -L -o /tmp/splunk.rpm "https://www.splunk.com/page/download_track?file=7.3.4/linux/splunk-7.3.4-13e97039fb65-linux-2.6-x86_64.rpm&ac=&wget=true&name=wget&platform=Linux&architecture=x86_64&version=7.3.4&product=splunk&typed=release"

# download splunk tgz
# https://www.splunk.com/bin/splunk/DownloadActivityServlet?architecture=x86_64&platform=linux&version=7.3.1&product=splunk&filename=splunk-7.3.1-bd63e13aa157-Linux-x86_64.tgz&wget=true