const addProduct_API = "../../api/addProduct.php";
const productImage_API = "../../api/productImg_Upload.php";

const DASHBOARD_API = "../../api/dashboard.php";

getProdID();
getAuthenticatedUser();

function getProdID() {
    $.ajax({
        "url": addProduct_API + "?getProduct",
        "success": function (response) {
            console.log(response);
            let jsonParse = JSON.parse(response);
            let num = jsonParse.records.length + 1;
            var newid = "";
            if (num <= 9) {
                newid = 'Box' + '000000000' + num;
            } else if (num <= 99 && num >= 10) {
                newid = 'Box' + '00000000' + num;
            } else if (num <= 999 && num >= 100) {
                newid = 'Box' + '0000000' + num;
            } else if (num <= 9999 && num >= 1000) {
                newid = 'Box' + '000000' + num;
            } else if (num <= 9999 && num >= 1000) {
                newid = 'Box' + '00000' + num;
            } else if (num <= 99999 && num >= 10000) {
                newid = 'Box' + '0000' + num;
            } else if (num <= 999999 && num >= 100000) {
                newid = 'Box' + '000' + num;
            } else if (num <= 9999999 && num >= 1000000) {
                newid = 'Box' + '00' + num;
            } else if (num <= 99999999 && num >= 10000000) {
                newid = 'Box' + '0' + num;
            } else if (num <= 999999999 && num >= 100000000) {
                newid = 'Box' + num;
            } else {
                alert("CONTACT ADMINISTRATOR")
            }
            $("#productCode").val(newid);
        }
    })
}


function getAuthenticatedUser() {
    var activeVendor="";
    $.ajax({
        "url" : DASHBOARD_API + "?getAuthUser",
        "success" : function(response) {
            console.log(response)
            let responseJSON = JSON.parse(response);
            console.log(responseJSON.details.VendorID)
            if (responseJSON.code == 200) {
                activeVendor=responseJSON.details.VendorID;
                $("#vendorID").val(responseJSON.details.VendorID)
            } else {
                window.location.href = "../../"
            }
        }
    })
}

function uploadImage() {
    //$.blockUI();
    let image = new FormData();
    image.append("image_file", $("#uploadPic")[0].files[0])
    image.append("data", "your value");

    /**
     * Same as ^
     * let image = {
     *  image_file =  $("#file")[0].files[0]
     * }
     */

    $.ajax({
        "url": productImage_API,
        "type": "POST",
        "data": image,
        "enctype": "multipart/form-data",
        "cache": false,
        "contentType": false,
        "processData": false,
        "success": function (response) {
            //$.unblockUI();
            alert(response)
        }
    })
}

function addProduct() {
    let addProductForm = {
        prodID: $("#productCode").val(),
        prodName: $("#inputProdName").val(),
        prodPrice: $("#inputProdPrice").val(),
        vendor: $("#vendorID").val(),
        CategA: $("#menuCategA").is(":checked"),
        CategB: $("#menuCategB").is(":checked"),
        CategC: $("#menuCategC").is(":checked"),
        CategD: $("#menuCategD").is(":checked"),
        CategE: $("#menuCategE").is(":checked"),
        stat: "Active"
    };
    clearForm();
    $.ajax({
        "url": addProduct_API,
        "type": "POST",
        "data": "store=" + JSON.stringify(addProductForm),
        "success": function (response) {
            console.log(response)
            let responseJSON = JSON.parse(response);
            alert(responseJSON.description);
            return false;
        }
    })
    return false;
}

function clearForm() {
    document.getElementById("addProduct-Form").submit();
    document.getElementById("addProduct-Form").reset();
}