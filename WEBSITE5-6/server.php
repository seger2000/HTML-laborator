<?php
session_start();

// initializing variables
$username = "";
$email    = "";
$errors = array(); 

// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'registration');

// REGISTER USER
if (isset($_POST['reg_user'])) {
  // receive all input values from the form

  $username = mysqli_real_escape_string($db, $_POST['usrname']);
  $email = mysqli_real_escape_string($db, $_POST['email']);
  $password_1 = mysqli_real_escape_string($db, $_POST['psw']);
  $password_2 = mysqli_real_escape_string($db, $_POST['pswCheck']);

  // form validation: ensure that the form is correctly filled ...
  // by adding (array_push()) corresponding error unto $errors array
  if (empty($username)) { array_push($errors, "Username is required"); }
  if (empty($email)) { array_push($errors, "Email is required"); }
  if (empty($password_1)) { array_push($errors, "Password is required"); }
  if ($password_1 != $password_2) {
  array_push($errors, "The two passwords do not match");
  }

  // first check the database to make sure 
  // a user does not already exist with the same username and/or email
  $user_check_query = "SELECT * FROM users WHERE username='$username' OR email='$email' LIMIT 1";
  $result = mysqli_query($db, $user_check_query);
  $user = mysqli_fetch_assoc($result);
  
  if ($user) { // if user exists
    if ($user['username'] === $username) {

        echo "<div class='back_home'>
                <div class='border_box'
                  <p>Exista deja user-ul în baza de date</p>
                  <a href = '../register.html'> REGISTER </a>
                </div>
              </div>";

    }

    if ($user['email'] === $email) {

      echo "<div class='back_home'>
                <div class='border_box'
                  <p>Exista deja email-ul în baza de date</p>
                  <a href = '../register.html'> REGISTER </a>
                </div>
              </div>";
    }
  }

  // Finally, register user if there are no errors in the form
  if (count($errors) == 0) {
    $password = md5($password_1);//encrypt the password before saving in the database

    $query = "INSERT INTO users (username, email, password) 
          VALUES('$username', '$email', '$password')";
    mysqli_query($db, $query);
      echo "<div class='back_home'>
                  <div class='border_box'
                    <p>Registrarea a avut loc cu succes</p>
                    <a href = '../index.html'> HOME </a>
                    <a href = '../login.html'> LOGIN </a>
                  </div>
                </div>";
      }
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>

</body>
</html>