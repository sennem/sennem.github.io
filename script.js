function helloworld(name)
{
  alert("Hello " + name + '!');     
}

function processinfo()
{
  var fname = document.userinfo.firstname.value;
  var lname = document.userinfo.lastname.value;
  var stuid = document.userinfo.studentid.value;
  var grade = document.unserinfo.Grade.value;
  var drive = document.userinfo.ddrive.value;
  var alldata = '<div>First Name: ' + fname + '</div>'+ '<div>Last Name: ' +lname +'<div>' + '<div>ID: ' + stuid + '<div>';
  document.getElementById(allstudentinfo).innerHTML+=alldata;
  //document.GetElementById(allstudentinfo).innerHTML="testing plz work";
}
