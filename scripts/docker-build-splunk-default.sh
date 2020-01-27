#!/bin/bash
docker run -it --rm -e SPLUNK_PASSWORD=helloworld splunk/splunk create-defaults > default.yml
