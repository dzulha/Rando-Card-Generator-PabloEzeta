// Función para generar una carta aleatoria
function generateRandomCard() {
    const cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const cardSuits = [
        { name: 'club', symbol: '♣' },
        { name: 'diamond', symbol: '♦' },
        { name: 'heart', symbol: '♥' },
        { name: 'spade', symbol: '♠' }
    ];

// Paso 1:aleatorio carta
    const randomValueIndex = Math.floor(Math.random() * cardValues.length);
    const randomValue = cardValues[randomValueIndex];

// Paso 2: aleatorio palo
    const randomSuitIndex = Math.floor(Math.random() * cardSuits.length);
    const randomSuit = cardSuits[randomSuitIndex];

// Crear el elemento div principal para la carta
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', randomSuit.name);
    const cardWidthInput = document.getElementById('card-width');
    const cardHeightInput = document.getElementById('card-height');

// Obtener el ancho y alto, usando valores por defecto si los inputs son inválidos
    let width = parseFloat(cardWidthInput.value) || 200;
    let height = parseFloat(cardHeightInput.value) || 300;

    width = Math.max(100, width);
    height = Math.max(150, height);

// Aplicar los estilos de ancho y alto directamente al elemento de la carta
    cardDiv.style.width = `${width}px`;
    cardDiv.style.height = `${height}px`;

// Ajustar el tamaño de la fuente para que sea proporcional al tamaño de la carta

    const valueFontSize = (height * 0.2);
    const suitFontSize = (height * 0.1);

    // Crear el elemento para el símbolo superior del palo
    const topSuitDiv = document.createElement('div');
    topSuitDiv.classList.add('top-suit');
    topSuitDiv.innerHTML = randomSuit.symbol;
    topSuitDiv.style.fontSize = `${suitFontSize}px`;
    cardDiv.appendChild(topSuitDiv);

    // Crear el elemento para el valor de la carta
    const valueDiv = document.createElement('div');
    valueDiv.classList.add('card-value');
    valueDiv.innerHTML = randomValue;
    valueDiv.style.fontSize = `${valueFontSize}px`;
    cardDiv.appendChild(valueDiv);

    // Crear el elemento para el símbolo inferior del palo
    const bottomSuitDiv = document.createElement('div');
    bottomSuitDiv.classList.add('bottom-suit');
    bottomSuitDiv.innerHTML = randomSuit.symbol;
    bottomSuitDiv.style.fontSize = `${suitFontSize}px`;
    cardDiv.appendChild(bottomSuitDiv);

    // Obtener el contenedor donde queremos mostrar la carta
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    cardContainer.appendChild(cardDiv);
}

// Función para aplicar los estilos de ancho y alto a la carta actualmente mostrada
function applyCardSize() {
    const cardWidthInput = document.getElementById('card-width');
    const cardHeightInput = document.getElementById('card-height');

    // Obtener los valores de los inputs
    let newWidth = parseFloat(cardWidthInput.value);
    let newHeight = parseFloat(cardHeightInput.value);

    // Validar y asegurar que los valores sean válidos
    if (isNaN(newWidth) || newWidth <= 0) {
        newWidth = 200; 
        cardWidthInput.value = 200;
    }
    if (isNaN(newHeight) || newHeight <= 0) {
        newHeight = 300;
        cardHeightInput.value = 300;
    }

    // Asegurarse de que los valores sean mayores a los mínimos
    newWidth = Math.max(100, newWidth);
    newHeight = Math.max(150, newHeight);

    // Seleccionar la carta actual (si existe)
    const currentCard = document.querySelector('.card');
    if (currentCard) {
        currentCard.style.width = `${newWidth}px`;
        currentCard.style.height = `${newHeight}px`;

// ================  Reajustar el tamaño de la fuente también para la carta existente
        const valueFontSize = (newHeight * 0.2);
        const suitFontSize = (newHeight * 0.1);

        const valueDiv = currentCard.querySelector('.card-value');
        if (valueDiv) valueDiv.style.fontSize = `${valueFontSize}px`;

        const topSuitDiv = currentCard.querySelector('.top-suit');
        if (topSuitDiv) topSuitDiv.style.fontSize = `${suitFontSize}px`;

        const bottomSuitDiv = currentCard.querySelector('.bottom-suit');
        if (bottomSuitDiv) bottomSuitDiv.style.fontSize = `${suitFontSize}px`;
    }
}

// Función que se ejecuta cuando toda la página ha cargado
window.onload = function() {
    generateRandomCard();

    const newCardBtn = document.getElementById('new-card-btn');
    const applySizeBtn = document.getElementById('apply-size-btn');

    if (newCardBtn) {
        newCardBtn.addEventListener('click', generateRandomCard);
    }
    if (applySizeBtn) {
        applySizeBtn.addEventListener('click', applyCardSize);
    }

    setInterval(generateRandomCard, 10000);
};