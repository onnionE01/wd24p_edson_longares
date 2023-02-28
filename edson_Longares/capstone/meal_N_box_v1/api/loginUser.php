<?php
include_once ("config.php");
include_once ("constants.php");

//@TODO Change table name 
define("customer", "customer_table");

/**
 * Check if may auth sa login.js login url na ajax
 */
if (isset($_POST['auth'])) {

    $loginCredentials = json_decode($_POST["auth"]);

    $sqlCommand = "SELECT * FROM ".customer;

    $results = $connection->query($sqlCommand);

    $customers = array();

    while ($row = $results->fetch_assoc()) {
        array_push($customers, $row);
    }
    foreach ($customers as $customer) {
        if ($customer["ContactNum"] === $loginCredentials->contact) {
            if (($loginCredentials->password=== $customer["Password"])) {
            // if (password_verify($loginCredentials->password, $customer["Password"])) {
                $response["code"] = SUCCESS;
                $response["description"] = "Successfully Login";
                $_SESSION["loggedin-user"] = $customer["CustomerID"];
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
                 "description" => "Wrong Contact Number"
              );
        }
    }

    echo json_encode($response);
}
?>