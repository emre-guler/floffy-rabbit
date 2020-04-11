let rabbit;
let gravitY = 50;
let text;
let finish = false;
let counter = 0;
let counterInterval = setInterval(() => counter++ ,1000)
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: gravitY }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}
var game = new Phaser.Game(config);
function preload() {
    this.load.setBaseURL('./assets');
    this.load.image('background','/background.png');
    this.load.image('rabbit', '/rabbit.png');
}
function create(){
    this.add.image(400, 300, 'background');
    text = this.add.text(390, 100, counter, {font: '65px sans-serif'});
    rabbit = this.physics.add.image(400, 300, 'rabbit');
    rabbit.setCollideWorldBounds(true);
}
function update(){
    if(game.input.activePointer.isDown && !finish)
    {   
        rabbit.body.y -= 25;
        console.log(rabbit.body.y);
    }
    if(rabbit.body.y == 568 || rabbit.body.y == -25) {
        finish = true;
        clearInterval(counterInterval);
        text.setText("Oyun bitti hava durma rekorun: " + counter);
        text.setStyle({font: '25px sans-serif'});
        text.x = 200
    }
    if(!finish)
    {
        text.setText(counter);
    }
}