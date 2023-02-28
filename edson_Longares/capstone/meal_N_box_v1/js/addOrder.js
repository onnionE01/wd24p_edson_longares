const ADDITEM_API = "api/tray.php";

const  itemTray =document.querySelector("body"),
        itemDetail = itemTray.querySelector(".addItem"),
        selectedProd =itemTray.querySelector(".product-Details");
        let  ordernum="";
        var myTrayModal =itemTray.querySelector(".myTray");


// selectedProd.addEventListener("click",orderNow(id));
function count(fieldName, type) {
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
}

function orderNow(id) {
    $.ajax({
     "url" : ADDITEM_API + "?show&id=" + id,
      "success": function (response) {
        console.log(response);
            let orderItem = JSON.parse(response).records;
            var itemPrice=0;
            let cars = "";
            for (let item in orderItem) {
                
                itemPrice= orderItem[item].Price;

                // <label id="itemId">${orderItem[item].Menu_ID}</label>

                cars += `
                <div class="order-products center">
                    <div class="product-img fProduct1 center row" style="background-image:url(api/${orderItem[item].Product_Image});">
                        <a href="#" ></a> 
                    </div>
                    <br />
                    <div class="row center item-detail">
                      <h5>${orderItem[item].ProductName}</h5>
                      <span class="itemPrice">&#8369; <label id ="itemPrice">${orderItem[item].Price}</label></span>
                    </div>
                    <hr />
                    <div class="row order-first">
                    <div class="center">
                        <div class="input-group">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-default btn-number" data-type="minus"
                                    data-field="qty" onclick='count("qty", "minus")'>
                                    <span class="glyphicon glyphicon-minus">-</span>
                                </button>
                            </span>
                            <input type="text" name="qty" id="qty" class="form-control input-number" value="1"
                                min="0" max="10">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-default btn-number" data-type="plus"
                                    data-field="qty" onclick='count("qty", "plus")'>
                                    <span class="glyphicon glyphicon-plus">+</span>
                                </button>
                            </span>
                        </div>
                    </div>
                    </div>
                    <br />
                    <div row>
                    <button type="button" class="btnAddCart" onclick='addCart("${orderItem[item].Menu_ID}")' >ADD ORDER</button>
                    </div >

                </div>`;
            }
            // console.log(itemSlide)
            // itemCarousel.innerHTML = itemSlide;
            itemDetail.innerHTML = cars;
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
              addCart(itemID);
          }
      })
  }

function addCart(itemID){

    var qty = $("#qty").val();
    var price= $("#itemPrice").text();
    var subTotal = qty*price;

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

  

    // function displayTray(id)
    // {
    //     // let userActive= {
            
    //     //     userId:$("#userID").text()
    //     // }

    //     $.ajax({
    //         "url" : ADDITEM_API + "?showMyTray&id=" + id,
    //         "success" : function(response) {
    //              console.log(response);
    //             let trayItems = JSON.parse(response).records;
    //             let myTray="";
    //             for (let item in trayItems) {
    //                 myTray+=`<div class="col order-first">
    //                 <div class="center">
    //                     <p>
    //                     </p>
    //                     <div class="input-group">
    //                         <span class="input-group-btn">
    //                             <button type="button" class="btn btn-default btn-number" data-type="minus"
    //                                 data-field="quant[1]">
    //                                 <span class="glyphicon glyphicon-minus">-</span>
    //                             </button>
    //                         </span>
    //                         <input type="text" name="quant[1]" class="form-control input-number" value="1"
    //                             min="0" max="10">
    //                         <span class="input-group-btn">
    //                             <button type="button" class="btn btn-default btn-number" data-type="plus"
    //                                 data-field="quant[1]">
    //                                 <span class="glyphicon glyphicon-plus">+</span>
    //                             </button>
    //                         </span>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="col">
    //                 <div class="Menu030 order-img" style="background-image:url(api/${orderItem[item].Product_Image});">
    //                 </div>
    //                 <span>${orderItem[item].ProductName}</span>
    //             </div>
    //             <div class="col order-last">
    //                 <div class="addorder-div">
    //                 <span>&#8369
    //                     <label class="myOrder" Id="qty-order">
    //                         ${orderItem[item].Price}
    //                     </label>
    //                 </span>
    //                 </div>
    //             </div>`;
    //         }
    //         itemDetail.innerHTML = cars;
    //     }
    //     })
    // }
  
    
    function displayTray() {

        let activeID=$("#userID").text();
        console.log(activeID);

        $.ajax({
         "url" : ADDITEM_API + "?showMyTray&id=" +activeID,
          "success": function (response) {
            console.log(response);
                let trayItems = JSON.parse(response).records;
                let myTray = "";
                var subTotal=0;
                var totalSum=0;

                for (let tray in trayItems) {
                    
                    // <label id="itemId">${orderItem[item].Menu_ID}</label>
                    subTotal = trayItems[tray].SubAmount;
                    totalSum += subTotal;
                    myTray+=`<div class="mealonTray row">
                        <div class="col order-first">
                            <div class="center">
                             <p>
                            </p>
                                <div class="input-group">
                                    <span class="input-group-btn">
                                        <button type="button" class="btn btn-default btn-number" data-type="minus"
                                        data-field="quant[1]">
                                        <span class="glyphicon glyphicon-minus">-</span>
                                        </button>
                                    </span>
                                    <input type="text" name="quant[1]" id="trayQty"class="form-control input-number" value="${trayItems[tray].Order_Qty}"
                                    min="0" max="10" onchange="subTotal()">
                                    <span class="input-group-btn">
                                        <button type="button" class="btn btn-default btn-number" data-type="plus"
                                         data-field="quant[1]">
                                        <span class="glyphicon glyphicon-plus">+</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="Menu030 order-img" style="background-image:url(api/${trayItems[tray].Product_Image});">
                            </div>
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
                console.log(myTray);
                myTrayModal.innerHTML =myTray;
          }
        })
      }