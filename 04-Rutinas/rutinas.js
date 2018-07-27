// let button=document.getElementById("botonFinal")
// let objetivo1=document.getElementById("Lunes")
// let objetivo2=document.getElementById("Martes")
// let objetivo3=document.getElementById("Miércoles")
// let objetivo4=document.getElementById("Jueves")
// let objetivo=document.getElementById("Viernes")
// let arreglo=[]
// let x=0

//  if (objetivo1.checked === true){
//     console.log("block");
//   }

//   // Get the checkbox
// checkbox.addEventListener( 'change', function()

//   // If the checkbox is checked, display the output text
//   if (checkBox.checked===true){
//     console.log("checado");
//   } else {
//     console.log("Sin checar");
//   }
let checkbox1 = document.getElementById("Lunes");
let checkbox2 = document.getElementById("Martes");
let checkbox3 = document.getElementById("Miércoles");
let checkbox4 = document.getElementById("Jueves");
let checkbox5 = document.getElementById("Viernes");


checkbox1.addEventListener("click", function()
 {
    if(checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox4.checked && checkbox5.checked) {
       console.log("checado");
    } else {
        console.log("Sin checar");
    }
});
checkbox2.addEventListener("click", function()
	{
    if(checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox4.checked && checkbox5.checked) {
       console.log("checado");
    } else {
        console.log("Sin checar");
    }
});
checkbox3.addEventListener("click", function()
	{
    if(checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox4.checked && checkbox5.checked) {
       console.log("checado");
    } else {
        console.log("Sin checar");
    }
});
checkbox4.addEventListener("click", function()
	{
    if(checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox4.checked && checkbox5.checked) {
       console.log("checado");
    } else {
        console.log("Sin checar");
    }
});
checkbox5.addEventListener("click", function()
{
	if(checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox4.checked && checkbox5.checked) {
       console.log("checado");
    } else {
        console.log("Sin checar");
    }
});
