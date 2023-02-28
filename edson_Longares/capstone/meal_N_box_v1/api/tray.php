<?php
include_once ("config.php");
include_once ("constants.php");

define("ITEMS_TABLE", "products_table");

define("TRAY_TABLE", "tray_table");

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


If (isset($_GET['getOrderID']))
{
    $sqlcommand= "SELECT * FROM `tray_table`;";

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


if (isset($_POST['store']))
{
    $data = json_decode($_POST['store']);

    $sqlCommand = "
    INSERT INTO " .TRAY_TABLE."
        (
            `TrayID`, 
            `CustomerID`, 
            `Menu_ID`, 
            `Order_Qty`, 
            `SubAmount`,
            `Status`
        ) 
    VALUES 
        (
            '{$data->orderID}',
            '{$data->customerID}',
            '{$data->itemID}',
            '{$data->QTY}',
            '{$data->subTotal}',
            '{$data->oderStatus }'
            )
    "; //$_SESSION["file-path"]

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



 if (isset($_GET['showMyTray']))
 {
    $activeID = $_GET['id'];
    $sqlcommand="SELECT * FROM `tray_table` t join products_table p on t.Menu_ID = p.Menu_ID WHERE CustomerID = '$activeID';";

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
