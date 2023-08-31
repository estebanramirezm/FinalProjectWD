// create header element
const header = document.createElement("header");
header.classList.add("hero-section");

// create content div
const content = document.createElement("div");
content.classList.add("content");

// create logo image element
const logo = document.createElement("img");
logo.src = "/media/logo.png";
logo.classList.add("logo");
logo.alt = "";

// create sub-heading paragraph element
const subHeading = document.createElement("p");
subHeading.classList.add("sub-heading");
subHeading.textContent = "";

// append logo and sub-heading elements to content div
content.appendChild(logo);
content.appendChild(subHeading);

// append content div to header element
header.appendChild(content);

// append header element to the body of the document
document.body.appendChild(header);


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})