let checkbox1 = document.getElementById("Lunes");
let checkbox2 = document.getElementById("Martes");
let checkbox3 = document.getElementById("Miércoles");
let checkbox4 = document.getElementById("Jueves");
let checkbox5 = document.getElementById("Viernes");


checkbox1.addEventListener("click", function()
 {
    if(checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox4.checked && checkbox5.checked) {
       botonFinal.style.display = "block";
    } else {
        botonFinal.style.display = "none";
    }
});
checkbox2.addEventListener("click", function()
	{
    if(checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox4.checked && checkbox5.checked) {
       botonFinal.style.display = "block";
    } else {
        botonFinal.style.display = "none";
    }
});
checkbox3.addEventListener("click", function()
	{
    if(checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox4.checked && checkbox5.checked) {
       botonFinal.style.display = "block";
    } else {
        botonFinal.style.display = "none";
    }
});
checkbox4.addEventListener("click", function()
	{
    if(checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox4.checked && checkbox5.checked) {
       botonFinal.style.display = "block";
    } else {
        botonFinal.style.display = "none";
    }
});
checkbox5.addEventListener("click", function()
{
	if(checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox4.checked && checkbox5.checked) {
       botonFinal.style.display = "block";
    } else {
        botonFinal.style.display = "none";
    }
});

// let botonFinal=document.getElementById("botonFinal")
// botonFinal.addEventListener("click", function()
// {

// }
   // function visitPage(){
   //      window.location='05-MisionCompleta.html';
   //  }


// $('botonFinal').click(function() {
//   window.location='05-MisionCompleta';
// });