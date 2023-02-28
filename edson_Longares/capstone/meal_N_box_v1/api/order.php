<?php
include_once ("config.php");
include_once ("constants.php");

define("ITEMS_TABLE", "products_table");

define("ORDER_TABLE", "ordersdetail_table");


if (isset($_GET['show']))
{
   $itemID = $_GET['id'];
   
   //@TODO conditions to display a specific
   $sqlCommand = "SELECT * FROM " . ITEMS_TABLE ." WHERE Menu_ID = '$itemID' ";

    $results = $connection->query($sqlCommand);

    $response = array();

    $records = array();

    while ($row = $results->fetch_assoc()) {
        array_push($records, $row);
    }

    $response["code"] = SUCCESS;
    $response["total_rows"] = $results->num_rows;
    $response["records"] = $records;
    
    echo json_encode($response);
}


if (isset($_POST['store']))
{
    $data = json_decode($_POST['store']);

    $sqlCommand ="
    INSERT INTO " .ORDER_TABLE."
        (
            `CustomerID`, 
            `MenuID`, 
            `ProductName`, 
            `Price`, 
            `VendorID`,
            `Qty`,
            `SubAmount`,
            `OrderStatus`
        ) 
    VALUES 
        (
            '{$data->customerID}',
            '{$data->itemID}',
            '{$data->itemName}',
            '{$data->ItemPrice}',
            '{$data->vendor}',
            '{$data->QTY}',
            '{$data->subTotal }',
            '{$data->oderStatus }'
            )
    "; //$_SESSION["file-path"]
  
    echo($sqlCommand);
    $isInserted = $connection->query($sqlCommand);
    $response = array();
    if ($isInserted)
    {
        $response["code"] = SUCCESS;
        $response["description"] = "Successfully Added New Product";
    } else 
    {
        $response["code"] = SERVER_ERROR; 
        $response["description"] = "!!!Unsuccessfully Added";
    }
    echo json_encode($response);
}
