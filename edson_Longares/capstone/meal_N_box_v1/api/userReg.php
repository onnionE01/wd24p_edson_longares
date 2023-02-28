<?php
include_once ("config.php");
include_once ("constants.php");

If (isset($_POST['store']))
{
    $data = json_decode($_POST['store']);

    $sqlCommand = "
    INSERT INTO `customer_table`
        (
            `CustomerID`, 
            `Email`, 
            `ContactNum`, 
            `FirstName`, 
            `LastName`,
            `HouseNum`, 
            `StreetName`, 
            `Barangay`, 
            `City`, 
            `Province`,
            `Password`,
            `Account_Status`
        ) 
    VALUES 
        (
            '{$data->userID}',
            '{$data->mail}',
            '{$data->contact}',
            '{$data->fName}',
            '{$data->lName}',
            '{$data->homeAdd}',
            '{$data->street}',
            '{$data->barangay}',
            '{$data->city}',
            '{$data->prov}',
            '{$data->pass}',
            '{$data->acntStatus}'
            )
    ";

    $isInserted = $connection->query($sqlCommand);

    $response = array();

    if ($isInserted)
    {
        $response["code"] = SUCCESS;
        $response["description"] = "Successfully Saved New user";
    } else 
    {
        $response["code"] = SERVER_ERROR; 
        $response["description"] = "!Unsuccessfully saved new user";
    }

    echo json_encode($response);
}


If (isset($_GET['getUserID']))
{
    $sqlcommand= "SELECT * FROM `customer_table`;";

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