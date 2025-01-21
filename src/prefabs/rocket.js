// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        // add object to existing scene
        scene.add.existing(this)
        this.isFiring = false
        this.moveSpeed = 2
        this.pointer = pointer
        this.sfxShot = scene.sound.add('sfx-shot')
    }

    update() {

        // left right movement
        let mouseLeft = this.x >= pointer.x
        let mouseRight = this.x <= pointer.x

        if ((keyLEFT.isDown || mouseLeft) && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed

        } else if ((keyRIGHT.isDown || mouseRight) && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed
        }

        // fire button
        if (Phaser.Input.Keyboard.JustDown(keyFIRE) || pointer.isDown && !this.isFiring) {
            this.isFiring = true
            this.sfxShot.play()
        }

        // if fired, move up
        if (this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed
        }

        // reset on miss
        if (this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false
            this.y = game.config.height - borderUISize - borderPadding
        }
    }

    // reset rocket to ground
    reset() {
        this.isFiring = false
        this.y = game.config.height - borderUISize - borderPadding
    }
}