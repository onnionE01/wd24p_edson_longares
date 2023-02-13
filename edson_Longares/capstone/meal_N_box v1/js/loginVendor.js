const VENDOR_API = "api/loginVendor.php";

function loginVendor() {
    let loginCredentials = {
        vendor : $("#inputVendorID").val(),
        password : $("#inputVendorPassword").val()
    }
    $.ajax({
        "url" : VENDOR_API,
        "type" : "POST",
        "data" : "auth=" + JSON.stringify(loginCredentials),
        "success" : function(response) {
            console.log(response);
            let responseJSON = JSON.parse(response)
            alert(responseJSON.description);

            if (responseJSON.code == 200) {
                 window.location.href = "dashboard/vendors/";
            }

            return false;
        }
    })

    return false;
}