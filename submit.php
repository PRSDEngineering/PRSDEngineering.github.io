<?php
$servername = "localhost";
$username = "quesoele_egallis";
$password = "19970902";
$dbname = "quesoele_prtsa";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$year = $_POST["year"];
$pres = $_POST["pres"];
$id1 = "SELECT MAX('id') FROM 'PRS'";
$id = 0 + 1;


$sql = "INSERT INTO PRS VALUES ('$id','$fname', '$lname', '$emal', '$pres', '$year')";

if ($conn->query($sql) === TRUE) {
    $last_id = $conn->insert_id;
    echo "New record created successfully. Last inserted ID is: " . $last_id;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>