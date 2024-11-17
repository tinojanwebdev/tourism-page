<?php
$host = 'localhost'; 
$db = 'signup'; 
$user = 'root'; 
$pass = ''; 

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $firstName = $conn->real_escape_string(trim($_POST['firstName']));
    $lastName = $conn->real_escape_string(trim($_POST['lastName']));
    $mobile = $conn->real_escape_string(trim($_POST['mobile']));
    $password = password_hash(trim($_POST['password']), PASSWORD_DEFAULT);
    $dobDay = (int)$_POST['dobDay'];
    $dobMonth = $conn->real_escape_string(trim($_POST['dobMonth']));
    $dobYear = (int)$_POST['dobYear'];
    $gender = $conn->real_escape_string(trim($_POST['gender']));

    $stmt = $conn->prepare("INSERT INTO users (first_name, last_name, mobile, password, dob_day, dob_month, dob_year, gender) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

    if (!$stmt) {
        die("Prepare failed: (" . $conn->errno . ") " . $conn->error);
    }

    $stmt->bind_param("ssissssi", $firstName, $lastName, $mobile, $password, $dobDay, $dobMonth, $dobYear, $gender);
    if ($stmt->execute()) {
        echo "Signup successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request.";
}
?>
