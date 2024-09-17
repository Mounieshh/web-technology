<?php
session_start();
if (isset($_SESSION['id']) && isset($_SESSION['name'])) {
?>
<!DOCTYPE html>
<html>
<head>
    <title>HOME</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class='home-section'>

        <h1>Hello, <?php echo $_SESSION['name']; ?></h1>
        <h1 class="after-reg">Your Event has been Registered Successfully.....</h1>
        <div class="log-out">
        <a href="logout.php" >Logout</a>
        </div>
        
    </div>
</body>
</html>
<?php
} else {
    header("Location: index.php");
    exit();
}
?>
