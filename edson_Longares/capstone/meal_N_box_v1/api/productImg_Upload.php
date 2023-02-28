<?php
include_once ("config.php");

foreach ($_FILES as $key) {
    $name = $key["name"];
    $path = "uploads/$name";

    if ($key["size"] > 1000000) {
        echo "max file size reached";
    }

    @move_uploaded_file($key["tmp_name"], $path);
    $_SESSION["file-path"] = $path;
}
//@TODO Update profile picture nung naglogin
echo "Uploaded" . $_POST["data"];