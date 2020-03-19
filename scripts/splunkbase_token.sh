#!/bin/bash

helpFunction()
{
   echo ""
   echo "Usage: $0 -u SPLUNKBASE_USERNAME -p SPLUNKBASE_PASSWORD"
   echo -e "\t-u Username for Splunkbase login"
   echo -e "\t-p Password for Splunkbase login"
   exit 1 # Exit script after printing help
}

while getopts "u:p:" opt
do
   case "$opt" in
      u ) username="$OPTARG" ;;
      p ) password="$OPTARG" ;;
      ? ) helpFunction ;; # Print helpFunction in case parameter is non-existent
   esac
done

# Print helpFunction in case parameters are empty
if [ -z "$username" ] || [ -z "$password" ]
then
   echo "Some or all of the parameters are empty";
   helpFunction
fi

# get the token
resp=$(curl -sd "username=$username&password=$password" https://splunkbase.splunk.com/api/account:login/)
if echo $resp | grep -q "<id>"
then
   echo $resp | gawk 'match($0, /.*<id>(.*?)<\/id>/, m) { print m[1]; }'
   exit 0
else
   exit 1
fi


### EXAMPLE RESPONSE ###
# <?xml version="1.0" encoding="utf-8"?>
# <feed xmlns="http://www.w3.org/2005/Atom">
#     <title>Authentication Token</title>
#     <updated>2020-03-19T15:00:30.512083+00:00</updated>
#     <id>TOKEN</id>
# </feed>
