/*global define, PIXI, document*/
define('game',
    ['underscore', 'ring', 'pixi'],
    function () {
        'use strict';
       
        var
            renderer = PIXI.autoDetectRenderer(890, 598),
            stage = new PIXI.Stage(0x000000, true),
            texture = PIXI.Texture.fromImage("media/img/cards/0000.png"),
            card = new PIXI.Sprite(texture),
            init = function () {

                document.body.appendChild(renderer.view);
                
                card.setInteractive(true);
                // center the sprites anchor point
                card.anchor.x = 0;
                card.anchor.y = 0;
                
                // move the sprite t the center of the screen
                card.position.x = 0;
                card.position.y = 0;
                
                stage.addChild(card);
                
                requestAnimFrame(update);
            },
            draw = function () {
                // render the stage
                renderer.render(stage);
            },
            
            update = function () {
                card.click = function(mouseData){
                    var randomCard_01 = Math.floor(Math.random()*10),
                        randomCard_10 = Math.floor(Math.random()*7);
                    card.setTexture(PIXI.TextureCache["media/img/cards/00"+randomCard_10+randomCard_01+".png"]);
                console.log("CLICK!");
                };
                requestAnimFrame(update);
                // just for fun, lets rotate mr rabbit a little
                //bunny.rotation += 0.1;
                draw();
                
            };
        
        return {
            update : update,
            draw : draw,
            init : init
        };
    }
      );