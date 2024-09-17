<!DOCTYPE html>
<html>
<head>
    <title>Event Registration</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="head-sign">
        <h2>Event Registration Form</h2>
    </div>
    <form action="signup-check.php" method="post">
        <h2>REGISTER</h2>
        <?php if (isset($_GET['error'])) { ?>
            <p class="error"><?php echo $_GET['error']; ?></p>
        <?php } ?>
        <?php if (isset($_GET['success'])) { ?>
            <p class="success"><?php echo $_GET['success']; ?></p>
        <?php } ?>
        <label>College ID</label>
        <input type="text" name="college_id" placeholder="Enter College ID" value="<?php echo isset($_GET['college_id']) ? htmlspecialchars($_GET['college_id']) : ''; ?>"><br>
        
        <label>Name</label>
        <input type="text" name="name" placeholder="Name" value="<?php echo isset($_GET['name']) ? htmlspecialchars($_GET['name']) : ''; ?>"><br>
        
        <label>Mobile Number</label>
        <input type="text" name="mobile" placeholder="Enter Mobile Number" value="<?php echo isset($_GET['mobile']) ? htmlspecialchars($_GET['mobile']) : ''; ?>"><br>
        
        <label>Password</label>
        <input type="password" name="password" placeholder="Password"><br>
        
        <label>Select Event</label>
        <select name="event">
            <option value="tech_talk">Tech Talk</option>
            <option value="workshop">Workshop</option>
            <option value="hackathon">Hackathon</option>
            <option value="seminar">Seminar</option>
        </select><br>

        <button type="submit">Register</button>
        <a href="index.php" class="ca">Already have an account?</a>
    </form>
</body>
</html>
