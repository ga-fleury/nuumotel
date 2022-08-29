import LocomotiveScroll from "locomotive-scroll";

const pageContainer = document.querySelector("[data-scroll-container]");

const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true,
    mobile: {
        breakpoint: 0,
        smooth: false
    },
    tablet: {
        breakpoint: 0,
        smooth: true
    }
});


scroller.on("scroll", (instance) => {
    let height = window.innerHeight;
    let scrollPy = instance.scroll.y + "px";
    let footer = document.querySelector(".footer");
    footer.style.transform = "translateY(" + scrollPy + ")";
    // let customCursor = document.querySelector(".cursor");
    // customCursor.style.top = scrollPy;
    // let chat = document.querySelector(".chat");
    // chat.style.top = instance.scroll.y + (height*.85) + "px";
    // chat.style.opacity = 0 + (instance.scroll.y * 0.005);
});
