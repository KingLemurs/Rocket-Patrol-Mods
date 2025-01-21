class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this)
        this.points = pointValue
        this.direction = Phaser.Math.RND.sign()
        this.moveSpeed = game.settings.spaceshipSpeed

        // flip sprite
        this.flipX = this.direction
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed * this.direction

        // wrap from left to right edge
        if (this.direction === 1 && this.x <= 0 - this.width) {
            this.x = game.config.width
        }
        if (this.direction === -1 && this.x >= game.config.width + this.width) {
            this.x = 0
        }
    }

    reset() {
        this.x = game.config.width
    }
}

class FastSpaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this)
        this.points = pointValue
        this.direction = Phaser.Math.RND.sign()
        this.moveSpeed = game.settings.spaceshipSpeed + 1
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed * this.direction

        // wrap from left to right edge
        if (this.direction === 1 && this.x <= 0 - this.width) {
            this.x = game.config.width
        }
        if (this.direction === -1 && this.x >= game.config.width + this.width) {
            this.x = 0
        }
    }

    reset() {
        this.x = game.config.width
    }
}