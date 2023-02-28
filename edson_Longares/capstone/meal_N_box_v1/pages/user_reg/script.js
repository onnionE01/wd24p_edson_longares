const userAccount_API ="../../api/userReg.php";

getUserID();

function getUserID()
{
    $.ajax({
        "url" : userAccount_API + "?getUserID",
        "success" : function(response) {
            console.log(response);
            let jsonParse=JSON.parse(response); 
            let num = jsonParse.records.length + 1; 
            var newid="";
            if (num<=9){
                newid='mnbU'+ '000000000' + num;
            } else if (num<=99 && num>=10) {
                newid='mnbU'+ '00000000' + num;
            } else if (num<=999 && num>=100) {
                newid='mnbU'+ '0000000' + num;
            } else if (num<=9999 && num>=1000) {
                newid='mnbU'+ '000000' + num;
            } else if (num<=9999 && num>=1000) {
                newid='mnbU'+ '00000' + num;
            } else if (num<=99999 && num>=10000) {
                newid='mnbU'+ '0000' + num;
            }else if (num<=999999 && num>=100000) {
                newid='mnbU'+ '000' + num;
            }else if (num<=9999999 && num>=1000000) {
                newid='mnbU'+ '00' + num;
            } else if (num<=99999999 && num>=10000000) {
                newid='mnbU'+ '0' + num;
            } else if (num<=999999999 && num>=100000000) {
                newid='mnbU' + num;
            } else {
              alert("CONTACT ADMINISTRATOR")
            }
            $("#userID").val(newid);
        }
    })
}

function saveUser()
{
let userRegForm={
    userID:$("#userID").val(),
    mail:$("#inputEmail").val(),
    contact:$("#inputContact").val(),
    fName:$("#inputFirstName").val(),
    lName:$("#inputLastName").val(),
    homeAdd:$("#inputHouseNum").val(),
    street:$("#inputStreet").val(),
    barangay:$("#inputBrgy").val(),
    city: $("#inputCity").val(),
    prov: $("#inputProvince").val(),
    pass: $("#setPassword").val(),
    acntStatus:"Active"
};
 clearForm();
$.ajax({
    "url" : userAccount_API,
    "type" : "POST",
    "data" : "store=" + JSON.stringify(userRegForm),
    "success" : function(response) {
        let responseJSON = JSON.parse(response);
        alert(responseJSON.description);
        return false;
    }
})
return false;
}

function clearForm(){
    document.getElementById("userReg-Form").submit();
    document.getElementById("userReg-Form").reset();
}