
<?php
include_once ("config.php");
include_once ("constants.php");

define("GUEST_TABLE", "guest_table");

If (isset($_GET['getGuestID']))
{
    $sqlcommand= "SELECT * FROM `guest_table`;";

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
    
    $_SESSION["guest-user"] = $data->guestID;

    $sqlCommand = "
    INSERT INTO " .GUEST_TABLE."
        (
            `guestID` 
        ) 
    VALUES 
        (
            '{$data->guestID}'
            )
    "; //$_SESSION["file-path"]

    $isInserted = $connection->query($sqlCommand);
    $response = array();
    if ($isInserted)
    {
        $response["code"] = SUCCESS;
        $response["description"] = "Welcome New Guest";
    } else 
    {
        $response["code"] = SERVER_ERROR; 
        $response["description"] = "!!!Error";
    }
    echo json_encode($response);
}