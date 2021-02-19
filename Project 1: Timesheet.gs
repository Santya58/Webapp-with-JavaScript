function Updated() {
   var app =  SpreadsheetApp.getActiveSpreadsheet();
   var sheet = app.getSheetByName("Timesheet").activate();

    //Updating the Days based on the Date Input
      var cell = sheet.getRange(12,3).setFormula('=TEXT(B12,"DDDD")');
      var destination1 = sheet.getRange("C12:C42");
      cell.copyTo(destination1);
      
    //Updating The Time In 
      sheet.getRange("D12:D42").setValue("9:30 AM");
    
    //Updating The Time Out
      sheet.getRange("E12:E42").setValue("5:30 PM");
      
    //Updating the number of Hours
      var cell = sheet.getRange(12,6).setFormula('=MROUND(ifs($C12="Saturday",0, $C12="Sunday",0,TRUE, MOD($E12-$D12,1)*24),0.5)');
      var destination3 = sheet.getRange("F12:F42");
      cell.copyTo(destination3);
    
    //Updating the CTO Hours 
      var cell = sheet.getRange(12,7).setFormula('=ifs(C12="Saturday",0, C12="Sunday",0,TRUE, F12-8)');
      var destination4 = sheet.getRange("G12:G42");
      cell.copyTo(destination4);
    
    //Updating Remarks columns back to nothing 
      sheet.getRange("H12:H42").setValue("");
      
    //Implementing Formula on Cell I42,if text formula cannot apply 
      sheet.getRange("I42").setFormula('=IF(B42=C42,"Delete","")')

}

