
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

let MiCanvas() {
    let c = document.getElementById("miCanvas");
    let ctx = c.getContext("2d");
    let guerrero = document.getElementById("macho");
    let guerrera = document.getElementById("hembra");
    let Genero = document.getElementById("sexo");
    if (sexo = "hombre") {}
   ctx.drawImage(guerrero,10,10);
else
	ctx.drawImage(guerrera,10,10);
}
