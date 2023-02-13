<?php
include_once ("config.php");
include_once ("constants.php");

//@TODO Change table name 
define("vendor", "vendortable");

/**
 * Check if may auth sa login.js login url na ajax
 */
if (isset($_POST['auth'])) {

    $loginCredentials = json_decode($_POST["auth"]);

    $sqlCommand = "SELECT * FROM ".vendor;

    $results = $connection->query($sqlCommand);

    $vendors = array();

    while ($row = $results->fetch_assoc()) {
        array_push( $vendors, $row);
    }
    foreach ($vendors as $vendor) {
        if (($vendor["VendorID"] === $loginCredentials->vendor)||($vendor["ContactNum"] === $loginCredentials->vendor)||($vendor["EmailAddress"] === $loginCredentials->vendor)){
            if (($loginCredentials->password=== $vendor["Password"])) {
            // if (password_verify($loginCredentials->password, $customer["Password"])) {
                $response["code"] = SUCCESS;
                $response["description"] = "Successfully Login";
                $_SESSION["loggedin-user"] = $vendor["VendorID"];
                break;
            }else {
                $response = array(
                    "code" => INPUT_ERROR, // Default 200 422 500
                     "description" => "Wrong password"
                  );
            }
        } else {
            $response = array(
                "code" => INPUT_ERROR, // Default 200 422 500
                 "description" => "Wrong Vendor"
              );
        }
    }

    echo json_encode($response);
}
?>