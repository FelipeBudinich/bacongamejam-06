/*global define, createjs, PIXI*/
define('resources',
    [
        'underscore',
        'ring',
        'soundjs',
        'easel',
        'tween',
        'pixi'
    ],
    function (
        underscore,
        ring,
        soundjs
    ) {
        'use strict';
        var
            ResourceError = ring.create([ring.Error], {
                name: "ResourceError",
                defaultMessage: "Undefined Resource Error"
            }),
            
            img = {},
            snd = {},
            vid = {},
            
            PREFFIX = {
                'img' : 'media/img/',
                'snd' : 'media/snd/',
                'vid' : 'media/vid/'
            },
            
            collectLoadedImages = function (path, id) {
                PIXI.Texture.addTextureToCache(path, id);
            },
            preloadImages = function () {
                var images = [],
                    loader,
                    id,
                    path;
                for (id in img) {
                    if (img.hasOwnProperty(id)) {
                        path = img[id].path;
                        images.push(path);
                        //collectLoadedImages(path,id);
                    }
                }
                loader = new PIXI.AssetLoader(images);
                loader.load();
            },
            addImage = function (path, id) {
                var fullpath = PREFFIX.img + path;
                img[id] = {path: fullpath};
            },
            getImage = function (id) {
                if (PIXI.TextureCache[img[id].path] === undefined) {
                    throw new ResourceError('no such image id: ' + id);
                }
                return PIXI.TextureCache[img[id].path];
            },
            
            collectLoadedSounds = function (event) {
                var id = event.id,
                    sndInstance;
                snd[id].loaded = true;
                //hack
                getSound(id).play({loop:-1, volume:0.03})
                //createjs.Tween.get(getSound(id)).to({volume:1}, 200);
            },
            preloadSounds = function () {
                var preload,
                    id,
                    path;
                createjs.Sound.addEventListener('fileload', collectLoadedSounds);
                for (id in snd) {
                    if (snd.hasOwnProperty(id)) {
                        path = snd[id].path;
                        createjs.Sound.registerSound(path, id, 1, true);
                    }
                }
            },
            addSound = function (path, id) {
                var fullpath = PREFFIX.snd + path;
                snd[id] = {path: fullpath, loaded: false};
            },
            getSound = function (id) {
                var sound = createjs.Sound.createInstance(id);
                try {
                    if (snd[id] === undefined) {
                        throw new ResourceError('no such sound id: ' + id);
                    } else if (!snd[id].loaded) {
                        throw new ResourceError('sound id: ' + id + ' has not finished loading');
                    }
                    return sound;
                } catch (e) {
                    throw e;
                }
            },
            addVideo = function (path, id) {
                vid[id] = {path : path};
            },
            getVideo = function (id) {
                if (vid[id] === undefined) {
                    throw new ResourceError('no such video id: ' + id);
                }
                return vid[id];
            };
        
        return {
            addImage : addImage,
            getImage : getImage,
            preloadImages : preloadImages,
            
            addSound : addSound,
            getSound : getSound,
            preloadSounds : preloadSounds
        };
    }
      );