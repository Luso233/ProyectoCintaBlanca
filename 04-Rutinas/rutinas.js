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
let checkbox = document.getElementById("Lunes");

checkbox.addEventListener("click", function() {
    if(checkbox.checked) {
       console.log("checado");
    } else {
        console.log("Sin checar");
    }
});
