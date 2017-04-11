<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dreamhome";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT ownerno , COUNT(ownerno)
	FROM propertyforrent
	GROUP BY ownerno";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "owner : ".$row["ownerno"]." Private own : ".$row["COUNT(ownerno)"]."<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
</body>
</html>