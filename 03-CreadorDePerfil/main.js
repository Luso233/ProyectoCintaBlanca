
let Dado = document.getElementById("dado");
let Masa = document.getElementById ("masa");
let Altura = document.getElementById ("altura");
let total = 0;
Dado.addEventListener ("click",() =>{
	console.log ("Si hizo click")
	total=Number(Masa.value)/Number((Altura.value)*(Altura.value))
// if (total >=18 && total<=25) {
// 	window.location.replace("");
// }else if (total >=26 && total<=30){
// 	window.location.replace("");
// }else if (total >=31){
// 	window.location.replace("");
// }else if (total <18){
// 	window.location.replace("");
// }
})

function miCanvas1() {
    let c = document.getElementById("miCanvas");
    let ctx = c.getContext("2d");
    let guerrero = document.getElementById("macho");
    ctx.clearRect(0, 0, 250, 300);
    ctx.drawImage(macho,10,10);
}
function miCanvas2() {
    let c = document.getElementById("miCanvas");
    let ctx = c.getContext("2d");
    let guerrera = document.getElementById("hembra");
    ctx.clearRect(0, 0, 250, 300);
    ctx.drawImage(hembra,10,10);
}


  
