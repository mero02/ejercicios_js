//Punto 1
console.log("Hola Mundo!");

//Punto 2
function crearH1ConNombre() {
    const elemento = document.querySelector('.para-h1');
    const newH1 = document.createElement('h1');
    newH1.textContent = 'Mauro'; 
    elemento.appendChild(newH1);
}
crearH1ConNombre();

//Punto 3
function calcularOperacion(){
    const operacion = document.getElementById('operacion').value;
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    let resultado = 0;

    switch (operacion){
        case 'suma':
            resultado = operando1 + operando2;
            break;
        case 'resta':
            resultado = operando1 - operando2;
            break;
        case 'multiplicacion':
            resultado = operando1 * operando2;
            break;
        case 'division':
            if (operando2 !== 0) {
                resultado = operando1 / operando2;
            } else {
                alert("No se puede dividir por cero");
                return;
            }
            break;
        default:
            alert("Operación no válida");
            return;
    }
    document.getElementById('resultado').value = resultado;
}

document.querySelector('button').addEventListener('click', calcularOperacion);

//Punto 4
function mostrarElementosLista() {
    const items = document.querySelectorAll('.list-group-item');
    items.forEach(item => {
        console.log(item.textContent);
    });
}

mostrarElementosLista();

//Punto 5