// Globalne spremenljivke
var canvas, context;
var boomerang;
var bX = 100, bY = 100, bRotation = 0;

function main() {
    // Zacetek programa
    // Najdemo canvas in si ga shranimo v globalno spremenljivko
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    boomerang = document.createElement("img");
    boomerang.src = "data/boomerang.png";

    tick();
}

  
function tick() {
    // Funkcija tick se poklice veckrat na sekundo
    update(); // najprej izracunajmo novo stanje igre
    draw(); // potem pa stanje izrisimo na canvas
    requestAnimationFrame(tick);
}

function update() {
    // Logiko sprogramirajte tukaj
    
    bRotation += 0.25;

    if (keyboard["a"]) {
        bX -= 5;
    } else if (keyboard["d"]) {
        bX += 5;
    }
}

function draw() {
    // Risanje sprogramirajte tukaj

    // Narisemo ozadje
    context.fillStyle = "#CCEEFF";
    context.fillRect(0,0,canvas.width,canvas.height);

    // Narisemo krog
    context.beginPath();
    context.fillStyle = "orange";
    context.ellipse(200, 200, 100, 100, 0, 0, 2*Math.PI);
    context.fill();

    // Boomerang
    drawImageRotated(context, boomerang, bX, bY, boomerang.width, boomerang.height, bRotation);
}
