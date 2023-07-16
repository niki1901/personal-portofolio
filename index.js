const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 5) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});

const heading = document.getElementById("heading-txt");
console.log(heading);
const texts = ["NIKITA THAKKAR", "A WEB DEVELOPER"]
let endvalue = 1
let isForwards = true;
let textCount = 0;

let id = setInterval(()=>{
  let text = texts[textCount]
  heading.textContent = text.substring(0,endvalue);
  if(isForwards) endvalue++;
  else endvalue--;

  if(endvalue >  text.length + 10)
    isForwards = false;
  if(endvalue <0){
    isForwards = true;
    textCount++;
  }
  if(textCount==texts.length)
    textCount = 0;
},100)
