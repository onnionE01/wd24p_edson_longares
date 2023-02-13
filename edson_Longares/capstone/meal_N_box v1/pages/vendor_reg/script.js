const vendorAccount_API = "../../api/vendorReg.php";

getVendorID();

function getVendorID() {
    $.ajax({
        "url": vendorAccount_API + "?getVendor",
        "success": function (response) {
            console.log(response)
            let jsonParse = JSON.parse(response);
            let num = jsonParse.records.length + 1;
            var newid = "";
            if (num <= 9) {
                newid = 'mnbV' + '000000000' + num;
            } else if (num <= 99 && num >= 10) {
                newid = 'mnbV' + '00000000' + num;
            } else if (num <= 999 && num >= 100) {
                newid = 'mnbV' + '0000000' + num;
            } else if (num <= 9999 && num >= 1000) {
                newid = 'mnbV' + '000000' + num;
            } else if (num <= 9999 && num >= 1000) {
                newid = 'mnbV' + '00000' + num;
            } else if (num <= 99999 && num >= 10000) {
                newid = 'mnbV' + '0000' + num;
            } else if (num <= 999999 && num >= 100000) {
                newid = 'mnbV' + '000' + num;
            } else if (num <= 9999999 && num >= 1000000) {
                newid = 'mnbV' + '00' + num;
            } else if (num <= 99999999 && num >= 10000000) {
                newid = 'mnbV' + '0' + num;
            } else if (num <= 999999999 && num >= 100000000) {
                newid = 'mnbV' + num;
            } else {
                alert("CONTACT ADMINISTRATOR")
            }
            $("#vendorID").val(newid);
        }
    })
}

function registerVendor() 
{
    let vendorRegForm = {
        Vendor: $("#vendorID").val(),
        busName: $("#inputBusinessName").val(),
        ownerName: $("#inputFullName").val(),
        email: $("#inputVEmail").val(),
        busContact: $("#inputVContact").val(),
        pass: $("#setPassword").val(),
        homeAdd: $("#inputHouseNum").val(),
        street: $("#inputStreet").val(),
        barangay: $("#inputBrgy").val(),
        city: $("#inputCity").val(),
        prov: $("#inputProvince").val(),
        busPermit: $("#inputPermitNum").val(),
        dtiPermit: $("#inputDTIPermit").val(),
    };
    // clearForm();
    $.ajax({
        "url": vendorAccount_API,
        "type": "POST",
        "data": "store=" + JSON.stringify(vendorRegForm),
        "success" : function(response) {
            console.log(response)
            let responseJSON=JSON.parse(response);
            alert(responseJSON.description);
            return false;
        }
    })
    return false;
}

function clearForm() {
    document.getElementById("vendorReg-Form").submit();
    document.getElementById("vendorReg-Form").reset();
}