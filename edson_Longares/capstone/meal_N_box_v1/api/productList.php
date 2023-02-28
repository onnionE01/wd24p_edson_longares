<?php
include_once ("config.php");
include_once ("constants.php");

If (isset($_GET['getAllProduct']))
{
    $sqlcommand= "SELECT * FROM `products_table`;";
    
    $results=$connection->query($sqlcommand);
    $response=array();
    $records=array();
        while ($row=$results->fetch_assoc())
        {
            array_push($records,$row);
        }
   $response["code"]= SUCCESS;
   $response["total_rows"]=$results->num_rows;
   $response["records"]=$records;
   echo json_encode($response);
}