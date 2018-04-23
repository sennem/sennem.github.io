function helloworld(name)
{
  alert("Hello " + name + '!');     
}

funtion processinfo()
{
  var fname = document.GetElementById(firstname).value;
  var lname = document.GetElementById(lastname).value;
  var stuid = document.GetElementById(studentid).value;
  var grade = document.GetElementById(gradenum).value;
  var drive = document.userinfo.drive.value;
  var alldata = '<div>Firstname: ' + fname + '</div>' + '<br>' + '<div>Lastname: ' + lname + '</div>' + '<br>' + '<div>StudentID: ' + stuid + '</div>' + '<br>' + '<div>Grade: ' + grade + '</div>' + '<br>' + '<div>Drive: ' + drive + '</div>';
  document.GetElementById(allstudentinfo).innerHTML=alldata;
}
