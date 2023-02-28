const DASHBOARD_API = "../../api/dashboard.php";

window.addEventListener("load", getAuthenticatedUser());

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
                $("#vendorID").text(responseJSON.details.VendorName)
            } else {
                window.location.href = "../../"
            }
        }
    })
}