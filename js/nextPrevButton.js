// Llamamos al document

document.addEventListener("DOMContentLoaded", ()=>{

// Obtenemos los botones
let botonPrev = document.getElementById("prevButton");
let botonNext = document.getElementById("nextButton");

// Obtenemos todas las tarjetas de evento
const cards = Array.from(document.querySelectorAll('.nextEvents'));
let currentIndex = 0;

// Oculta todas las tarjetas excepto la actual
function showCard(index) {
    cards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });

}

// Mostrar la primera tarjeta al cargar
showCard(currentIndex);

// Evento para botón "Anterior"
botonPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
});

// Evento para botón "Siguiente"
botonNext.addEventListener('click', () => {
 
        currentIndex = (currentIndex + 1) % cards.length;
        console.log("Indice: "+currentIndex);
    
    
    showCard(currentIndex);
});

});