var animation = gsap.timeline();


function anim(){
    animation
    .add( "start" )
    .from(["#product"], {duration:.25, y:-450, ease:Linear.EaseNone, force3D:false }, "start+=1")
    .from(["#pShadow"], {duration:.25, transform:"scaleX(0)", ease:Linear.EaseNone, force3D:false }, "start+=1")
    .to(["#product"], { duration:.25,transform:"scaleY(0.7)",transformOrigin:"271px 420.5px", ease:Linear.EaseNone,yoyo:true,repeat:1, force3D:false }, "start+=1.25")
    .to(["#product"], { duration:.25,transform:"scaleY(1)",transformOrigin:"271px 420.5px", ease:Linear.EaseNone, force3D:false }, "start+=1.5")
    .set(["#rHand,#lHand"], {opacity:1 }, "start+=1.9")
    .to(["#rHand,#lHand"], {duration:.5,transform:"rotateZ(0)" , ease:Linear.EaseNone, force3D:false }, "start+=2")
    .set(["#monster"], {opacity:1 }, "start+=2.4")
    .from(["#monster"], {duration:0.75,transform:"translateY(138px)" , ease:Linear.EaseNone, force3D:false }, "start+=2.5")
    .from(["#copy1"], {duration:0.5, transform: "translateX(-280px)", ease:Linear.EaseNone, force3D:false }, "start+=3")
    .from(["#copy1a"], {duration:0.5, transform: "translateX(-280px)", ease:Linear.EaseNone, force3D:false }, "start+=3.5")
    .from(["#copy2"], {duration:0.5, transform: "translateX(-280px)", ease:Linear.EaseNone, force3D:false }, "start+=4")
    .from(["#copy2a"], {duration:0.5, transform: "translateX(-280px)", ease:Linear.EaseNone, force3D:false }, "start+=4.5")
    .from(["#logo"], {duration:0.5, transform: "translateX(280px)", ease:Linear.EaseNone, force3D:false }, "start+=3")
    .to(["#eye"], {duration:0.5,  transform: "rotateX(0deg)", ease:Linear.EaseNone, force3D:false }, "start+=3.5")
    .from(["#disclaimer"], {duration:0.5, transform: "translateX(450px)", ease:Linear.EaseNone, force3D:false }, "start+=4.5")
    // .to( "#mainContainer", { duration: 0.5, opacity: 1 }, "start")
    // // FRAME 1 
    // .to(["#productBg1"], { duration:.5, x:0, ease:Linear.EaseNone, force3D:false }, "start-=0.5")
    // .to(["#frameText1"], { duration: .5, opacity: 1, ease:Power1.easeIn }, "start+=0")
    // .to(["#frameText2"], { duration: .5, opacity: 1, ease:Power1.easeIn }, "start+=.5")
    // .to(["#frameText2"], { duration: .5, opacity: 0, ease:Power1.easeOut }, "start+=3")
    // .add( "frame2", "start+=3" )
    // .to(["#productBg1"], { duration: .25, opacity: 1,x: 160, ease:Power1.easeOut }, "frame2+=0.25")
    // .to(["#bottle"], { duration: .5,opacity:1, ease:Linear.EaseNone, force3D:false }, "frame2+=0.75")
    // .to(["#frameText3"], { duration: .5, opacity: 1, ease:Power1.easeOut }, "frame2+=0.75")
    // .to(["#frameText3,#bottle"], { duration: .25, opacity: 0, ease:Power1.easeOut }, "frame2+=2.75")
    // .add( "frame3", "start+=6" )
    // .to(["#productBg3"], { duration: 2.5,opacity:1,transformOrigin:"center center", ease:Power1.easeOut }, "frame3+=0")
    // .to(["#productBg1"], { duration: .5,opacity:0, ease:Power1.easeOut }, "frame3+=0.10")
    // .to(["#phone"], { duration: .5,opacity:1, ease:Linear.EaseNone, force3D:false }, "frame3+=1")
    // .to(["#arrow"], { duration: .5,opacity:1, ease:Linear.EaseNone, force3D:false }, "frame3+=1.25")
    // .to(["#frameText4"], { duration: .5, opacity: 1, ease:Power1.easeOut }, "frame3+=1.25")
}
window.onload = anim();

document.querySelector("#container").addEventListener("click", () => {
    window.open(clickTag)
});
