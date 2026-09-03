console.log("Hello world");




function switchOff(){
  console.log("Guru Charan");
  let heading = document.getElementById("heading");
console.log(heading);
console.log(heading.textContent);
heading.textContent = "Switch Off";
heading.style.color = "red";

let bulb = document.getElementById("bulbImage");
console.log(bulb);
console.log(bulb.src);
bulb.src = "bulb-go-off-img (1).png";

let cat = document.getElementById("tomImage");
console.log(cat);
console.log(cat.src);
cat.src = "cat-eyes-img (2).png";
}

function switchOn(){
   let heading = document.getElementById("heading");
console.log(heading);
console.log(heading.textContent);
heading.textContent = "Switch On";
heading.style.color = "green";

let bulb = document.getElementById("bulbImage");
console.log(bulb);
console.log(bulb.src);
bulb.src = "bulb-go-on-img (2).png";

let cat = document.getElementById("tomImage");
console.log(cat);
console.log(cat.src);
cat.src = "cat-img (2).png";
}













































/*function switchOff() {
    document.getElementById("bulbImage").src =
      "/bulb-go-off-img.png";
    document.getElementById("catImage").src =
      "/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("onSwitch").style.backgroundColor = "#22c55e";
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
  }
  
  function switchOn() {
    document.getElementById("bulbImage").src =
      "/bulb-go-on-img.png";
    document.getElementById("catImage").src =
      "/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switched On";
    document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
  }

  */