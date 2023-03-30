//header
const header = document.querySelector(".fixed");

const logo = document.querySelector(".logo");
//go to up
const up = document.querySelector(".go-up");

//toggel burger bars
const burger = document.querySelector(".burger");
const mobile_nav = document.querySelector(".nav");
const bars = document.querySelector(".fa-bars");





// backgroun & logo

window.onscroll = ()=>{
      // console.log(this.scrollY);
    
        if (this.scrollY >= 170) {
                header.classList.add("bg-white");
                logo.src=("images/logo-black.jpg")
        } else {
                header.classList.remove("bg-white");
                logo.src=("images/logo.jpg")
        };


        if (this.scrollY >= 2700) {
                up.classList.add("left")
          } else {
                up.classList.remove("left")  
          };
     
};



// button go to top

up.onclick = () => {
        window.scrollTo({
                top:0,
                behavior:"smooth",
        })
};


// burgar icon change

burger.onclick = () => {
        mobile_nav.classList.toggle("nav-mobil-active");
   
        bars.classList.toggle("fa-xmark");
       
};

//slideshow
const slideshow = document.getElementById("slideshow");
                        //0 1                         //1 2                                             //2 3     
let images = ["images/about/about1.jpg", "images/about/about2.jpg", "images/about/Maintain-Work-Life-Balance-While-Working-from-Home.jpg"];
let i = 0;


function slidesho() {
        slideshow.setAttribute("src", images[i]);

        if (i < images.length - 1) {
                i++
        }else{
                i = 0;
        };

        setTimeout(() => {
                slidesho();
        }, 2000);
}  
slidesho();


// remove nav menu when click on nav links 

const linkAction = document.querySelectorAll(".nav-link");

function menuRemove(){
        mobile_nav.classList.remove("nav-mobil-active");
        bars.classList.remove("fa-xmark");

};

linkAction.forEach(

        (link) => link.addEventListener("click", menuRemove)

);





// highlight  nav link when scroll & reach section

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".fixed .container ul li");
const navA = document.querySelectorAll(".fixed .container ul li a");



window.addEventListener("scroll", () =>{

        let current = "";

        const scrollY = window.pageYOffset;  // the value of scrollY
        
        sections.forEach( section =>{
                const top = section.offsetTop;  // location of the Element how far is it from the top of the window
                const height = section.offsetHeight; // the height of the Element include padding border & scroll but no margin

                if (scrollY >= (top - height / 5)) {
                        current = section.getAttribute("id");
                } 

        })


        navLi.forEach(li => {
                li.classList.remove("active-link");

                if (li.classList.contains(current)) {
                        li.classList.add("active-link");
                } 
        })


        navA.forEach( a => {
                a.classList.remove("active");

                if (a.classList.contains(current)) {
                        a.classList.add("active");
                } 
        })


})




/* count input down

const input = document.querySelector(".message"); // input

const count = document.querySelector(".count"); // span

const maxLength = input.getAttribute("maxlength");

const value = input.value.length;
count.innerHTML = maxLength;


input.oninput = ()=>{
         count.innerHTML = maxLength - value;
}

*/



// page loader

const loader = document.getElementById("preloader");

window.addEventListener("load", ()=>{
        loader.style.display = "none"
})




