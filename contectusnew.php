if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$to = 'youremail@example.com';
	$subject = 'Contact Form Submission';
	$body = "Name: $name\nEmail: $email\nMessage: $message";
	if (mail($to, $subject, $body)) {
		echo '<p>Thank you for your message!</p>';
	} else {
		echo '<p>Sorry, there was an error sending your message.</p>';
	}
}
