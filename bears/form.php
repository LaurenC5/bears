<html>
<body>

Thank You <?php echo $_POST["fname"]; ?> for registering your intrest, you'll be one of the first to know information on the Bears being in London.

<?php>

// define variables and set to empty values
$fname = $lname = $email = $info = "";

 if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $fname = test-input($_POST["fname"]);
   $lname = test-input($_POST["lname"]);
   $email = test-input($_POST["email"]);
   $info = test-input($_POST["info"]);
 }
 function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
 }
</?>
</body>
</html>
