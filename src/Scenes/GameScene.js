import 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    preload () {
        this.load.image('logo', 'assets/cover.png');
    }

    create () {
        this.add.image(400, 300, 'logo')
    }
}