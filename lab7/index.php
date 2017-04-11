<!DOCTYPE html>
<html>
<head>
	<title>lab7</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
	<script type="text/javascript" src="tableExport.js"></script>
	<script type="text/javascript" src="jquery.base64.js"></script>
	<script type="text/javascript" src="html2canvas.js"></script>
	<script type="text/javascript" src="jspdf/libs/sprintf.js"></script>
	<script type="text/javascript" src="jspdf/jspdf.js"></script>
	<script type="text/javascript" src="jspdf/libs/base64.js"></script>
	<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

</head>
<body>
<h1 id="headdd"> Lab 7</h1>
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

$records = array();
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $records[] = $row;
    }
} else {
    echo "0 results";
}
$conn->close();
?>
	<div class="row" style="height:300px;overflow:scroll;">
        <table id="owner" class="table table-striped">
	        <thead>         
	            <tr class="warning">
	                <th>owner number</th>
	                <th>property own</th>
	            </tr>
	        </thead>
	        <tbody>
		        <?php foreach($records as $rec):?>
		            <tr>
		                <td><?php echo $rec['ownerno']?></td>
		                <td><?php echo $rec['COUNT(ownerno)']?></td>
		            </tr>
		        <?php endforeach; ?>
	        </tbody>
        </table>
	</div>

<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">export</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#" onclick="$('#owner').tableExport({type:'csv',escape:'false'});">CSV</a>
    <a href="#" onclick="$('#owner').tableExport({type:'excel',escape:'false'});">XLS</a>
    <a href="#" onclick="$('#owner').tableExport({type:'pdf',pdfFontSize:'7',escape:'false'});"> PDF </a>
  </div>
</div>

<script>
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
</script>

</body>
</html>