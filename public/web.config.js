< configuration >
  <
  system.webServer >
  <
  rewrite >
  <
  rules >
  <
  rule name = "Handle History Mode and custom 404/500"
stopProcessing = "true" >
  <
  match url = "(.*)" / >
  <
  conditions logicalGrouping = "MatchAll" >
  <
  add input = "{REQUEST_FILENAME}"
matchType = "IsFile"
negate = "true" / >
  <
  add input = "{REQUEST_FILENAME}"
matchType = "IsDirectory"
negate = "true" / >
  <
  /conditions> <
  action type = "Rewrite"
url = "/" / >
  <
  /rule> <
  /rules> <
  /rewrite> <
  /system.webServer> <
  /configuration>