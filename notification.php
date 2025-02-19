<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "your-email@example.com";
    $subject = "New Contact Form Submission";
    $message = "Name: " . $_POST["name"] . "\nEmail: " . $_POST["email"] . "\nMessage: " . $_POST["message"];
    $headers = "From: " . $_POST["email"];
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
}
?>