// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


function Page3Animation(){
    let container=document.querySelector("#ele-container");
    let image=document.querySelector("#fixed-image");

    container.addEventListener("mouseenter",()=>{
        image.style.display="block";
    })
    container.addEventListener("mouseleave",()=>{
        image.style.display="none";
    })

    document.querySelectorAll(".ele").forEach(ele=>{
        ele.addEventListener("mouseover",()=>{
            let data=ele.getAttribute("data-image")
            image.style.backgroundImage=`url(${data})`
        })
    })
}
Page3Animation()

function Page4Animation(){
    let p=document.querySelector("#page4-p")
    let img=document.querySelector("#page4-img")
    let h= document.querySelectorAll(".h")
    let a=document.querySelectorAll(".anc")

    h.forEach(ele=>{
        ele.addEventListener("click",()=>{
            h.forEach(h=>{h.classList.remove("clicked")});
            ele.classList.add("clicked");
            let pa=ele.getAttribute("para");
            p.innerHTML=pa;
            let i=ele.getAttribute("image")
            img.setAttribute("src",i)
        })
    })
}
Page4Animation()


function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        direction: "horizontal",
        mousewheel: {
            forceToAxis: true,
        },
      });    
}
swiperAnimation()

let loader= document.querySelector("#loader")
setTimeout(()=>{
    loader.style.top="-100%"
},4000)

//swiperjs -> for scrollable interface
//locomotive scroll -> for smooth scroll
//applied gsapbut not used it
