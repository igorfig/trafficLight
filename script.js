const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let intervalId;
let colorIndex = 0;


function trafficLight(event) {
    stopInterval()

    if ( event.target.id == 'turnOff' ) {
        colorIndex = 0;
    }
    
    trafficLightColors[event.target.id]();
}   

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

function changeColor() {
    colors = ['red', 'yellow', 'green'];
    color = colors[colorIndex];
    trafficLightColors[color]();
    nextIndex()
}

const stopInterval = () => clearInterval(intervalId);

const trafficLightColors = {
    'red': () => img.src = './img/red.png',
    'yellow': () => img.src = './img/yellow.png',
    'green': () => img.src = './img/green.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000),
    'turnOff': () => img.src= './img/off.png',
    
}



buttons.addEventListener('click', trafficLight);