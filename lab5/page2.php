<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	คำขวัญ 
	<?php 
		$handle = fopen('motto/'.$_GET['prov'].'.txt', 'r');
        $word = fread($handle, 1024);
        echo "$word";
        fclose($handle);
	?><br>

</body>
</html>