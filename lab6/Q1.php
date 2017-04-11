<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php
$servername = "localhost";
$username = "Korn";
$password = "myPass";
$dbname = "webtech";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO Customers ('CustomerID','CitizenID','Firstname','Lastname')
VALUES ('A00000002', '1100100100102', 'Custname2','Custlastname2')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
</body>
</html>