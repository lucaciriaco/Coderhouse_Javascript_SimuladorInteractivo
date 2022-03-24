function calculadoraPromedios(){
    let option = true;
    let nota = 0;
    let i = 0;
    let promedio = 0;
    while(option){
        nota += parseInt(prompt("Ingrese valor de la nota:"),10);
        i++;
        option = confirm("Desea cargar otra nota?");
    }
    promedio = nota / i;
    return promedio;
    alert("El promedio total de las notas es: " + promedio);
    document.write("<br> El promedio total de las notas es: " + promedio);
    document.write("<h6>Hecho por Luca Ciriaco para <a href='https://www.coderhouse.com/'>Coderhouse</a></h6>");
}