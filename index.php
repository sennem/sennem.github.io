<!DOCTYPE HTML>
<?php

  session_start();
  
  $username = "username1";
  $passwork = "password1";
  
  $error = "";
  
  if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] == true)
  {
    $error = "success";
    header("Location: success.php");
  }
  
  if(isset($_POST["username"]) && isset($_POST["password"]))
  {
    if($_POST["username"] == $username && $_POST["password"] == $password)
    {
      $_SESSION["loggedin"] = true;
      header("Location: success.php");
    }
    else
    {
      $_SESSION["loggedin"] = false;
      $error = "Invalid username or password";
    }
  }
?>

<html>
  <head>
    <title>Login Page</title>
  </head>
  <body>
    <?php echo $error; ?>
    <form method="post" action="index.php">
      <label for="username">Username:</label>
      <br/>
      <input type="text" name="username" id="username" >
      <br/>
      <label for="password">Password:</label>
      <br/>
      <input type="text" name="password" id="password" >
      <br/>
      <input type="submit" value="Log in!" >
    </form>
  </body>
</html>
