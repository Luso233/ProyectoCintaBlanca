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
