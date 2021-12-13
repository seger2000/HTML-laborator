<?php
session_start();
$errors = array(); 
 $name_cont = $_POST['name_cont'];
 $email_cont = $_POST['email_cont'];
 $subject = $_POST['subject'];
 $message = $_POST['message'];
// connect to the database
if (isset($_POST['name_cont'],$_POST['email_cont'],$_POST['subject'],$_POST['message'])) {
 


 
  if (empty($name_cont)) {array_push($errors, "name_cont is required");}
  if (empty($email_cont)) {array_push($errors, "email_cont is required");}
  if (empty($subject)) {array_push($errors, "subject is required");
  if (empty($message)) {array_push($errors, "message is required");}}

  if (count($errors) == 0) {
    echo json_encode(array("statusCode" => 200));
  }else{
    echo json_encode(array("statusCode" => 201));
  }


}else{
  echo json_encode(array("statusCode" => 202));
}
?>
