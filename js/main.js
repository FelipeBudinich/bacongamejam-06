/*global require*/
(function () {
    'use strict';
    require.config(
        {
            paths: {
                //External Libraries
                'underscore': 'lib/underscore',
                'ring': 'lib/ring',
                'pixi': 'lib/_pixi',
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
            resources.addImage('cards/0000.webp', 'img_00');
            resources.addImage('cards/0001.webp', 'img_01');
            resources.addImage('cards/0002.webp', 'img_02');
            resources.addImage('cards/0003.webp', 'img_03');
            resources.addImage('cards/0004.webp', 'img_04');
            resources.addImage('cards/0005.webp', 'img_05');
            resources.addImage('cards/0006.webp', 'img_06');
            resources.addImage('cards/0007.webp', 'img_07');
            resources.addImage('cards/0008.webp', 'img_08');
            resources.addImage('cards/0009.webp', 'img_09');
            resources.addImage('cards/0010.webp', 'img_10');
            resources.addImage('cards/0011.webp', 'img_11');
            resources.addImage('cards/0012.webp', 'img_12');
            resources.addImage('cards/0013.webp', 'img_13');
            resources.addImage('cards/0014.webp', 'img_14');
            resources.addImage('cards/0015.webp', 'img_15');
            resources.addImage('cards/0016.webp', 'img_16');
            resources.addImage('cards/0017.webp', 'img_17');
            resources.addImage('cards/0018.webp', 'img_18');
            resources.addImage('cards/0019.webp', 'img_19');
            resources.addImage('cards/0020.webp', 'img_20');
            resources.addImage('cards/0021.webp', 'img_21');
            resources.addImage('cards/0022.webp', 'img_22');
            resources.addImage('cards/0023.webp', 'img_23');
            resources.addImage('cards/0024.webp', 'img_24');
            resources.addImage('cards/0025.webp', 'img_25');
            resources.addImage('cards/0026.webp', 'img_26');
            resources.addImage('cards/0027.webp', 'img_27');
            resources.addImage('cards/0028.webp', 'img_28');
            resources.addImage('cards/0029.webp', 'img_29');
            resources.addImage('cards/0030.webp', 'img_30');
            resources.addImage('cards/0031.webp', 'img_31');
            resources.addImage('cards/0032.webp', 'img_32');
            resources.addImage('cards/0033.webp', 'img_33');
            resources.addImage('cards/0034.webp', 'img_34');
            resources.addImage('cards/0035.webp', 'img_35');
            resources.addImage('cards/0036.webp', 'img_36');
            resources.addImage('cards/0037.webp', 'img_37');
            resources.addImage('cards/0038.webp', 'img_38');
            resources.addImage('cards/0039.webp', 'img_39');
            resources.addImage('cards/0040.webp', 'img_40');
            resources.addImage('cards/0041.webp', 'img_41');
            resources.addImage('cards/0042.webp', 'img_42');
            resources.addImage('cards/0043.webp', 'img_43');
            resources.addImage('cards/0044.webp', 'img_44');
            resources.addImage('cards/0045.webp', 'img_45');
            resources.addImage('cards/0046.webp', 'img_46');
            resources.addImage('cards/0047.webp', 'img_47');
            resources.addImage('cards/0048.webp', 'img_48');
            resources.addImage('cards/0049.webp', 'img_49');
            resources.addImage('cards/0050.webp', 'img_50');
            resources.addImage('cards/0051.webp', 'img_51');
            resources.addImage('cards/0052.webp', 'img_52');
            resources.addImage('cards/0053.webp', 'img_53');
            resources.addImage('cards/0054.webp', 'img_54');
            resources.addImage('cards/0055.webp', 'img_55');
            resources.addImage('cards/0056.webp', 'img_56');
            resources.addImage('cards/0057.webp', 'img_57');
            resources.addImage('cards/0058.webp', 'img_58');
            resources.addImage('cards/0059.webp', 'img_59');
            resources.addImage('cards/0060.webp', 'img_60');
            resources.addImage('cards/0061.webp', 'img_61');
            resources.addImage('cards/0062.webp', 'img_62');
            resources.addImage('cards/0063.webp', 'img_63');
            resources.addImage('cards/0064.webp', 'img_64');
            resources.addImage('cards/0065.webp', 'img_65');
            resources.addImage('cards/0066.webp', 'img_66');
            resources.addImage('cards/0067.webp', 'img_67');
            resources.addImage('cards/0068.webp', 'img_68');
            resources.addImage('cards/0069.webp', 'img_69');
            resources.addImage('cards/0070.webp', 'img_70');
            resources.addImage('cards/0071.webp', 'img_71');
            resources.addImage('cards/0072.webp', 'img_72');
            resources.addImage('cards/0073.webp', 'img_73');
            resources.addImage('cards/0074.webp', 'img_74');
            resources.addImage('cards/0075.webp', 'img_75');
            resources.addImage('cards/0076.webp', 'img_76');
            resources.addImage('cards/0077.webp', 'img_77');
          
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