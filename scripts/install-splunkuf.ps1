# Purpose: Installs a Splunk Universal Forwader on the host

# specific a deployment server to use
$deployment_server = "<splunk server>:8089"

If (-not (Test-Path "C:\Program Files\SplunkUniversalForwarder\bin\splunk.exe")) {
  Write-Host "Downloading Splunk Universal Forwarder"
  $msiFile = $env:Temp + "\splunkforwarder.msi"

  Write-Host "$('[{0:HH:mm}]' -f (Get-Date)) Installing & Starting Splunk"
  [Net.ServicePointManager]::SecurityProtocol = "tls12, tls11, tls"
  (New-Object System.Net.WebClient).DownloadFile('https://www.splunk.com/bin/splunk/DownloadActivityServlet?architecture=x86_64&platform=windows&version=8.2.0&product=universalforwarder&filename=splunkforwarder-8.2.0-e053ef3c985f-x64-release.msi&wget=true', $msiFile)
  Start-Process -FilePath "c:\windows\system32\msiexec.exe" -ArgumentList '/i', "$msiFile", ('DEPLOYMENT_SERVER="{0}" WINEVENTLOG_SEC_ENABLE=0 WINEVENTLOG_SYS_ENABLE=0 WINEVENTLOG_APP_ENABLE=0 AGREETOLICENSE=Yes SERVICESTARTTYPE=1 LAUNCHSPLUNK=1 SPLUNKPASSWORD=changeme /quiet' -f $deployment_server) -Wait
} Else {
  Write-Host "Splunk is already installed. Moving on."
}
If ((Get-Service -name splunkforwarder).Status -ne "Running")
{
  throw "Splunk forwarder service not running"
}
Write-Host "$('[{0:HH:mm}]' -f (Get-Date)) Splunk installation complete!"
