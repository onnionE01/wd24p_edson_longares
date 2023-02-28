const GUEST_API ="api/guest.php";
const newGuest = $("#userID").text();

if (newGuest==""){

    getGuestID();
}

function getGuestID()
{
    $.ajax({
        "url" : GUEST_API + "?getGuestID",
        "success" : function(response) {
             console.log(response);
            let jsonParse=JSON.parse(response); 
            
            let num = jsonParse.records.length + 1; 
            var today = new Date();
            var curYear=today.getFullYear()
            var shortYear= curYear.toString().substr(-2)
            var curdate = (today.getMonth()+1)+""+today.getDate()+""+shortYear;
            var newid= curdate+"#"+num;
            saveGuest(newid);
            $("#userID").text(newid);
            console.log(newid);
       
        }
    })
}


function saveGuest(id){

    var qty = $("#qty").val();
    var price= $("#itemPrice").text();
    var subTotal = qty*price;

let newGuest = {
    guestID:id
}

         $.ajax({
             "url": GUEST_API,
             "type": "POST",
            "data": "store=" + JSON.stringify(newGuest),
            "success": function (response) {
               console.log(response);
                 let responseJSON = JSON.parse(response);
                //  alert(responseJSON.description);
                 return false;
             }
         })
         return false;
    }