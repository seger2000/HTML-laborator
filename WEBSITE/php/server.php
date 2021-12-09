<?php
  // session_start();
include('validation.php');
  // initializi
$errors = array(); 
  // connect to the database
  $db = mysqli_connect('localhost', 'root', '', 'registration');
  // echo "<pre>";
  // print_r($_POST,1);
  // die();

  if (isset($_POST['usrname'], $_POST['email'], $_POST['psw'], $_POST['pswCheck'])){
    // receive all input values from the form
    // echo "MEre11";
    $username = mysqli_real_escape_string($db, $_POST['usrname']);
    $email = mysqli_real_escape_string($db, $_POST['email']);
    $password_1 = mysqli_real_escape_string($db, $_POST['psw']);
    $password_2 = mysqli_real_escape_string($db, $_POST['pswCheck']);

    if (empty($username)) { array_push($errors, "Username is required"); }
    if (empty($email)) { array_push($errors, "Email is required"); }
    if (empty($password_1)) { array_push($errors, "Password is required"); }
    if ($password_1 != $password_2) {
    array_push($errors, "The two passwords do not match");
    }

    if(validPassword($password_1)){
      array_push($errors, "Password is weak");
    }
     if(validPassword($password_2)){
      array_push($errors, "Password2 is weak");
    }


      $user_check_query = "SELECT * FROM users WHERE username='$username' OR email='$email' LIMIT 1";
      $result = mysqli_query($db, $user_check_query);
      $user = mysqli_fetch_assoc($result);
      
      if ($user) { // if user exists
        if ($user['username'] === $username) {
            echo json_encode(array("statusCode" => 201));
            die();
        }
      }

   if (count($errors) == 0) {
   
    
  $password = md5($password_1);
  $query = "INSERT INTO users (username, email, password) 
        VALUES('$username', '$email', '$password')";
        mysqli_query($db, $query);
        echo json_encode(array("statusCode" => 200));}

  }else{
      echo json_encode(array("statusCode" => 202));

  }
?>