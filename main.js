// declare all the shapes here by Id
let box1 = document.getElementById("box1");

window.addEventListener("scroll", function(event) {
  let top = this.scrollY;

  if(top > 450) {
    box1.classList.add("scale-animation");
  } else {
    box1.classList.remove("scale-animation");
  }
}, false);
