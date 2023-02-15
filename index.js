// Const
const hatsImagesArray = ["./images/hats/hats_img_1.jpg", "./images/hats/hats_img_2.jpg", "./images/hats/hats_img_3.jpg"];
const hatsNamesArray = ["Octopus hat 1", "Octopus hat 3", "Octopus hat 2"];
const tShirtsImagesArray = ["./images/tshirts/tshirt_img_1.jpg", "./images/tshirts/tshirt_img_2.jpg", "./images/tshirts/tshirt_img_3.jpg"];
const tShirtsNamesArray = ["Recycling", "Way of the Korabl", "Zelensky style"];
const jeansImagesArray = ["./images/jeans/jeans_img_1.jpg", "./images/jeans/jeans_img_2.jpg", "./images/jeans/jeans_img_3.jpg"];
const jeansNamesArray = ["Jeans 1", "Jeans 2", "Jeans 3"];
const products = document.querySelector(".products");
const product = document.querySelector(".product");
const categories = Array.prototype.slice.call(document.querySelectorAll(".categories-list_item"));
const productsList = Array.prototype.slice.call(document.querySelectorAll(".products-list_item"));
let category;
const buyBtn = document.querySelector(".buy-button");
const popUp = document.querySelector(".popUp-wrapper");
// Category function

function categorySelector () {
    const targetIndex = categories.indexOf(event.currentTarget);
    
    switch (targetIndex) {
        case 0:
            category = 0;
            for (let index = 0; index < productsList.length; index++) {
               document.querySelectorAll(".product-image")[index].src = tShirtsImagesArray[index] 
            };
            for (let index = 0; index < productsList.length; index++) {
               document.querySelectorAll(".product-name")[index].innerHTML = tShirtsNamesArray[index] 
            };
            break;
        case 1:
            category = 1;
            for (let index = 0; index < productsList.length; index++) {
                document.querySelectorAll(".product-image")[index].src = jeansImagesArray[index] 
             };
            for (let index = 0; index < productsList.length; index++) {
                document.querySelectorAll(".product-name")[index].innerHTML = jeansNamesArray[index] 
             };
            break;
        case 2:
            category = 2;
            for (let index = 0; index < productsList.length; index++) {
                document.querySelectorAll(".product-image")[index].src = hatsImagesArray[index] 
             };
            for (let index = 0; index < productsList.length; index++) {
                document.querySelectorAll(".product-name")[index].innerHTML = hatsNamesArray[index] 
             };
            break;
        
    };
    products.style.display = "flex";
};

// Product selection function

function productSelection () {
    const targetIndex = productsList.indexOf(event.currentTarget);
    switch (category) {
        case 0:
            document.querySelector(".product .product-image").src = tShirtsImagesArray[targetIndex];
            document.querySelector(".product .product-name").innerHTML = tShirtsNamesArray[targetIndex];
            break;
        case 1:
            document.querySelector(".product .product-image").src = jeansImagesArray[targetIndex];
            document.querySelector(".product .product-name").innerHTML = jeansNamesArray[targetIndex];
            break;
        case 2:
            document.querySelector(".product .product-image").src = hatsImagesArray[targetIndex];
            document.querySelector(".product .product-name").innerHTML = hatsNamesArray[targetIndex];
            break;
    }
    product.style.display = "flex";
}

// Buy bttn popUp

function buy () {
    popUp.style.display = "flex";
    setTimeout(function(){location.reload()},2000);
}

// Events


for (let index = 0; index < productsList.length; index++) {
    productsList[index].addEventListener('click', productSelection)
};

for (let index = 0; index < categories.length; index++) {
    categories[index].addEventListener('click', categorySelector)
};
buyBtn.addEventListener('click', buy)