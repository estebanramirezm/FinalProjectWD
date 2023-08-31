const urlQuery = new URLSearchParams(window.location.search);
var prodId = parseInt(urlQuery.get('id'));
const originalID = prodId;

let product;
if (prodId >= 1 && prodId <= 6) {
  product = JSON.parse(bestSellers);
  prodId -= 1;
} else if (prodId >= 7) {
  product = JSON.parse(allCategories);
  prodId -= 6;
}

// Function that outputs the percentage of a subtraction
function percentage(original, sale) {
  const percentage = 100 - ((sale / original) * 100);
  return Math.round(percentage);
}


function pageOutput(product) {
document.write('<div class="image-slider">');
document.write(`<style>.image-slider{background-image: url('${product.imagePath}'); }</style>`);
document.write('<div class="product-images">');
document.write('<img src="' + product.imagePath + '" class="product-thumb" alt="">');
document.write('<img src="' + product.imagePath2 + '" class="product-thumb" alt="">');
document.write('<img src="' + product.imagePath3 + '" class="product-thumb" alt="">');
document.write('<img src="' + product.imagePath4 + '" class="product-thumb" alt="">');
document.write('</div>');
document.write('</div>');
document.write('<div class="details">');
document.write('<h2>' + product.productName + '</h2>');
document.write('<p class="product-short-des">' + product.shortDescription + '</p>');
if (product.hasOwnProperty("sale")) {
  document.write('<span class="product-price">$' + product.sale + '</span>');
  document.write('<span class="product-actual-price">$' + product.price + '</span>');
  document.write('<span class="product-discount">( ' + percentage(product.price, product.sale) + '% off )</span>');
} else {
  document.write('<span class="product-price">$' + product.price + '</span>');
};
document.write('<p class="product-sub-heading">select size</p>');
document.write('<input type="radio" name="size" value="s" checked hidden id="s-size">');
document.write('<label for="s-size" class="size-radio-btn check">s</label>');
document.write('<input type="radio" name="size" value="m" hidden id="m-size">');
document.write('<label for="m-size" class="size-radio-btn">m</label>');
document.write('<input type="radio" name="size" value="l" hidden id="l-size">');
document.write('<label for="l-size" class="size-radio-btn">l</label>');
document.write('<input type="radio" name="size" value="xl" hidden id="xl-size">');
document.write('<label for="xl-size" class="size-radio-btn">xl</label>');
document.write('<input type="radio" name="size" value="xxl" hidden id="xxl-size">');
document.write('<label for="xxl-size" class="size-radio-btn">xxl</label>');
document.write('<button class="btn cart-btn">add to cart</button>');
document.write('<button class="btn">add to wishlist</button>');
document.write('</div>');
}

if (originalID >= 1 && originalID <= 6) 
{
  console.log("product is bestseller");
  pageOutput(product[prodId]);
} 
else if (originalID >= 7 && originalID <= 12)
{
  console.log("product is smart home");
  pageOutput(product[0].products[prodId]);
} 
else if (originalID >= 13 && originalID <= 18) 
{
  console.log("product is wearables");
  pageOutput(product[1].products[prodId]);
} 
else if (originalID >= 19 && originalID <= 24) 
{
  console.log("product is mobile device");
  pageOutput(product[2].products[prodId]);
} 
else {
  console.log("product ID is out of range");
  window.location.href = "/html/404.html";
};

