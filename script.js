// =================================
// PULSOMUNDO 1.0
// SCROLL REVEAL
// =================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

sections.forEach((section)=>{

observer.observe(section);




});
/* ================================
SCROLL REVEAL
================================ */

section{

opacity:0;
transform:translateY(60px);
transition:all 1s ease;

}

section.show{

opacity:1;
transform:translateY(0);

}
