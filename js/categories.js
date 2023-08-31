var productList = JSON.parse(allCategories);

// Constructor
function CardOutput(productName, imagePath, productName, shortDescription, price){
    this.productName = productName;
    this.imagePath = imagePath;
    this.productName = productName;
    this.shortDescription = shortDescription;
    this.price = price;
}
  // Function that formats a number as currency
  currency = (num) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return formatter.format(num);
  }


// Function that outputs the percentage of a subtraction
function percentage(original, sale) {
    const percentage = 100 - ((sale / original) * 100);
    return Math.round(percentage);
}
  

function categoryOuput(productList) {
  document.write('<section class="product">');    
  document.write('<h2 class="product-category" id="' + productList.category + '">' + productList.category + '</h2>');
  document.write('<div class="product-container">');
}  

// Function that outputs a stock card
function CardOutput(product) {
  document.write('<div class="product-card">');
  document.write('<div class="product-image">');
  if (product.hasOwnProperty("sale")) {
    document.write('<span class="discount-tag">' + percentage(product.price, product.sale) + '% off </span>');
  };
  document.write('<a href="/html/product.html?id=' + product.id + '">');
  document.write('<img src="' + product.imagePath + '" class="product-thumb" alt="">');
  document.write('</a>')
  document.write('<button class="card-btn">add to wishlist</button>');
  document.write('</div>');
  document.write('<div class="product-info">');
  document.write('<h2 class="product-brand">' + product.productName + '</h2>');
  document.write('<p class="product-short-des">' + product.shortDescription + '</p>');
  if (product.hasOwnProperty("sale")) {
    document.write('<span class="price">' + currency(product.sale) + '</span>');
  } else {
    document.write('<span class="price">' + currency(product.price) + '</span>');
  };
  document.write('</div>');
  document.write('</div>');
}


// Loop that calls the function as long as there are elements in the array
  for(var i =0; i<productList.length; i++)
  {
    categoryOuput(productList[i]);
    for(var j =0; j<productList[i].products.length; j++)
    {
      CardOutput(productList[i].products[j]);
    }
    document.write('</div>');    
    document.write('</section>');    
  }
  

