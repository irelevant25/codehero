<?php
session_start();

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// CSRF check
if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Invalid security token']);
    exit;
}

// Basic rate limiting
if (!isset($_SESSION['last_submit'])) {
    $_SESSION['last_submit'] = 0;
}
if (time() - $_SESSION['last_submit'] < 10) {
    echo json_encode(['success' => false, 'message' => 'Please wait before submitting again']);
    exit;
}

// Sanitize input
$name    = filter_var(trim($_POST['name']    ?? ''), FILTER_SANITIZE_STRING);
$email   = filter_var(trim($_POST['email']   ?? ''), FILTER_SANITIZE_EMAIL);
$subject = filter_var(trim($_POST['subject'] ?? ''), FILTER_SANITIZE_STRING);
$message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8');

// Validate
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

if (preg_match("/[\r\n]/", $email) || preg_match("/[\r\n]/", $name)) {
    echo json_encode(['success' => false, 'message' => 'Invalid input detected']);
    exit;
}

if (strlen($name) > 100 || strlen($subject) > 200 || strlen($message) > 5000) {
    echo json_encode(['success' => false, 'message' => 'Input too long']);
    exit;
}

// Honeypot — silently discard bot submissions
if (!empty($_POST['website'])) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
    exit;
}

$host_email    = 'support@codehero.sk';
$email_subject = 'Kontaktny formular od: ' . $email;

$email_body  = "Nova sprava z kontaktneho formulara\n\n";
$email_body .= 'Meno: '    . $name    . "\n";
$email_body .= 'Email: '   . $email   . "\n";
$email_body .= 'Predmet: ' . $subject . "\n\n";
$email_body .= "Sprava:\n" . $message . "\n\n";
$email_body .= "---\n";
$email_body .= 'IP adresa: ' . $_SERVER['REMOTE_ADDR'] . "\n";
$email_body .= 'Datum: '     . date('d.m.Y H:i:s')     . "\n";

$headers  = 'From: '       . $host_email . "\r\n";
$headers .= 'Reply-To: '   . $email      . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($host_email, $email_subject, $email_body, $headers)) {
    $_SESSION['last_submit'] = time();
    echo json_encode(['success' => true, 'message' => 'Sprava bola uspesne odoslana']);
} else {
    error_log('Failed to send email from codehero contact form');
    echo json_encode(['success' => false, 'message' => 'Nepodarilo sa odoslat spravu. Skuste to prosim neskor.']);
}
?>
