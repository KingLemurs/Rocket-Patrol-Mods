// Name: Josh Gioffre
// Rocket Patrol: iPod Touch Edition
// 2 hours total

// Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
// Implement mouse control for player movement and left mouse click to fire (5)
// Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (5)
// Display the time remaining (in seconds) on the screen (3)
// Allow the player to control the Rocket after it's fired (1)
// Randomize each spaceship's movement direction at the start of each play (1)

// Date: 1/21/25

"use strict"

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [MainMenu, Play],
}

let game = new Phaser.Game(config)

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT

let pointer