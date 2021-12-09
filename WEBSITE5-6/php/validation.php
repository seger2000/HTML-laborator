<?php

function validEmail($email) {

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return false;
    }
    return true;
}

function validPassword($password) {

    $uppercase = preg_match('@[A-Z]@', $password);
    $lowercase = preg_match('@[a-z]@', $password);
    $number    = preg_match('@[0-9]@', $password);

    if (!$uppercase || !$lowercase || !$number || strlen($password) < 6) {
        return false;
    }
    return true;
}

function validUser($user) {

    if (!preg_match ("/^[a-zA-z0-9]*$/", $user) || strlen($user) <= 6) {
        return false;
    }
    return true;
}

function validName($name) {

    if (!preg_match ("/^[a-zA-z]*$/", $name) || strlen($name < 2)) {
        return false;
    }
    return true;
}



