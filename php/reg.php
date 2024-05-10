<?php

require_once('db.php');
$name = $_POST['first_name'];
$fam = $_POST['second_name'];
$otch = $_POST['thred_name'];
$number = $_POST['phone_tell'];


$sql = "INSERT INTO `User` (name, fam, otch, phoneNumber) VALUES($name, $fam, $otch, $number)";

$conn -> query($sql);

?>