// 1. Guardamos los elementos en variables
const contador = document.getElementById('contador-zombis');
const boton = document.getElementById('btn-eliminar');

// 2. Creamos una variable para llevar la cuenta actual
let zombisEliminados = 317;

// 3. Escuchamos el evento de hacer clic en el botón
boton.addEventListener('click', () => {
    // Incrementamos el número
    zombisEliminados++;
    
    // Actualizamos el texto en el HTML
    contador.textContent = zombisEliminados;
    
    // Detalle extra: cambia el color a rojo brillante por un instante
    contador.style.color = '#ff3333';
    setTimeout(() => {
        contador.style.color = '#e0e0e0';
    }, 200);
});