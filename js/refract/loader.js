/*global define, document*/
define('loader',
    [
        'lib/PxLoader/PxLoader',
        'lib/PxLoader/PxLoaderImage',
        'lib/PxLoader/PxLoaderSound',
        'lib/PxLoader/PxLoaderVideo'
    ],
    function () {
        'use strict';
        var
            FORMATS = {
                'audio' : {
                    'mp3' : 'audio/mpeg',
                    'm4a' : 'audio/mp4; codecs=mp4a',
                    'ogg' : 'audio/ogg; codecs=vorbis',
                    'webm' : 'audio/webm; codecs=vorbis',
                    'caf' : 'audio/x-caf'
                },
                'video' : {
                    'mp4': 'video/mp4; codecs=avc1.42E01E, mp4a.40.2',
                    'webm': 'video/webm; codecs=vp8, vorbis',
                    'ogv': 'video/ogg; codecs=theora, vorbis'
                }
            },

            detectSupportedFormat = function (element) {
                
                // Probe video formats and determine the best file extension to load
                var
                    probe = document.createElement(element),
                    format = FORMATS[element],
                    extension,
                    mime;
                
                if (typeof probe !== "undefined" && probe !== null) {
                    
                    for (extension in format) {
                        if (format.hasOwnProperty(extension)) {
                            mime = format[extension];
                            if (probe.canPlayType(mime)) {
                                return mime;
                            }
                        }
                    }
                }
                return null;
            },
        
            getSupportedFormat = function (element) {
                return detectSupportedFormat(element);
            },
            
            preload = function (asset) {
                var pxLoader = new PxLoader();
                pxLoader.addImage(asset);
            };
        
        return {
            getSupportedFormat : getSupportedFormat,
            preload : preload
        };
    }
      );