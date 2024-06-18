// App Js 1
function Edad() {
    // Obtener el valor de la edad ingresada por el usuario
    var edad = parseInt(document.getElementById("edad").value);

    // Determinar la categoria de edad de la persona
    if (!isNaN(edad)) {
        if (edad <= 12) {
            document.getElementById("resultadoCategoriaEdad").innerHTML = '<div class="alert alert-success" role="alert"> <strong> Eres un niño </strong> <i class="bi bi-person-fill-down"></i></div>';
        } else if (edad > 12 & edad <= 40) {
            document.getElementById("resultadoCategoriaEdad").innerHTML = '<div class="alert alert-info" role="alert"> <strong> Eres un joven </strong><i class="bi bi-person-badge-fill"></i></div>';
        } else if (edad > 40 & edad <= 60) {
            document.getElementById("resultadoCategoriaEdad").innerHTML = '<div class="alert alert-warning" role="alert"><strong> Eres un adulto </strong> <i class="bi bi-person-fill-up"></i></div>';
        } else {
            document.getElementById("resultadoCategoriaEdad").innerHTML = '<div class="alert alert-danger" role="alert"> <strong> Eres un adulto </strong> mayor <i class="bi bi-person-up"></i></div>';
        }
    } else {
        document.getElementById("resultadoCategoriaEdad").innerHTML = '<div class="alert alert-danger" role="alert"> Por favor, ingrese un numero entero valido para la edad. </div>';
    }
}
// App Js 2
function PesoEstaturaEstimados() {
    const sexo = document.getElementById('sexo').value;
    const edad = parseInt(document.getElementById('edadPesoEstatura').value);
    let pesoEstimado, estaturaEstimada;

    if (isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        return;
    }

    if (sexo === 'H') {
        pesoEstimado = 50 + 0.9 * (edad - 5);
        estaturaEstimada = 100 + 5 * (edad - 5);
    } else {
        pesoEstimado = 45 + 0.8 * (edad - 5);
        estaturaEstimada = 95 + 4.5 * (edad - 5);
    }

    document.getElementById('PesoEstaturaEstimados').innerHTML = `
        <p>Peso estimado: ${pesoEstimado.toFixed(2)} kg</p>
        <p>Estatura estimada: ${estaturaEstimada.toFixed(2)} cm</p>
    `;
}function PesoEstaturaEstimados() {
    const sexo = document.getElementById('sexo').value;
    const edad = parseInt(document.getElementById('edadPesoEstatura').value);
    let pesoEstimado, estaturaEstimada;

    if (isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        return;
    }

    if (sexo === 'H') {
        pesoEstimado = 50 + 0.9 * (edad - 5);
        estaturaEstimada = 100 + 5 * (edad - 5);
    } else {
        pesoEstimado = 45 + 0.8 * (edad - 5);
        estaturaEstimada = 95 + 4.5 * (edad - 5);
    }

    document.getElementById('PesoEstaturaEstimados').innerHTML = `
        <p>Peso estimado: ${pesoEstimado.toFixed(2)} kg</p>
        <p>Estatura estimada: ${estaturaEstimada.toFixed(2)} cm</p>
    `;
}

// App Js 3
function IMC() {
    // Obtener los valores del formulario
    var peso = parseFloat(document.getElementById("peso").value);
    var estatura = parseFloat(document.getElementById("estatura").value);

    // Verificar que los valores sean numericos y mayores que cero
    if (!isNaN(peso) & !isNaN(estatura) && peso > 0 && estatura > 0) {
        // Calcular el indice de masa corporal (IMC)
        var imc = peso / (estatura * estatura);

        // Determinar la categoria de peso segun el IMC
        if (imc < 18.5) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-warning" role="alert"><strong>Usted tiene bajo peso <i class="bi bi-arrow-bar-down"></i> </strong> </div> ';
        } else if (imc >= 18.5 & imc <= 24.9) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-success" role="alert"> <strong>Usted tiene un peso normal <i class="bi bi-balloon-heart"></i></strong></div>';
        } else if (imc >= 25 & imc <= 29.9) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-warning" role="alert"> <strong>Usted tiene sobrepeso <i class="bi bi-emoji-frown-fill"></i></strong></div>';
        } else if (imc >= 30 & imc <= 34.9) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-danger" role="alert"> <strong>Usted tiene obesidad tipo <i class="bi bi-emoji-grimace-fill"></i></strong></div>';
        } else if (imc >= 35 & imc <= 39.9) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-danger" role="alert"><strong>Usted tiene obesidad tipo II <i class="bi bi-emoji-tear-fill"></i></strong></div>';
        } else if (imc >= 40 & imc <= 49.9) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-danger" role="alert"> Usted tiene obesidad tipo III </div>';
        } else {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-danger" role="alert"> Usted tiene obesidad tipo IV </div>';
        }
    } else {
        // Mostrar mensaje de error si los valores no son validos
        document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-danger" role="alert"> Por favor, ingrese valores numericos validos para el peso y la estatura. </div>';
    }
}
// App Js 4
function calcular_presion_arterial() {
    const pre_a = parseInt(document.getElementById('pre_a').value);
    let resultado;

    if (isNaN(pre_a) || pre_a === 0) {
        alert("Por favor, ingrese un valor válido de presión arterial.");
        return;
    }

    if (pre_a < 90) {
        resultado = "Presión arterial baja";
        document.getElementById("resultadopresion").innerHTML= `<div class="alert alert-danger" role="alert"> Usted tiene la presion ${resultado} <i class="bi bi-arrow-bar-down"></i></div>`;
    } else if (pre_a <= 120) {
        resultado = "Presión arterial normal";
        document.getElementById("resultadopresion").innerHTML= `<div class="alert alert-danger" role="alert"> Usted tiene la presion ${resultado} <i class="bi bi-arrow-bar-down"></i></div>`;
    } else if (pre_a <= 140) {
        resultado = "Prehipertensión";
        document.getElementById("resultadopresion").innerHTML= `<div class="alert alert-danger" role="alert"> Usted tiene la presion ${resultado} <i class="bi bi-emoji-frown-fill"></i></div>`;
    } else {
        resultado = "Hipertensión";
        document.getElementById("resultadopresion").innerHTML= `<div class="alert alert-danger" role="alert"> Usted tiene la presion ${resultado} <i class="bi bi-emoji-grimace-fill"></i></div>`;
    }
    


}
