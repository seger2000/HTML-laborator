<?php
session_start();
include('validation.php');

// initializing variables
$username = "";
$email    = "";


// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'registration');


if (isset($_POST['login_user'])) {
  $username = mysqli_real_escape_string($db, $_POST['usrname']);
  $password = mysqli_real_escape_string($db, $_POST['psw']);

  if (validPassword($password)){
    
        $password = md5($password);
        $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
       

        $results = mysqli_query($db, $query);
        if (mysqli_num_rows($results) == 1) {
            echo "<div class='back_home'>
                      <div class='border_box'
                        <p>Logarea a avut loc cu succes </p>
                        <a href = '../index.html'> HOME </a>
                      </div>
                    </div>";
        }else {
            echo "<div class='back_home'>
                      <div class='border_box'
                        <p> Datele sunt incorete </p>
                        <a href = '../index.html'> HOME </a>
                        <a href = '../login.html'> LOGIN </a>
                      </div>
                    </div>";
        }
  }else{
       echo "<div class='back_home'>
                <div class='border_box'
                  <p> Password invalid </p>
                  <a href = '../index.html'> HOME </a>
                  <a href = '../login.html'> LOGIN </a>
                </div>
              </div>"; 
  }
}

?>


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