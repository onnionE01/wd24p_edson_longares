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

            const slide = document.querySelector(".product-Details");

            // iterate over project array
            for (let car in carsObject) {

                // make a clone of .slide for new slide
                const newslide = slide.cloneNode(true);

                // add image background to .slide-img div
                console.log(`url('../api/${carsObject[car].img}')`)
                newslide.querySelector(".product-img").style.backgroundImage = `url('../api/${carsObject[car].img}')`;

                // add url href to .project-url anchor tag
                //newslide.querySelector(".project-url").href = `"http://"`;

                // add name to .project-name header  
                newslide.querySelector(".itemName").innerHTML = carsObject[car].model;

                // add description to .project-description paragraph
                newslide.querySelector(".itemPrice").innerHTML = carsObject[car].type;
                // add slide to .slide parent
                slide.parentNode.appendChild(newslide);
            }

            // remove original slide
            slide.parentNode.removeChild(slide);
        }

        })
}