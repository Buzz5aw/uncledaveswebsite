<?php 


$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "Lukeskywidi321@gmail.com";
$subject = "Free Design";


mail ($to, $subject, $message, "From: " . $name);
echo "Your message has been sent";


?>