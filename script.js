var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rnd = document.getElementById("random")

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}



//kiirja az uj szinek kodjait	
css.textContent = color1.value + "    " + color2.value;

//a hatter ugyanaz lesz, mint a kezdo szinek
body.style.background = "linear-gradient(to right, "+color1.value+","+color2.value+")";


function random(){

	color1.value = "#"+ Math.floor(Math.random() * 999999);
	color2.value = "#"+ Math.floor(Math.random() * 999999);
	setGradient()
}


rnd.addEventListener("click", random);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);






