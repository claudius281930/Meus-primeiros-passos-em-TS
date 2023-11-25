function sendSpaceShip(name: string, captain: string) {
    const spaceShip = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: [],
    }
    alert(`A nave ${spaceShip.name} comandada pelo capitão ${spaceShip.captain} foi enviada em uma missão.`)
    return spaceShip;
}

function accelerate(targetSpeed: number, spaceShip: { name: string, speed: number }) {
    if (spaceShip.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceShip.name} para ${targetSpeed}...`)
    } else if (spaceShip.speed < targetSpeed) {
        alert(`Aumentando a velocidade da ${spaceShip.name} para ${targetSpeed}...`)
    } else {
        alert(`Mantenha a velocidade da ${spaceShip.name}...`)
    }
}
const spaceShipName = prompt(`Insira o nome da Nave para missão: `)
const spaceShipCaptain = prompt(`Insira o nome do capitão da Nave: `)

const currentShip = sendSpaceShip(spaceShipName, spaceShipCaptain)
const speed = parseInt(prompt(`Insira a velocidade para a qual desejada acelerar: `))
accelerate(speed, currentShip)