const product_API = "../api/displayProducts.php";
const productSlide = document.querySelector(".my-slider");

let carsObject = [
    {
        "img": "https://images.pexels.com/photos/9784188/pexels-photo-9784188.jpeg?cs=srgb&dl=pexels-mathias-reding-9784188.jpg&fm=jpg",
        "model": "FERRARI 296 GTS",
        "type": "coupe"
    }
];

window.addEventListener("load", getItems());

function getItems() {
    $.ajax({
        "url": product_API + "?showFeaturedProducts",
        "success": function (response) {
            console.log(response);
            carsObject = JSON.parse(response).records;
     
            for (let car in carsObject) {
               var x=1;

               if (x=1){
                 x+=1
                 
                $("#picMenu1").style.backgroundImage = `url("../api/${carsObject[car].img}")`;
                $("nameMenu1").val(carsObject[car].model);
                $("nameMenu1").val(carsObject[car].type);

                // productSlide.querySelector(".picMenu1").style.backgroundImage = `url('../api/${carsObject[car].img}')`;
                // productSlide.querySelector(".nameMenu1").innerHTML = carsObject[car].model;
                // productSlide.querySelector(".priceMenu1").innerHTML = carsObject[car].type;
                
                // slide.parentNode.appendChild(productSlide);

                } else if (x=2){
                    x+=1

                    $("#picMenu2").style.backgroundImage.url= `"../api/${carsObject[car].img}"`;
                    $("#nameMenu2").val(carsObject[car].model);
                    $("#nameMenu2").val(carsObject[car].type);

                    // let productSlide = document.querySelector(".slideMenu2");
    
                    // productSlide.querySelector(".picMenu2").style.backgroundImage = `url('../api/${carsObject[car].img}')`;
                    // productSlide.querySelector(".nameMenu2").innerHTML = carsObject[car].model;
                    // productSlide.querySelector(".priceMenu2").innerHTML = carsObject[car].type;

                    // productSlide.parentNode.appendChild(productSlide);

                } else if (x=3){
                    x+=1

                    $("#picMenu3").style.backgroundImage.url= `"../api/${carsObject[car].img}"`;
                    $("#nameMenu3").val(carsObject[car].model);
                    $("#nameMenu3").val(carsObject[car].type);
                    // let productSlide = document.querySelector(".slideMenu3");
    
                    // productSlide.querySelector(".picMenu3").style.backgroundImage = `url('../api/${carsObject[car].img}')`;
                    // productSlide.querySelector(".nameMenu3").innerHTML = carsObject[car].model;
                    // productSlide.querySelector(".priceMenu3").innerHTML = carsObject[car].type;

                    // productSlide.parentNode.appendChild(productSlide);
                } else if (x=4){
                    x+=1
                    $("#picMenu4").style.backgroundImage.url= `"../api/${carsObject[car].img}"`;
                    $("#nameMenu4").val(carsObject[car].model);
                    $("#nameMenu4").val(carsObject[car].type);
                    // let productSlide = document.querySelector(".slideMenu4");
    
                    // productSlide.querySelector(".picMenu4").style.backgroundImage = `url('../api/${carsObject[car].img}')`;
                    // productSlide.querySelector(".nameMenu4").innerHTML = carsObject[car].model;
                    // productSlide.querySelector(".priceMenu4").innerHTML = carsObject[car].type;
                    // slide.parentNode.appendChild(productSlide);
                }else if (x=5){
                    x+=1
                    $("#picMenu5").style.backgroundImage.url= `"../api/${carsObject[car].img}"`;
                    $("#nameMenu5").val(carsObject[car].model);
                    $("#nameMenu5").val(carsObject[car].type);
                    // let productSlide = document.querySelector(".slideMenu5");
    
                    // productSlide.querySelector(".picMenu5").style.backgroundImage = `url('../api/${carsObject[car].img}')`;
                    // productSlide.querySelector(".nameMenu5").innerHTML = carsObject[car].model;
                    // productSlide.querySelector(".priceMenu5").innerHTML = carsObject[car].type;
                    // slide.parentNode.appendChild(productSlide);
                }else if (x=6){
                    x+=1
                    $("#picMenu6").style.backgroundImage.url= `"../api/${carsObject[car].img}"`;
                    $("#nameMenu6").val(carsObject[car].model);
                    $("#nameMenu6").val(carsObject[car].type);
                    // let productSlide = document.querySelector(".slideMenu5");
    
                    // productSlide.querySelector(".picMenu5").style.backgroundImage = `url('../api/${carsObject[car].img}')`;
                    // productSlide.querySelector(".nameMenu5").innerHTML = carsObject[car].model;
                    // productSlide.querySelector(".priceMenu5").innerHTML = carsObject[car].type;
                    // slide.parentNode.appendChild(productSlide);
                }else if (x=7){
                    x+=1
                    $("#picMenu7").style.backgroundImage.url= `"../api/${carsObject[car].img}"`;
                    $("#nameMenu7").val(carsObject[car].model);
                    $("#nameMenu7").val(carsObject[car].type);
                    
                    // let productSlide = document.querySelector(".slideMenu7");
    
                    // productSlide.querySelector(".picMenu7").style.backgroundImage = `url('../api/${carsObject[car].img}')`;
                    // productSlide.querySelector(".nameMenu7").innerHTML = carsObject[car].model;
                    // productSlide.querySelector(".priceMenu7").innerHTML = carsObject[car].type;
                    // slide.parentNode.appendChild(productSlide);
                }else if (x=8){
                    x+=1
                    $("#picMenu8").style.backgroundImage.url= `"../api/${carsObject[car].img}"`;
                    $("#nameMenu8").val(carsObject[car].model);
                    $("#nameMenu8").val(carsObject[car].type);
                    // let productSlide = document.querySelector(".slideMenu8");
    
                    // productSlide.querySelector(".picMenu8").style.backgroundImage = `url('../api/${carsObject[car].img}')`;
                    // productSlide.querySelector(".nameMenu8").innerHTML = carsObject[car].model;
                    // productSlide.querySelector(".priceMenu8").innerHTML = carsObject[car].type;
                    // slide.parentNode.appendChild(productSlide);
                } else if (x=9){
                    x+=1
                    $("#picMenu9").style.backgroundImage.url= `"../api/${carsObject[car].img}"`;
                    $("#nameMenu9").val(carsObject[car].model);
                    $("#nameMenu9").val(carsObject[car].type);
                    // let productSlide = document.querySelector(".slideMenu9");
    
                    // productSlide.querySelector(".picMenu9").style.backgroundImage = `url('../api/${carsObject[car].img}')`;
                    // productSlide.querySelector(".nameMenu9").innerHTML = carsObject[car].model;
                    // productSlide.querySelector(".priceMenu9").innerHTML = carsObject[car].type;
 
                } else if (x=10){
                     x+=1
                     $("#picMenu10").style.backgroundImage.url=`"../api/${carsObject[car].img}"`;
                     $("#nameMenu10").val(carsObject[car].model);
                     $("#nameMenu10").val(carsObject[car].type);
                    // let productSlide = document.querySelector(".slideMenu10");
    
                    // productSlide.querySelector(".picMenu10").style.backgroundImage = `url('../api/${carsObject[car].img}')`;
                    // productSlide.querySelector(".nameMenu10").innerHTML = carsObject[car].model;
                    // productSlide.querySelector(".priceMenu10").innerHTML = carsObject[car].type;

                }

            }
        }

        })
}