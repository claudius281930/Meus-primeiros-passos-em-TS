function sendSpaceShip(name, captain) {
    var spaceShip = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: [],
    };
    alert("A nave ".concat(spaceShip.name, " comandada pelo capit\u00E3o ").concat(spaceShip.captain, " foi enviada em uma miss\u00E3o."));
    return spaceShip;
}
function accelerate(targetSpeed, spaceShip) {
    if (spaceShip.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceShip.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceShip.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceShip.name, " para ").concat(targetSpeed, "..."));
    }
    else {
        alert("Mantenha a velocidade da ".concat(spaceShip.name, "..."));
    }
}
var spaceShipName = prompt("Insira o nome da Nave para miss\u00E3o: ");
var spaceShipCaptain = prompt("Insira o nome do capit\u00E3o da Nave: ");
var currentShip = sendSpaceShip(spaceShipName, spaceShipCaptain);
var speed = parseInt(prompt("Insira a velocidade para a qual desejada acelerar: "));
accelerate(speed, currentShip);
