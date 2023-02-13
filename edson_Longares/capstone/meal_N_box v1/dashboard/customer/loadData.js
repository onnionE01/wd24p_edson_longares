const product_API = "../../api/displayProducts.php";
const productSlide = document.querySelector(".prodScroller");
const itemCarousel = document.querySelector(".item-slide");

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
      iniliatizeSlider()
    }
  })
}

function iniliatizeSlider() {
  let cars = "";
  // let itemSlide = "";
  console.log(carsObject)
  x = 0
  for (let car in carsObject) {
    // cars+=`<div class="slide">
    // <img src="api/${carsObject[car].img}" alt="image">
    // <br><br>
    // <div>
    // <h3>${carsObject[car].model}</h3>
    // <p>${carsObject[car].type}</p>
    // </div>
    // </div>`;
    if (x <= 5) {

      // itemSlide+=` <div class="carousel-item active">
      //                     <img src="${carsObject[car].img}" alt="Los Angeles" width="1100" height="500">
      //                 </div>`;

      cars += `<div class="prodDetails col-sm">
                    <div class="product-Details prodHovr col">
                        <div class="product-img fProduct1" style="background-image:url(../../api/${carsObject[car].img});">
                            <a href="#">ORDER NOW</a> 
                        </div>
    
                        <div class="fPrice col">
                          <h5>${carsObject[car].model}</h5>
                          <p>Php${carsObject[car].type}</p>
                        </div>
                    </div>
               </div>`;
    } else if (x <= 10) {

      cars += `
      <div class="w-100"></div>
      <div class="prodDetails col-sm">
                <div class="product-Details prodHovr col">
                    <div class="product-img fProduct1" style="background-image:url(../../api/${carsObject[car].img});">
                        <a href="#">ORDER NOW</a> 
                    </div>
                    <div class="fPrice col">
                      <h5 class="prodName">${carsObject[car].model}</h5>
                      <p>Php${carsObject[car].type}</p>
                    </div>
                </div>
            </div>`;
    }
  }
  // console.log(itemSlide)
  // itemCarousel.innerHTML = itemSlide;
  productSlide.innerHTML = cars;
}
