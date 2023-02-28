const PRODUCTLIST_API = "../../api/productList.php";
const ADDITEM_API = "../../api/tray.php";

const menuBook =document.querySelector(".meal-menus");
var ordernum=0;

window.addEventListener("load",getItemsList());

function getItemsList(){
    $.ajax({
        "url": PRODUCTLIST_API + "?getAllProduct",
        "success": function (response) {
              console.log(response)
              let jsonParse=JSON.parse(response); 
              let fProducts = jsonParse.records; 
            var items='';

            for(var i=0; i<fProducts.length; i++ ) {
                // items+=`<div class="mealBox">
                //             <div class="mealImg">
                //                 <img src="../../../api/${fProducts[i].Product_Pic}" width="30%" alt="IMAGE">
                //             </div>
                //             <div class="mealDetails">
                //                 <h3>${fProducts[i].Product_Name}</h3>
                //                 <span>${fProducts[i].Price}<span>
                //             </div>
                //             <div class="addOrder">
                //             <button class="addOrderBtn" onclick='addOrder("${fProducts[i].Menu_ID}")'>ORDER</button>
                //             </div>
                //         </div>`;

                    items+=`<div class="row per-row-prod">
                        <div class="col order-first per-col-prod">
                            <div class="slide eHov">
                                <div class="Menu005 product-img" style="background-image:url(../../api/${fProducts[i].Product_Image});" >
                                    <a href="#">ORDER NOW</a>
                                </div>
                            </div>
                        </div>
                        <div class="col per-col-prod">
                            <div>
                                <span>
                                    <h5>${fProducts[i].ProductName}</h5>
                                </span>
                                <hr />
                                <span>Price:
                                    <label>${fProducts[i].Price}</label>
                                </span>
                                <hr />
                                <span>By:
                                    <label>${fProducts[i].VendorID}</label>
                                </span>
                            </div>
                        </div>
                        <div class="col order-last per-col-prod">
                            <div class="addorder-div">
                                <form class="myOrder" Id="addorder">
                                    <div class="center">
                                        <p>
                                        </p>
                                        <div class="input-group">
                                            <span class="input-group-btn">
                                                <button type="button" class="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                                                <span class="glyphicon glyphicon-minus">-</span>
                                                </button>
                                            </span>
                                            <input type="text" name="quant[1]" class="form-control input-number qty" value="1"
                                                min="0" max="10">
                                            <span class="input-group-btn">
                                                <button type="button" class="btn btn-default btn-number" data-type="plus"
                                                data-field="quant[1]">
                                                <span class="glyphicon glyphicon-plus">+</span>
                                             </button>
                                            </span>
                                        </div>
                                     </div>
                                    <hr>
                                    <button type="button" class="addorder-but" type="submit" onclick='addCart("${fProducts[i].Menu_ID}")'>Add Order</button>
                                </form>
                            </div>
                        </div>
                    </div>`;
            }
            // $("#featureTable").HTML(fProd);
            menuBook.innerHTML=items;
        }
    })
}



function getOrderID()
{
    $.ajax({
        "url" : ADDITEM_API + "?getOrderID",
        "success" : function(response) {
             console.log(response);
            let jsonParse=JSON.parse(response); 
            
            let num = jsonParse.records.length + 1; 
            var today = new Date();
            var curYear=today.getFullYear()
            var shortYear= curYear.toString().substr(-2)
            var curdate =  today.getDate()+""+(today.getMonth() +1)+""+shortYear;
            ordernum="mealNbox#"+num;
        }
    })
}


function addCart(itemID){

    var qty = $("#qty").val();
    var price= $("#itemPrice").text();
    var subTotal = qty*price;
    getOrderID();

let addtoTray = {

    orderID:ordernum,

    customerID: $("#userID").text(),

    itemID:itemID,

    QTY:qty,

    subTotal:subTotal,

    oderStatus:"OnTray"

}


         $.ajax({
             "url": ADDITEM_API,
             "type": "POST",
            "data": "store=" + JSON.stringify(addtoTray),
            "success": function (response) {
               console.log(response);
                 let responseJSON = JSON.parse(response);
                 alert(responseJSON.description);
                 return false;
             }
         })
         return false;
    }
