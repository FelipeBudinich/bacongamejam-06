/*global require*/
(function () {
    'use strict';
    require.config(
        {
            paths: {
                //External Libraries
                'underscore': 'lib/underscore',
                'ring': 'lib/ring',
                'pixi': 'lib/pixi',
                'soundjs': 'lib/soundjs',
                'easel': 'lib/easeljs',
                'tween': 'lib/tween',
                
                //Refract modules
                'loader': 'refract/loader',
                'resources': 'refract/manager/resources'
            },
            
            shim: {
                'underscore': {
                    exports: '_'
                },
                'ring': {
                    deps: ['underscore'],
                    exports: 'ring'
                },
                'easel': {
                    exports: 'createjs'
                },
                'tween': {
                    deps: ['easel'],
                    exports: 'Tween'
                }
            }
        }
    );
    
    require(
        ['resources'],
        function (resources) {
            resources.addImage('cards/0000.png', 'img_00');
            resources.addImage('cards/0001.png', 'img_01');
            resources.addImage('cards/0002.png', 'img_02');
            resources.addImage('cards/0003.png', 'img_03');
            resources.addImage('cards/0004.png', 'img_04');
            resources.addImage('cards/0005.png', 'img_05');
            resources.addImage('cards/0006.png', 'img_06');
            resources.addImage('cards/0007.png', 'img_07');
            resources.addImage('cards/0008.png', 'img_08');
            resources.addImage('cards/0009.png', 'img_09');
            resources.addImage('cards/0010.png', 'img_10');
            resources.addImage('cards/0011.png', 'img_11');
            resources.addImage('cards/0012.png', 'img_12');
            resources.addImage('cards/0013.png', 'img_13');
            resources.addImage('cards/0014.png', 'img_14');
            resources.addImage('cards/0015.png', 'img_15');
            resources.addImage('cards/0016.png', 'img_16');
            resources.addImage('cards/0017.png', 'img_17');
            resources.addImage('cards/0018.png', 'img_18');
            resources.addImage('cards/0019.png', 'img_19');
            resources.addImage('cards/0020.png', 'img_20');
            resources.addImage('cards/0021.png', 'img_21');
            resources.addImage('cards/0022.png', 'img_22');
            resources.addImage('cards/0023.png', 'img_23');
            resources.addImage('cards/0024.png', 'img_24');
            resources.addImage('cards/0025.png', 'img_25');
            resources.addImage('cards/0026.png', 'img_26');
            resources.addImage('cards/0027.png', 'img_27');
            resources.addImage('cards/0028.png', 'img_28');
            resources.addImage('cards/0029.png', 'img_29');
            resources.addImage('cards/0030.png', 'img_30');
            resources.addImage('cards/0031.png', 'img_31');
            resources.addImage('cards/0032.png', 'img_32');
            resources.addImage('cards/0033.png', 'img_33');
            resources.addImage('cards/0034.png', 'img_34');
            resources.addImage('cards/0035.png', 'img_35');
            resources.addImage('cards/0036.png', 'img_36');
            resources.addImage('cards/0037.png', 'img_37');
            resources.addImage('cards/0038.png', 'img_38');
            resources.addImage('cards/0039.png', 'img_39');
            resources.addImage('cards/0040.png', 'img_40');
            resources.addImage('cards/0041.png', 'img_41');
            resources.addImage('cards/0042.png', 'img_42');
            resources.addImage('cards/0043.png', 'img_43');
            resources.addImage('cards/0044.png', 'img_44');
            resources.addImage('cards/0045.png', 'img_45');
            resources.addImage('cards/0046.png', 'img_46');
            resources.addImage('cards/0047.png', 'img_47');
            resources.addImage('cards/0048.png', 'img_48');
            resources.addImage('cards/0049.png', 'img_49');
            resources.addImage('cards/0050.png', 'img_50');
            resources.addImage('cards/0051.png', 'img_51');
            resources.addImage('cards/0052.png', 'img_52');
            resources.addImage('cards/0053.png', 'img_53');
            resources.addImage('cards/0054.png', 'img_54');
            resources.addImage('cards/0055.png', 'img_55');
            resources.addImage('cards/0056.png', 'img_56');
            resources.addImage('cards/0057.png', 'img_57');
            resources.addImage('cards/0058.png', 'img_58');
            resources.addImage('cards/0059.png', 'img_59');
            resources.addImage('cards/0060.png', 'img_60');
            resources.addImage('cards/0061.png', 'img_61');
            resources.addImage('cards/0062.png', 'img_62');
            resources.addImage('cards/0063.png', 'img_63');
            resources.addImage('cards/0064.png', 'img_64');
            resources.addImage('cards/0065.png', 'img_65');
            resources.addImage('cards/0066.png', 'img_66');
            resources.addImage('cards/0067.png', 'img_67');
            resources.addImage('cards/0068.png', 'img_68');
            resources.addImage('cards/0069.png', 'img_69');
            resources.addImage('cards/0070.png', 'img_70');
            resources.addImage('cards/0071.png', 'img_71');
            resources.addImage('cards/0072.png', 'img_72');
            resources.addImage('cards/0073.png', 'img_73');
            resources.addImage('cards/0074.png', 'img_74');
            resources.addImage('cards/0075.png', 'img_75');
            resources.addImage('cards/0076.png', 'img_76');
            resources.addImage('cards/0077.png', 'img_77');
          
            resources.preloadImages();
            
            resources.addSound('bkgm.mp3|bkgm.ogg', 'msc_01');
            resources.preloadSounds();
            
        }
    );
 
    require(
        ['game', 'resources'],
        function (game, resources) {
            game.init(resources);
            
        }
    );
}());