<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Example: Send email (requires a properly configured SMTP server)
    $to = "milla_luna@hotmail.com";
    $subject = "New Message from Contact Form";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";
    
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<p>Thank you, $name, for your message!</p>";
    } else {
        echo "<p>Sorry, there was an error sending your message.</p>";
    }
}
?>
