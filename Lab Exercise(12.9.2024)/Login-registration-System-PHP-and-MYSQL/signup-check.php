<?php
session_start();
include "db_conn.php";

if (isset($_POST['college_id']) && isset($_POST['name']) && isset($_POST['mobile']) && isset($_POST['password']) && isset($_POST['event'])) {

    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $college_id = validate($_POST['college_id']);
    $name = validate($_POST['name']);
    $mobile = validate($_POST['mobile']);
    $pass = validate($_POST['password']);
    $event = validate($_POST['event']);

    $user_data = 'college_id=' . $college_id . '&name=' . $name . '&mobile=' . $mobile . '&event=' . $event;

    if (empty($college_id)) {
        header("Location: signup.php?error=College ID is required&$user_data");
        exit();
    } else if (empty($name)) {
        header("Location: signup.php?error=Name is required&$user_data");
        exit();
    } else if (empty($mobile)) {
        header("Location: signup.php?error=Mobile Number is required&$user_data");
        exit();
    } else if (empty($pass)) {
        header("Location: signup.php?error=Password is required&$user_data");
        exit();
    } else {
        // Hash password
        $pass = password_hash($pass, PASSWORD_BCRYPT);

        // Insert the new user into the database
        $sql = "INSERT INTO person(college_id, name, mobile, password, event) VALUES('$college_id', '$name', '$mobile', '$pass', '$event')";
        $result = mysqli_query($conn, $sql);
        if ($result) {
            header("Location: signup.php?success=Your account has been created successfully");
            exit();
        } else {
            header("Location: signup.php?error=Unknown error occurred&$user_data");
            exit();
        }
    }
} else {
    header("Location: signup.php");
    exit();
}
?>
