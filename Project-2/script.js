function navAnni() {
  let nav = document.querySelector("nav");
  nav.addEventListener("mouseenter", () => {
    var tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "100%",
      bottom: "-90%",
      duration: 0.5,
    });
    tl.to(".nav-bottom span", {
      opacity: 1,
      duration: 0.3,
    });
    tl.from(".nav-bottom span", {
      y: 25,
      stagger: {
        amount: 0.8,
      },
    });
  });
  nav.addEventListener("mouseleave", () => {
    var tl = gsap.timeline();
    tl.to(".nav-bottom span", {
      opacity: 0,
      y: 0,
      stagger: {
        amount: 0.2,
      },
      duration: 0.3,
    });
    tl.to("#nav-bottom", {
      height: "50vh",
      bottom: "0%",
      duration: 0.5,
    });
  });
}

function page2Anni() {
  let rightEle = document.querySelectorAll(".page2-reghtele");
  rightEle.forEach((ele) => {
    ele.addEventListener("mouseenter", () => {
      gsap.to(ele.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    ele.addEventListener("mouseleave", () => {
      gsap.to(ele.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    ele.addEventListener("mousemove", (dets) => {
      //dets will give all the details when the mouse move
      gsap.to(ele.childNodes[3], {
        x: dets.x - ele.getBoundingClientRect().x - 60,
        y: dets.y - ele.getBoundingClientRect().y - 190,
      });
    });
  });
}

function Page3videoAnni(){
    let center=document.querySelector("#page3-center");
let video=document.querySelector("#page3 video");
center.addEventListener("click",()=>{
    video.play();
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1
    })
})
video.addEventListener("click",()=>{
    video.pause();
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0
    })
})
}

function Page4Anni(){
    let right=document.querySelectorAll(".sec1-right"); 
right.forEach((sec)=>{
    sec.addEventListener("mouseenter",()=>{
        // console.log(sec.childNodes[3])
        sec.childNodes[3].style.opacity=1;
        sec.childNodes[3].play();
    })
    sec.addEventListener("mouseleave",()=>{
        // console.log(sec.childNodes[3])
        sec.childNodes[3].style.opacity=0;
        sec.childNodes[3].pause();    //can use load() to start video from start everytime
    })

})
}


Page4Anni()
Page3videoAnni()
navAnni();
page2Anni();