//creamos un juego vacio
let game = new Phaser.Game(640, 360, Phaser.AUTO);




//creamos un estado de juego(objeto)
// let GameState = {
//     /*las 3 funciones basicas del juego*/
//     preload: function () {

//     },
//     create: function () {

//     },
//     update: function () {

//     }
// }
//creamos un nuevo estado(objeto) y sobrescribimos sus funciones
let GameState = new Phaser.State();
let backgroundSprite;
let chickenSprite;
let zoom=1;
//mundo de 7*4
let worldX = 7;
let worldY = 4;
let worldUnitX = 640/worldX;
let worldUnitY = 360/worldY;
//
//debug
var circle = new Phaser.Circle( worldUnitX*worldX/2, worldUnitY*worldY/2, 10 ) ;
GameState.preload = function () {

    //escalamos
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally=true;
    this.scale.pageAlignVertically=true;

    //camera
   
    

    //tamaño total del mundo
    game.world.setBounds(0, 0, 640, 360);
    this.load.image('background', 'assets/images/background.png');
    this.load.image('chicken', 'assets/images/ric.png');
    //camara
    this.camera.bounds.setTo(game.world.bounds);
    

}
GameState.create = function () {
   
    this.game.camera.setSize(zoom,zoom);
    //backgroundSprite = this.game.add.sprite(0, 0, 'background');
    chickenSprite = this.game.add.sprite(3.5*worldUnitX, 2*worldUnitY, 'chicken');
    chickenSprite.anchor.set(0.5, 0.5);
    chickenSprite.scale.setTo(0.5)



}

GameState.update = function () {

  
  
  
    
}
GameState.render = function () {
   

    for(let i=0;i<worldX;i++){
        let lineV = new Phaser.Line(worldUnitX*i,0,worldUnitX*i,worldUnitY*4);
        game.debug.geom(lineV);
    }
    for(let i=0;i<worldX;i++){
        let lineH = new Phaser.Line(0,worldUnitY*i,worldUnitX*7,worldUnitY*i);
        game.debug.geom(lineH);
    }
    game.debug.geom( circle, 'rgba(125,0,0,0.3)' ) ;
}



//añadimos el estado al juego y lo ejecutamos
game.state.add('GameState', GameState);
game.state.start('GameState');