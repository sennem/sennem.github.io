function helloworld(name)
{
  alert("Hello " + name + '!');     
}

function processinfo()
{
  var fname = document.userinfo.firstname.value;
  var lname = document.userinfo.lastname.value;
  var stuid = document.userinfo.studentid.value;
  var grade = document.GetElementById(gradenum).value;
  var drive = document.GetElementById(driveyn).value;
  var alldata = '<div>First Name: ' + fname + '</div>'+ '<div>Last Name: ' +lname +'<div>' + '<div>ID: ' + stuid + '<div>';
  document.GetElementById(allstudentinfo).innerHTML=alldata;
  //document.GetElementById(allstudentinfo).innerHTML="testing plz work";
}
