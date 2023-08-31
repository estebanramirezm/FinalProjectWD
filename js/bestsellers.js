var productList = JSON.parse(bestSellers);

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

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

// Create the section element
const section = document.createElement('section');
section.classList.add('product');
section.setAttribute('id', 'best-sellers');

// Create the heading element
const heading = document.createElement('h2');
heading.classList.add('product-category');
heading.textContent = 'Best Sellers';
section.appendChild(heading);

// Create the container element
const container = document.createElement('div');
container.classList.add('product-container');

// Function that creates a product card element
function createCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  const image = document.createElement('div');
  image.classList.add('product-image');

  const img = document.createElement('img');
  img.classList.add('product-thumb');
  img.src = product.imagePath;
  img.alt = '';

  const button = document.createElement('button');
  button.classList.add('card-btn');
  button.textContent = 'add to wishlist';

  image.appendChild(img);
  image.appendChild(button);

  const info = document.createElement('div');
  info.classList.add('product-info');

  const productName = document.createElement('h2');
  productName.classList.add('product-brand');
  productName.textContent = product.productName;

  const shortDescription = document.createElement('p');
  shortDescription.classList.add('product-short-des');
  shortDescription.textContent = product.shortDescription;

  const price = document.createElement('span');
  price.classList.add('price');
  price.textContent = currency(product.price);

  info.appendChild(productName);
  info.appendChild(shortDescription);
  info.appendChild(price);

  card.appendChild(image);
  card.appendChild(info);

  return card;
}

// Loop that creates a product card for each item in the array
for (var i = 0; i < productList.length; i++) {
  container.appendChild(createCard(productList[i]));
}

section.appendChild(container);

// Add the section element to the document
document.body.appendChild(section);

// Function to scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  const sectionPosition = section.offsetTop;
  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth'
  });
}

/* Add event listener to nav link
const navLink = document.querySelector('#nav-link');
navLink.addEventListener('click', function(e) {
  e.preventDefault();
  scrollToSection('best-sellers');
}); */