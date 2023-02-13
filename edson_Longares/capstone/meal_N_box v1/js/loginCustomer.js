const LOGIN_API = "api/loginUser.php";

function loginCustomer() {
    let loginCredentials = {
        contact : $("#inputContact").val(),
        password : $("#inputPassword").val()
    }
    $.ajax({
        "url" : LOGIN_API,
        "type" : "POST",
        "data" : "auth=" + JSON.stringify(loginCredentials),
        "success" : function(response) {
            console.log(response);
            let responseJSON = JSON.parse(response)
            alert(responseJSON.description);

            if (responseJSON.code == 200) {
                 window.location.href = "dashboard/customer/";
            }

            return false;
        }
    })

    return false;
}