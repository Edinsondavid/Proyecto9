function Calculadora(){
    const sexo = document.getElementById("sexo1").value;
    const edad = parseInt(document.getElementById("edad1").value);
    const peso = parseFloat(document.getElementById("peso1").value);
    const altura = parseFloat(document.getElementById("altura1").value);
    let alturaCm = altura / 100;
    let calcular = peso / (alturaCm * alturaCm);
    let peso_ideal;

    if (sexo === "Masculino") {
        peso_ideal = (alturaCm * 100 - 150) / 4;
    } else if (sexo === "Femenino") {
        peso_ideal = (alturaCm * 100 - 150) / 2;
    }

    let peso_a_perder = peso - peso_ideal;
    let resultado = "Edad: " + edad + " años <br>" + "Peso actual: " + peso + " kg <br>" + "Altura: " + altura + " cm <br>" + "IMC: " + calcular + " tiene ";
   
    if (calcular < 18.5) {
        resultado += "<span class='bg-primary text-light'>Bajo peso</span>";
    } else if (calcular >= 18.5 & calcular <= 24.9) {
        resultado += "<span class='bg-success text-light'>Normal</span>";
    } else if (calcular >= 25 & calcular < 29.9) {
        resultado += "<span class='bg-warning text-light'>Sobrepeso</span>"
    } else if (calcular >= 30 & calcular <= 34.9) {
        resultado += "<span class='bg-danger text-light'>Obesidad Fase 1</span>"
    } else if (calcular >= 35 & calcular <= 39.9) {
       resultado += "<span class='bg-danger text-light'>Obesidad Fase 2</span>"
    } else if (calcular >= 40 & calcular <= 49.9) {
      resultado += "<span class='bg-danger text-light'>Obesidad Fase 3</span>"
    } else if (calcular >= 50) {
      resultado += "<span class='bg-danger text-light'>Obesidad Fase 4</span>"
    }
    resultado += "<br>Peso ideal: <span class='bg-primary text-light'>" + peso_ideal + " kg </span><br>" + "Deberías perder: <span class='bg-dark text-light'>" + peso_a_perder + " kg </span>";
    document.getElementById("resultado8").innerHTML = resultado;
}
