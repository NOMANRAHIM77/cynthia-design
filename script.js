const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function cursormovement() {
    window.addEventListener("mousemove",function (dets) {
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    })
}
function navanim() {
    var tl=gsap.timeline()
    tl.from("#navbar",{
        duration: 1.5,
        y:'-10',
        opacity:0,
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        duration: 2,
        y:'0',
        
        ease:Expo.easeInOut
    })
}
cursormovement()
navanim()