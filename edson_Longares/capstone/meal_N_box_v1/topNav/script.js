const PRODUCTLIST_API = "../api/productList.php";
const ADDITEM_API = "../api/tray.php";

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
        //       items+=`<div class="row items-holder">
        //       <div class="info-holder row">
        //           <div class=" col img-holder" style="background-image:url(../../api/${fProducts[i].Product_Image});">

        //           </div>
        //           <div class="col namePrice-holder">
        //           <span>
        //           <h5>${fProducts[i].ProductName}</h5>
        //           </span>
        //           <span>Price: &#8369
        //           <label class="itemPrice"> ${fProducts[i].Price}</label>
        //           </span>
        //           </div>
        //       </div>
        //       <div class="row btn-Holder">
        //           <button type="button" class="addorder-btn" type="submit" onclick='addCart("${fProducts[i].Menu_ID}")'>Add Order</button>
        //       </div>
        //   </div>`;

          items+=`<div class="row items-holder">
          <div class="info-holder row">
              <div class=" row img-holder" style="background-image:url(../../api/${fProducts[i].Product_Image});">

              </div>
              <div class="row namePrice-holder">
                  <span class="hold-price">
                    &#8369
                  <label class="itemPrice"> ${fProducts[i].Price}</label>
                  </span>
                  <span class="hold-name">
                  ${fProducts[i].ProductName}
                  </span>
              </div>
          </div>
          <div class="row btn-Holder">
              <button type="button" class="addorder-btn" type="submit"
              onclick='addCart("${fProducts[i].Menu_ID}")'>Add Order</button>
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
