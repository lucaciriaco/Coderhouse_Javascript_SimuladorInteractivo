
function calculadoraPromedios(){
    let option = true;
    let nota = new Number(0);
    let i = 0;
    let promedio = 0;
    while(option==true){
        nota = nota += parseInt(prompt("Ingrese valor de la nota:"),10);
        i++;
        option = confirm("Desea cargar otra nota?");
    }
    promedio = nota / i;
    alert("El promedio total de las notas es: " + promedio);
    document.write("<br> El promedio total de las notas es: " + promedio);
}