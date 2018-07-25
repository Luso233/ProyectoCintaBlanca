
// let Canvas = () => {
//     var c = document.getElementById("myCanvas");
//     var ctx = c.getContext("2d");
//     var img = document.getElementById("scream");
//     ctx.drawImage(img,10,10);
// }
let resultado = document.getElementById("resultado");
let Dado = document.getElementById("dado");
let Masa = document.getElementById ("masa");
let Altura = document.getElementById ("altura");
let total = 0;
Dado.addEventListener ("click",() =>{
	console.log ("Si hizo click")
	total=Number(Masa.value)/Number((Altura.value)*(Altura.value))
	resultado.innerHTML = total;
})
