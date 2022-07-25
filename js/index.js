import Cursor from "./cursor";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const body = document.querySelector("body");

window.onload = () => {
    body.classList.remove("loading");
    gsap.from(body, {
        opacity: 0,
        duration: 1,
        ease: "Power3.easeInOut",
    });
    const cursor = new Cursor(document.querySelector(".cursor"));
};

const suiteCard = document.getElementsByClassName("card__unit");
const suiteImage = document.getElementsByClassName("card__image");
const suiteText = document.getElementsByClassName("card__front");


for(let i = 0; i < suiteCard.length; i++) {
	suiteCard[i].addEventListener("mouseenter", function( event ) {
		// highlight the mouseenter target
		console.log(`hovering card[${i}]`);
		suiteImage[i].style.maxHeight = "80%";
		suiteImage[i].style.width = "100%";
		suiteText[i].style.opacity = "0";
		suiteText[i].style.visibility = "hidden";
	  
	  }, false);
	
	suiteCard[i].addEventListener("mouseleave", function( event ) {
		// highlight the mouseenter target
		console.log(`exit card[${i}]`);
		suiteImage[i].style.maxHeight = "100%";
		suiteText[i].style.opacity = "1";
		suiteText[i].style.visibility = "visible";
	  
	  }, false);
	
	}

function handleMouseOver() {

}
// const sectionColors = ["#30cce5"]
// const navColors =     ["#30cce5","#FCFFF6", "#90EE90", "#EE82EE", "#FF6347"]

// gsap.set(".hero", {backgroundColor:gsap.utils.wrap(sectionColors)})

// const sections = gsap.utils.toArray(".hero")

// sections.forEach(function(section, index){
// 	console.log(section, navColors[index])
// 	ScrollTrigger.create({
// 		trigger:section,
// 		start:"top 500px",
// 		end:"bottom 10px",
// 		animation:gsap.to(".hero", {backgroundColor:navColors[index], immediateRender:false}),
// 		toggleActions:"restart none none reverse"
// 	})
// })
