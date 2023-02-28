<?php
include_once ("config.php");
include_once ("constants.php");

if (isset($_POST['store']))
{
    $data = json_decode($_POST['store']);
    $picPath=$_SESSION["file-path"];
    $sqlCommand = "
    INSERT INTO `products_table`
        (
            `Menu_ID`, 
            `ProductName`, 
            `Price`, 
            `Product_Image`, 
            `VendorID`,
            `Breakfast`,
            `Lunch`,
            `Dinner`,
            `Snack`,
            `Dessert`,
            `Status`
        ) 
    VALUES 
        (
            '{$data->prodID}',
            '{$data->prodName}',
            '{$data->prodPrice}',
            '$picPath',
            '{$data->vendor}',
            '{$data->CategA}',
            '{$data->CategB }',
            '{$data->CategC}',
            '{$data->CategD }',
            '{$data->CategE}',
            '{$data->stat}'
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

if (isset($_GET['showFeaturedProducts']))
{
    $sqlcommand= "SELECT * FROM `featured_product` f join products_table p on f.Menu_ID = p.Menu_ID group by p.Menu_ID";

    $results=$connection->query($sqlcommand);
    $response=array();
    $records=array();

    while ($row=$results->fetch_assoc())
    {
        array_push($records,array(
            "img" => $row['Product_Pic'],
            "model" => $row['Product_Name'],
            "type" => $row['Price']
        ));
    }

   $response["code"]= SUCCESS;
   $response["total_rows"]=$results->num_rows;
   $response["records"]=$records;
   echo json_encode($response);
}

If (isset($_GET['getProduct']))
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