const DASHBOARD_API = "../../api/dashboardUser.php";
let activeUser="";
window.addEventListener("load", getAuthenticatedUser());

function getAuthenticatedUser() {
 
    $.ajax({
        "url" : DASHBOARD_API + "?getAuthUser",
        "success" : function(response) {
            console.log(response)
            let responseJSON = JSON.parse(response);
            console.log(responseJSON.details.CustomerID)
            if (responseJSON.code == 200) {
                activeUser=responseJSON.details.CustomerID;
                $("#activeUserID").text(responseJSON.details.CustomerID)
                $("#customerName").text(responseJSON.details.FirstName)
            } else {
                window.location.href = "../../"
            }
        }
    })
}

function loadMyTray() {
    sessionStorage.setItem("logUser",activeUser);
    window.location.href = "../../pages/myTray/";
}