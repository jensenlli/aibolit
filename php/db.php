<?php

$servername = "aib";
$username = "root";
$password = "";
$dbname = "reg";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn){
    die("Connection Fialed".mysqli_connect_error());
}else{
    msg_send("Успех");
}
?>
