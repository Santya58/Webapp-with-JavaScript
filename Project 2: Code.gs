function doGet(event) {
    return HtmlService.createTemplateFromFile("Page").evaluate();
}

function userClicked(userinfo){
  var url = "https://docs.google.com/spreadsheets/d/1hftiIq2rFWmVE-ewC-lyq8UuzQAAWmwzq3ngEQD3cfc/edit#gid=0"
  var ss = SpreadsheetApp.openByUrl(url)
  var ws = ss.getSheetByName("data");
  
ws.appendRow([userinfo.name,userinfo.StaffID,userinfo.application,userinfo.type,userinfo.StartDate,userinfo.EndDate,userinfo.Reason, new Date()]); //to add date:ws.appendRow([name,new Date()])

}
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

