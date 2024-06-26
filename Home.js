const nav =document.querySelector("nav");
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");


window.addEventListener("scroll",()=>{
    const navHeight = nav.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;

    if(scrollHeight>navHeight){
        nav.classList.add("fixed-nav");
    }else{
        nav.classList.remove("fixed-nav");
    }
});

navToggle.addEventListener("click",()=>{
    linksContainer.classList.toggle("show-links");
});

/**Slider */

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})