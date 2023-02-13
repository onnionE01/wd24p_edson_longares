const listProduct_API = "../../api/productList.php";

const menuBook =document.querySelector(".menuList");

window.addEventListener("load",getItemsList());

function getItemsList(){
    $.ajax({
        "url": listProduct_API + "?getAllProduct",
        "success": function (response) {
              console.log(response)
              let jsonParse=JSON.parse(response); 
              let fProducts = jsonParse.records; 
            var items='';

            for(var i=0; i<fProducts.length; i++ ) {
            
                items+=`<div class="mealBox row">
                            <div class="mealImg col">
                                <img class="productPic" src="../../api/${fProducts[i].Product_Image}" alt="IMAGE">
                            </div>
                            <div class="mealDetails col">
                                <h3>${fProducts[i].ProductName}</h3>
                                <span>${fProducts[i].Price}<span>
                                <br />
                                <button class="addOrderBtn" onclick='addOrder("${fProducts[i].Menu_ID}")'>ORDER</button>
                            </div>
                        </div>`;
            }
            // $("#featureTable").HTML(fProd);
            menuBook.innerHTML=items;
        }
    })
}
