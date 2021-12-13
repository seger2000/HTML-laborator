<?php
session_start();
$errors = array(); 

// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'registration');
if (isset($_POST['usrname'],$_POST['psw'])) {
  $username = mysqli_real_escape_string($db, $_POST['usrname']);
  $password = mysqli_real_escape_string($db, $_POST['psw']);
  // echo "nu intru1";


 if (empty($username)) { 
    array_push($errors, "Username is required");
  }

  if (empty($password)) { 
    array_push($errors, "Password is required");

  }

  if (count($errors) == 0) {
    

    $password = md5($password);
    $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
   
    // print_r($query);
    $results = mysqli_query($db, $query);
    if (mysqli_num_rows($results) == 1) {
        echo json_encode(array("statusCode" => 200));
      }else {
        // echo mysqli_num_rows($results);
         echo json_encode(array("statusCode" => 201));
         // die();
      }
  }else{    echo json_encode(array("statusCode" => 210));}
}
?>
