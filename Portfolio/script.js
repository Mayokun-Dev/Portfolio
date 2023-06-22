const primaryNav = document.querySelector(".primary-navigation")
const  topBar= document.querySelector('header');
const navToggle = document.querySelector(".mobile-nav-toggle")
const toggleBtn = document.getElementById('toggle');
const navLink = document.querySelectorAll('.navbar li');

const sideBar = document.querySelector('nav');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible")

    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', true); 
        navToggle.setAttribute('aria-expanded', true);
    } else if(visibility === "true"){
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false); 
    }
}); 
navToggle.addEventListener('click', () =>{
    document.body.classList.toggle("stop-scroll")
  })
  navLink.forEach(function(nav){
    nav.addEventListener('click', function(){
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false); 
    })
  })



let elementsArray = document.querySelectorAll(".section_wrapper");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();