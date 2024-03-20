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