const ADDITEM_API = "../../api/tray.php";
const ORDERITEM_API = "../../api/order.php";

const itemTray = document.querySelector("body"),
    itemDetail = itemTray.querySelector(".addItem"),
    selectedProd = itemTray.querySelector(".product-Details");
let ordernum = "";
var myTrayModal = itemTray.querySelector(".myTray");
var trayItems = [];

function loadTray() {
    var activeID = sessionStorage.getItem("logUser");
    console.log(activeID);

    $.ajax({
        "url": ADDITEM_API + "?showMyTray&id=" + activeID,
        "success": function (response) {
            console.log(response);
            trayItems = JSON.parse(response).records;
            let myTray = "";
            var subTotal = 0.0;
            var totalSum = 0.0;

            for (let tray in trayItems) {

                // <label id="itemId">${orderItem[item].Menu_ID}</label>
                subTotal = trayItems[tray].SubAmount;
                totalSum = parseFloat(totalSum) + parseFloat(subTotal);

                myTray += `<hr />
                        <div class="row mealonTray">

                        <div class="col order-first">
                            <form id='myform' method='POST' action='#'>
                                <input type='button' value='-' class='qtyminus' field='quantity' />
                                <input type='text' name='quantity' value='${trayItems[tray].Order_Qty}' class='qty' />
                                <input type='button' value='+' class='qtyplus' field='quantity' />
                            </form>
                        </div>
                        <div class="col">
                            <div class="product-img fProduct1" style="background-image:url(../../api/${trayItems[tray].Product_Image});">
                            </div>
                        </div>
                        <div class="col">
                            <span>${trayItems[tray].ProductName}</span>
                        </div>
                        <div class="col order-last">
                            <div class="addorder-div">
                            <span>&#8369
                            <label class="myOrder" Id="subTotal">
                            ${subTotal}
                            </label>
                            </span>
                            </div>
                        </div>
                    </div>`;
            }
            // console.log(itemSlide)
            // itemCarousel.innerHTML = itemSlide;
            $("#orderGrandTotal").text(totalSum.toFixed(2));
            console.log(myTray);
            myTrayModal.innerHTML = myTray;
        }
    })
}


function orderConfirm() {
    let responseJSON = ""
    let addtoOrder = [];
    var x = 0;
    for (let tray in trayItems) {
        if (x = 0) {
            addtoOrder = {
                CustomerID: sessionStorage.getItem("logUser"),
                itemID: trayItems[tray].Menu_ID,

                itemName: trayItems[tray].ProductName,
                ItemPrice: trayItems[tray].Price,

                vendor: trayItems[tray].VendorID,

                QTY: trayItems[tray].Order_Qty,

                subTotal: trayItems[tray].SubAmount,

                oderStatus: "Send"

            }
        } else {
            addtoOrder += {
                CustomerID: sessionStorage.getItem("logUser"),

                itemID: trayItems[tray].Menu_ID,

                itemName: trayItems[tray].ProductName,
                ItemPrice: trayItems[tray].Price,

                vendor: trayItems[tray].VendorID,

                QTY: trayItems[tray].Order_Qty,

                subTotal: trayItems[tray].SubAmount,

                oderStatus: "Send"
            }
        }
        x++;
    }

console.log(JSON.stringify(addtoOrder));
$.ajax({
    "url": ORDERITEM_API,
    "type": "POST",
    "data": "store=" + JSON.stringify(addtoOrder),
    "success": function (response) {
        console.log(response);
        responseJSON = JSON.parse(response);
        alert(responseJSON.description);
        return false;
    }
})
}
