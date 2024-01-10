<!DOCTYPE html>
<html>
<head>
	<title>방명록</title>
</head>
<body>
  <?php
  		if(isset($_GET['name'])){
			$name = $_GET['name'];
			echo "<p>입력한 이름: $name</p>";
		}
	?>
  <?php
  		if(isset($_POST['text'])){
			$text = $_POST['text'];
			echo "<p>입력한 메시지: $text</p>";
		}
	?>
</body>
</html>