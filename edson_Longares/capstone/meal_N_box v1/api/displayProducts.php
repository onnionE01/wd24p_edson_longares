<?php
include_once ("config.php");
include_once ("constants.php");

if (isset($_GET['showFeaturedProducts']))
{
    $sqlcommand= "SELECT * FROM `featured_products` f join products_table p on f.Menu_ID = p.Menu_ID group by p.Menu_ID";

    $results=$connection->query($sqlcommand);
    $response=array();
    $records=array();

    while ($row=$results->fetch_assoc())
    {
        array_push($records,array(
            "img" => $row['Product_Image'],
            "model" => $row['ProductName'],
            "type" => $row['Price']
        ));
    }

   $response["code"]= SUCCESS;
   $response["total_rows"]=$results->num_rows;
   $response["records"]=$records;
   echo json_encode($response);
}