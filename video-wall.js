/*jshint esversion: 6 */
/*jshint sub:true*/
/*globals jQuery, videojs, Mustache, Element*/
/**
 * esversion:6
 * @param {jQuery} $
 * @returns {void}
 */
if (jQuery)
    (function ($) {
        $.fn.extend({

            /**
             * The following optoins can be passed to the videoJS videowall plugin 
             * @param {wallOptions}, default: 'carousel', //carousel,thumb,playlist
             * @param {slideshow}, default: false, // true,false depending on the video wall mode you selected to load
             * @param {slideshowDelay},default: 2000, // slideshow delay
             * @param {videoWallId}, default:  "video-wall", //id of the video-wall container
             * @param {videoWallContainer}: default :'video-wall-container', // class for the video wall container
             * @param {containerId}, default: 'video-wall-slides', //slides container id
             * @param {containerClass}, default : "slides-container", // slides container class
             * @param {helpImproveVideoJS}, default : false,
             * @param {thumbPageSize}, default : 12, default pagesize for thumbnail view
             * @param {playlistPageSize}, default : 8,  total playlist on a single page for playlist mode 
             * @param {videos}, default : [], videos list in the playlist to be loaded in the playlist mode 
             * @param {playlist}, default : [], playlists for loading in the playlist mode 
             * @param {loadSelectAssets}, default: true, to load the select2 assets internally by plugin or manual use false to load your own version
             * @param {loadBootstrapAssets}, default : true, to load bootstrap assets internally by plugin itself, use false to provide your own files
             * @param {bootstrapCssSource}, default : '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', source to be loaded 
             * by the plugin internally for the bootstrap css, you can provide you own custom version.
             * @param {bootstrapJsSource}, default : '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', source to be loaded 
             * by the plugin internally for the bootstrap js, you can provide you own custom version.
             * @param {select2CssSource}, default : '//cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css', source to be loaded 
             * by the plugin internally for the select2 plugin css, you can provide you own custom version.
             * @param {select2JsSource}, default : '//cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css',source to be loaded 
             * by the plugin internally for the select2 plugin javascript, you can provide you own custom version.
             * @param {openOnStart}, default : true, if the plugin should start with the wall opened
             * @param {callback}, default : () => {}, the callback function to be called after the plugin has loaded completely 
             * @returns {void}
             */

            idowsVideowall: function (params) {
                "use strict";
                let elemId, $this, playAll;
                let loopList = {};

                //merge defaults 
                let options = $.extend({}, $.fn.idowsVideowall.defaults, params);

                /**
                 * @description DOM Element prototype for the library
                 * @param {attributes} , HTMLElement attributes to be set
                 */
                Element.prototype.setAttributes = function (attributes) {
                    for (var attributeName in attributes) {
                        let isHTML = attributeName === 'html';
                        if (isHTML) {
                            this.innerHTML = attributes[attributeName];
                        } else {
                            this.setAttribute(attributeName, attributes[attributeName]);
                        }
                    }
                };

                this.triggerEvent = (event, params) => {
                    $this.trigger(event, params);
                };

                /**
                 * @description ,main function that initializes the plugin depending on the selected options 
                 * and loads the necessary css and js files if selected to be
                 * loaded internally by plugin configurations/options.
                 */

                this.init = () => {

                    //optimize video js 
                    if (!options.helpImproveVideoJS)
                        window.HELP_IMPROVE_VIDEOJS = false;

                    let player = $this.dependencyCheck();

                    let walltypes = {
                        'carousel': () => {
                            //add carousel to videojs player
                            $this.addCarousel({
                                player: player,
                                videos: options.videos,
                                elem: elemId,
                            });
                        },
                        'thumb': () => {
                            $this.addThumbWall({
                                player: player,
                                videos: options.videos,
                                elem: elemId,
                            });
                        },
                        'playlist': () => {
                            $this.addPlaylist({
                                player: player,
                                playlists: options.playlists,
                                elem: elemId,
                            });
                        }
                    };

                    if (walltypes.hasOwnProperty(options.wallType))
                        walltypes[options.wallType].call(this);

                    //add video wall bar
                    $this.bindWallbarController({
                        player: player,
                    });

                    if (options.openOnStart)
                        $this.toggleWall({
                            player: player
                        });

                    //handle playback end event and play-all event for the playlist mode
                    player.on('ended', function (e) {
                        let isMorePlaylistItems = playAll && !$.isEmptyObject(loopList);
                        if (isMorePlaylistItems) {

                            let nextVideo = $.fn.findNextVideo(loopList);

                            if (nextVideo) {
                                loopList[nextVideo].isActive = true;
                                loopList[parseInt(nextVideo - 1)].isActive = false;

                                return $this.playVideo({
                                    title: loopList[nextVideo].title,
                                    player: player,
                                    mime: loopList[nextVideo].mime,
                                    src: loopList[nextVideo].src
                                });
                            } else {
                                $this.triggerEvent('onPlaylistEnd', {
                                    playlist: loopList
                                });
                            }

                        }
                        player.exitFullscreen();
                        player.hasStarted(false);
                        $('#' + elemId + '-' + options.videoWallId).stop(true, true).slideToggle();

                    });
                };


                /**
                 * @description checks for pre-reqs and options required to run the plugin correctly
                 * @returns {VideoJs Element} player
                 */
                this.dependencyCheck = () => {
                    //check if pre-reqs are available
                    let player = videojs(elemId);
                    let isNotVideoJs = typeof player === 'undefined';
                    let isNotPlaylist = typeof options.playlists !== 'object';

                    if (isNotVideoJs) {
                        console.log('videojs object not initialized, you must include the script after the video js script and make sure the video js plugin is initialized');
                        return false;
                    }

                    if (options.wallType === 'playlist' && isNotPlaylist) {
                        throw new Error('You need to provide the playlist object to initialize the paylist.');
                    }

                    if (options.loadBootstrapAssets) {
                        let loadBootstrapCss = options.bootstrapCssSource !== false && !$.fn.AssetLoaded({
                            file: options.bootstrapCssSource,
                            type: 'link'
                        });

                        //load css file for bootstrap
                        if (loadBootstrapCss) {
                            //load css style sheet
                            let stylesheet = document.createElement('link');
                            $(stylesheet).attr({
                                rel: "stylesheet",
                                type: "text/css",
                                href: options.bootstrapCssSource,
                                integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
                                crossorigin: "anonymous"
                            }).prependTo("head");
                        }

                        let loadBootstrapJs = options.bootstrapJsSource !== false && !$.fn.AssetLoaded({
                            file: options.bootstrapJsSource,
                            type: 'script'
                        });

                        //load js file for bootstrap
                        if (loadBootstrapJs) {
                            $.getScript(options.bootstrapJsSource, function (data, textStatus, jqxhr) {
                                let statusOk = jqxhr.status === 200;
                                //videojs.options.flash.swf = 'http://tinyii.my/js/tinymce/plugins/idowsfilemanager/js/video-js.swf';
                                if (!statusOk) {
                                    throw new Error('Could not load bootstrap js source specified make sure the internet is connected if you are using default options for loading the sources or provide local source otherwise.');
                                }
                            });
                        }

                    }

                    let isThumbView = options.wallType === 'thumb' && options.loadSelectAssets;

                    //check if thuimbview called
                    if (isThumbView) {
                        let loadSelect2Css = options.select2CssSource !== false && !$.fn.AssetLoaded({
                            file: options.select2CssSource,
                            type: 'link'
                        });

                        //check if select2 css loaded
                        if (loadSelect2Css) {
                            let selectTheme = document.createElement('link');

                            $(selectTheme).attr({
                                rel: "stylesheet",
                                type: "text/css",
                                href: options.select2CssSource,
                            }).appendTo("head");
                        }
                    }
                    return player;
                };

                /**
                 * @description Create A New HTMLElement 
                 * @param {elementType} params.elementType, the type of element to be created
                 * @param {attributes} params.attributes, the attributes for the HTMLElement to be created
                 * @returns {element}, HTMLElementObject
                 */
                this.createHtmlElement = (params) => {
                    let $d = document;
                    let element = $d.createElement(params.elementType);
                    element.setAttributes(params.attributes);
                    return element;
                };


                /**
                 * @description ,Adds containers for the video wall
                 * @param {elem}, parent HTMLElement wrapper for the containers 
                 */
                this.addContainers = (elem) => {
                    //video wall main container 
                    $this.addMainContainer(elem);

                    //thumbs container
                    let videothumbContainer = $this.createHtmlElement({
                        elementType: 'div',
                        attributes: {
                            id: elemId + '-' + options.containerId,
                            class: options.containerClass
                        }
                    });

                    $('#' + elemId + '-' + options.videoWallId).append(videothumbContainer);
                };

                /**
                 * @description ,Adds main video wall container div element
                 * @param {elem} , Wrapper HTMLElement for the main container
                 */
                this.addMainContainer = (elem) => {
                    //video wall container 
                    let wallContainer = $this.createHtmlElement({
                        elementType: 'div',
                        attributes: {
                            id: elemId + '-' + options.videoWallId,
                            class: options.videoWallContainer,
                            style: 'display:none;width:' + $($this).width() + 'px;height:' + $($this).height() + 'px'
                        }
                    });

                    $("#" + elem).append(wallContainer);
                };

                /**
                 * @description ,Add Slide Thumbs for the slider
                 * @param {counter} params.counter, the counter for the curernt page
                 * @param {poster} params.poster, the poster of the video for the wall (Carousel Mode)
                 * @returns {HTMLElementObject}
                 */
                this.addWallSlideThumb = (params) => {
                    return $this.createHtmlElement({
                        elementType: 'div',
                        attributes: {
                            id: elemId + '-slide-' + params.counter,
                            class: 'wall-slide mode-' + options.wallType + ' ' + ((params.counter === 0) ? 'active' : ''),
                            style: 'background:url(' + params.poster + '); background-size:cover; background-repeat:no-repeat;top:0'
                        },
                    });

                };



                /**
                 * @description , binds the play button functionality 
                 * @param {wrapper} params.wrapper, the wrapper HTMLElement to bind the click function 
                 * @param {videoParams} params.videoParams, the video params to be loaded into the videoJS tag 
                 */
                this.bindPlayVideo = (params) => {
                    //load video on play
                    $(params.wrapper).on('click', function (e) {
                        loopList = {};
                        playAll = 0;

                        $this.playVideo(params.videoParams);
                    });
                };

                /**
                 * @description , Plays the video passed to the function 
                 * @param {player} params.player , player object videoJS
                 * @param {mime} params.mime, mime type for the video
                 * @param {poster} params.poster, the poster image to be loaded in the videoJS player
                 */
                this.playVideo = (params) => {
                    let player = params.player;

                    //trigger before playback event
                    $this.triggerEvent('onBeforePlayback', {
                        title: params.title,
                        mime: params.mime,
                        player: params.player,
                        src: params.src
                    });

                    $('#' + elemId + '-' + options.videoWallId).stop(true, true).slideUp('slow', function () {
                        $('#' + elemId).hide();
                        player.pause();
                        player.src({
                            type: params.mime,
                            src: params.src
                        });
                        // load the new sources
                        player.load();
                        $('#' + elemId).show();
                        player.play();
                    });

                    //trigger before playback event
                    $this.triggerEvent('onAfterPlayback', {
                        title: params.title,
                        mime: params.mime,
                        player: params.player,
                        src: params.src
                    });
                };

                /**
                 * @description ,Slides a slide to right
                 * @returns {void}
                 */
                this.slideRight = () => {
                    $('#' + elemId + '-' + options.containerId + '.' + options.containerClass).find('div.active').removeClass('active').next().addClass('active');
                    $("#" + elemId + '-' + options.containerId + " > .wall-slide").stop(true, true, true).animate({
                        right: '+=' + $('#' + elemId).width()
                    }, 500, 'linear');
                };

                /**
                 * @description ,Slides a slide to left
                 * @returns {void}
                 */
                this.slideLeft = () => {
                    $('#' + elemId + '-' + options.containerId + '.' + options.containerClass).find('div.active').removeClass('active').prev().addClass('active');
                    $("#" + elemId + "-" + options.containerId + ">.wall-slide").stop(true, true, true).animate({
                        right: '-=' + $('#' + elemId).width()
                    }, 500, 'linear');
                };

                /**
                 * @description , Create Navigation for the video wall 
                 * to navigate between the pages left and right
                 * @returns {void}
                 */
                this.addNavigation = () => {
                    let arrowRight = $this.createHtmlElement({
                        elementType: "a",
                        attributes: {
                            id: elemId + '-arrow-right',
                            class: 'fa fa-chevron-circle-right'
                        }
                    });

                    //bind slide right on click arrow right
                    $(arrowRight).on('click', function (e) {
                        e.preventDefault();
                        let curSlide = $('#' + elemId + '-' + options.containerId + '.' + options.containerClass).find('div.active');
                        let nextSlide = curSlide.next();
                        let hasNextSlide = nextSlide.length;

                        if (hasNextSlide) {
                            $this.triggerEvent('onBeforeNext', {
                                nextSlide: nextSlide,
                                currentSlide: curSlide
                            });
                            $this.slideRight();
                            $this.triggerEvent('onAfterNext', {
                                previousSlide: curSlide,
                                currentSlide: nextSlide
                            });

                        }

                    }).appendTo('#' + elemId + '-' + options.videoWallId);

                    //add navigation arrow left
                    let arrowLeft = $this.createHtmlElement({
                        elementType: "a",
                        attributes: {
                            id: elemId + '-arrow-left',
                            class: 'fa fa-chevron-circle-left'
                        }
                    });

                    //bind slide right on click arrow left
                    $(arrowLeft).on('click', function (e) {
                        e.preventDefault();
                        let curSlide = $('#' + elemId + '-' + options.containerId + '.' + options.containerClass).find('div.active');
                        let prevSlide = curSlide.prev();
                        let hasPrevSlide = prevSlide.length;

                        if (hasPrevSlide) {
                            $this.triggerEvent('onBeforePrev', {
                                nextSlide: prevSlide,
                                currentSlide: curSlide
                            });

                            $this.slideLeft();

                            $this.triggerEvent('onAfterPrev', {
                                currentSlide: prevSlide,
                                previousSlide: curSlide
                            });

                        }

                    }).appendTo('#' + elemId + '-' + options.videoWallId);
                };

                /**
                 * @description , Adds Keyboard bindings for the left right keys 
                 * @returns {void}
                 */
                this.addKeyboardNavigation = () => {
                    let keyboardBindings = {
                        ArrowLeft: (e) => {
                            let curSlide = $('#' + elemId + '-' + options.containerId + '.' + options.containerClass).find('div.active');
                            let prevSlide = curSlide.prev();
                            let hasPrevSlide = prevSlide.length;

                            if (hasPrevSlide) {
                                $this.triggerEvent('onBeforePrev', {
                                    nextSlide: prevSlide,
                                    currentSlide: curSlide
                                });
                                $this.slideLeft();
                                $this.triggerEvent('onAfterPrev', {
                                    currentSlide: prevSlide,
                                    previousSlide: curSlide
                                });
                            }

                        },
                        ArrowRight: (e) => {
                            let curSlide = $('#' + elemId + '-' + options.containerId + '.' + options.containerClass).find('div.active');
                            let nextSlide = curSlide.next();
                            let hasNextSlide = $('#' + elemId + '-' + options.containerId + '.' + options.containerClass).find('div.active').next().length;

                            if (hasNextSlide) {
                                $this.triggerEvent('onBeforeNext', {
                                    nextSlide: nextSlide,
                                    currentSlide: curSlide
                                });
                                $this.slideRight();
                                $this.triggerEvent('onAfterNext', {
                                    previousSlide: curSlide,
                                    currentSlide: nextSlide
                                });
                            }

                        },
                        Enter: (e) => {
                            $('#' + elemId + '-' + options.containerId + ' > .wall-slide.active>.play-wrapper>i').trigger('click');
                        }
                    };

                    //bind mouseover element for binding keyboard navigation to active  wall only
                    $('#' + elemId + '-' + options.videoWallId).on('mouseover', function (e) {
                        document.onkeydown = function (e) {
                            let wallVisible = $('#' + elemId + '-' + options.videoWallId + ":visible").length;
                            if (wallVisible) {
                                if (keyboardBindings.hasOwnProperty(e.key))
                                    keyboardBindings[e.key].call(this, e);
                            }
                        };
                    });


                    //Firefox
                    $('#' + elemId + '-' + options.videoWallId).bind('DOMMouseScroll', function (e) {

                        let wallVisible = $('#' + elemId + '-' + options.videoWallId + ":visible").length;
                        let scrollEnabled = !!$(this).find('.card').filter(function () {
                            return $(this).is(":hover");
                        }).length;
                        if (wallVisible && !scrollEnabled) {
                            e.preventDefault();
                            if (e.detail > 0) {
                                //scroll down
                                if (keyboardBindings.hasOwnProperty('ArrowRight'))
                                    keyboardBindings.ArrowRight.call(this, e);
                            } else {
                                //scroll up
                                if (keyboardBindings.hasOwnProperty('ArrowLeft'))
                                    keyboardBindings.ArrowLeft.call(this, e);
                            }
                        }

                    });

                    // Detect IE version
                    var iev = 0;
                    var ieold = (/MSIE (\d+\.\d+);/.test(navigator.userAgent));
                    var trident = !!navigator.userAgent.match(/Trident\/7.0/);
                    var rv = navigator.userAgent.indexOf("rv:11.0");

                    if (ieold)
                        iev = new Number(RegExp.$1);
                    if (navigator.appVersion.indexOf("MSIE 10") != -1)
                        iev = 10;
                    if (trident && rv != -1)
                        iev = 11;

                    // IE 11
                    let isIE11 = typeof InstallTrigger !== 'undefined' || iev == 11;

                    if (isIE11) {
                        var lastScrollTop = 0;
                        $('#' + elemId + '-' + options.videoWallId).on('scroll', function (e) {

                            let scrollEnabled = !!$(this).find('.card').filter(function () {
                                return $(this).is(":hover");
                            }).length;

                            let wallVisible = $('#' + elemId + '-' + options.videoWallId + ":visible").length;

                            let st = $(this).scrollTop();
                            if (wallVisible && !scrollEnabled) {
                                e.preventDefault();
                                if (st < lastScrollTop) {
                                    if (keyboardBindings.hasOwnProperty('ArrowLeft'))
                                        keyboardBindings['ArrowLeft'].call(this, e);
                                } else if (st > lastScrollTop) {
                                    if (keyboardBindings.hasOwnProperty('ArrowRight'))
                                        keyboardBindings['ArrowRight'].call(this, e);
                                }
                            }
                            lastScrollTop = st;
                        });
                    }
                    // Chrome
                    else {
                        $('#' + elemId + '-' + options.videoWallId).on('mousewheel', function (e) {
                            let wallVisible = $('#' + elemId + '-' + options.videoWallId + ":visible").length;
                            let scrollEnabled = !!$(this).find('.card').filter(function () {
                                return $(this).is(":hover");
                            }).length;

                            if (wallVisible && !scrollEnabled) {
                                e.preventDefault();
                                if (e.originalEvent.wheelDelta > 0) {
                                    if (keyboardBindings.hasOwnProperty('ArrowLeft'))
                                        keyboardBindings['ArrowLeft'].call(this, e);
                                } else if (e.originalEvent.wheelDelta < 0) {
                                    if (keyboardBindings.hasOwnProperty('ArrowRight'))
                                        keyboardBindings['ArrowRight'].call(this, e);
                                }
                            }
                        });
                    }
                };



                /**
                 * @description ,Creates the playlist view for the player
                 * @param {elem} params.elem, HTMLElement wrapper element to inject the containers
                 * @param {playlists} params.playlists, the playlists to be loaded inside the videowall 
                 * @param {player} params.player,  VideoJS player object
                 */

                this.addPlaylist = (params) => {
                    //add containers 
                    $this.addContainers(params.elem);

                    //create document fragment
                    let fragment = document.createDocumentFragment();
                    let playlists = params.playlists;

                    //calculate total slides
                    let totalSlides = Math.ceil(playlists.length / options.playlistPageSize);


                    for (var i = 0; i < totalSlides; i++) {

                        //create wall thumb slide
                        let wallThumbSlide = $this.addWallSlideThumb({
                            poster: '',
                            counter: i
                        });

                        //iterate the playlists and create pages depending on the pagesize for the playlist mode
                        for (var key = options.playlistPageSize * i;
                            (key < options.playlistPageSize * (i + 1) && key < playlists.length); key++) {

                            let playlistCardId = elemId + '-playlist-card-' + key;
                            let playlistHeaderId = elemId + '-playlist-header-' + key;
                            let playlistTemplate = $.fn.getTemplate('playlist');

                            //playlist params
                            let playlistName = playlists[key].name;
                            let totalVideos = playlists[key].videos.length;
                            let cover = playlists[key].cover;
                            let videos = playlists[key].videos;

                            //atributes for the card HTMLElement
                            let attributes = {
                                playlistHeaderId: playlistHeaderId,
                                playlistName: playlistName,
                                videoCount: totalVideos,
                                cover: cover
                            };

                            //creates a playlistcard element
                            let playlistCard = $this.createHtmlElement({
                                elementType: 'div',
                                attributes: {
                                    class: 'card playlist-card',
                                    id: playlistCardId,
                                }
                            });

                            //add playlist template 
                            playlistCard.innerHTML = Mustache.render(playlistTemplate, attributes);

                            //append the playlist card to the current selected slide / page
                            wallThumbSlide.appendChild(playlistCard);

                            //append to the document fragment
                            fragment.appendChild(wallThumbSlide);

                            //get the playlist body and header objects from document fragment
                            let playlistBody = fragment.querySelector('#' + playlistCardId + ' .playlist-body');
                            let playlistHeader = fragment.querySelector('#' + playlistCardId + ' .playlist-header');

                            //bind the playall function for the playlist
                            $this.bindPlayAll({
                                button: playlistHeader.querySelector('button'),
                                playlist: playlists[key].videos,
                                playlistId: key,
                                player: params.player
                            });

                            //loop through the videos and add them to the current playlist card
                            for (var video in videos) {
                                if (videos.hasOwnProperty(video)) {
                                    //get the video params
                                    let src = videos[video].src;
                                    let poster = videos[video].poster;
                                    let mime = videos[video].mime;
                                    let title = videos[video].title;

                                    //get the template for the songlist
                                    let songlist = $.fn.getTemplate('songlist');

                                    //prepare song list data to be parsed
                                    let songData = {
                                        playlistSongId: playlistCardId + '-song-list-' + video,
                                        poster: poster,
                                        songTitle: title
                                    };

                                    //get the rendered html from the template for the songlist
                                    let songlistHtml = Mustache.render(songlist, songData);

                                    //the songlist wrapper element 
                                    let songWrapper = $this.createHtmlElement({
                                        elementType: 'div'
                                    });

                                    //insert the songlist to the wrapper
                                    songWrapper.innerHTML = songlistHtml;

                                    //append as child to the playlistBody
                                    playlistBody.appendChild(songWrapper.firstChild);

                                    //get the play button object
                                    let playButton = playlistBody.querySelector('#' + playlistCardId + '-song-list-' + video + '>.control>.play-wrapper-playlist');

                                    //bind the play button witht hte play functionality
                                    $this.bindPlayVideo({
                                        wrapper: playButton,
                                        videoParams: {
                                            player: params.player,
                                            mime: mime,
                                            src: src
                                        }
                                    });
                                }

                            }

                        }

                    }

                    if (totalSlides > 1) {
                        //add navigation arrow right
                        $this.addNavigation();

                        //bind arrow key left and right to the slide show
                        $this.addKeyboardNavigation();
                    }
                    //append the thumbnails to the wall container
                    document.querySelector('#' + elemId + '-' + options.containerId).appendChild(fragment);

                };
                /**
                 * @description , the playAll functionality for the "playlist" mode
                 * @param {button} params.button, the button object to bind the playall functionality  
                 * @param {playlist} params.playlist , the videos list in the playlist to be played
                 * @param {player} params.player, the VideoJS player object
                 */
                this.bindPlayAll = (params) => {

                    $(params.button).on('click', function (e) {
                        playAll = 1;
                        loopList = params.playlist.map(function (video, index) {
                            var videos = Object.assign({}, video);
                            videos.isActive = !index ? true : false;
                            return videos;
                        });

                        $this.triggerEvent('onPlaylistStart', {
                            playlist: loopList
                        });

                        $this.playVideo({
                            title: params.playlist[0].title,
                            player: params.player,
                            mime: params.playlist[0].mime,
                            src: params.playlist[0].src
                        });

                    });
                };

                /**
                 * @description Adds the carousel for the video wall
                 * @param {elem} params.elem , HTMLElement wrapper element to inject the containers
                 * @param {videos} params.videos, the playlists to be loaded inside the videowall 
                 * @param {player} params.player,  VideoJS player object
                 */
                this.addCarousel = (params) => {
                    //add containers 
                    $this.addContainers(params.elem);

                    //create document fragment
                    let fragment = document.createDocumentFragment();

                    //create wall thumbs slider
                    for (var key in params.videos) {
                        if (params.videos.hasOwnProperty(key)) {
                            let src = params.videos[key].src;
                            let poster = params.videos[key].poster;
                            let mime = params.videos[key].mime;
                            let title = params.videos[key].title;
                            let carouselTemplate = $.fn.getTemplate('carousel');

                            let attributes = {
                                slide_id: elemId + '-slide-' + parseInt(key),
                                mode: options.wallType,
                                status: ((parseInt(key) === 0) ? 'active' : ''),
                                poster: poster,
                                title: title
                            };
                            let temp = $this.createHtmlElement({
                                elementType: 'div',
                                attributes: {
                                    html: Mustache.render(carouselTemplate, attributes)
                                }
                            });

                            fragment.appendChild(temp.firstChild);
                        }

                    }

                    //appends the document fragment as a child to the document container 
                    document.querySelector('#' + elemId + '-' + options.containerId).appendChild(fragment);

                    //add navigation arrow right
                    $this.addNavigation();

                    //bind arrow key left and right to the slide show
                    $this.addKeyboardNavigation();
                };


                /**
                 * @description creates a thumbnail wall for the videos 
                 * @param {elem} params.elem, HTMLElement wrapper element to inject the containers
                 * @param {videos} params.videos, the videos to be loaded inside the video wall
                 * @param {player} params.player,  VideoJS player object
                 * 
                 */
                this.addThumbWall = (params) => {

                    //add contianer divs
                    $this.addContainers(params.elem);

                    //create document fragment to create and attach elements on runtime
                    let fragment = document.createDocumentFragment();

                    //add filter input to search available videos
                    $this.createFilterInput();

                    //calculate total slides
                    let totalSlides = Math.ceil(params.videos.length / options.thumbPageSize);

                    for (var i = 0; i < totalSlides; i++) {
                        //create wall thumb slide
                        let wallThumbSlide = $this.addWallSlideThumb({
                            poster: '',
                            counter: parseInt(i)
                        });

                        //append slide to fragment
                        fragment.appendChild(wallThumbSlide);

                        //iterate videos list and create thumbnails
                        for (var key = options.thumbPageSize * i;
                            (key < options.thumbPageSize * (i + 1) && key < params.videos.length); key++) {

                            let src = params.videos[key].src;
                            let poster = params.videos[key].poster;
                            let mime = params.videos[key].mime;
                            let title = params.videos[key].title;

                            let thumbnailTemplate = $.fn.getTemplate('thumbnail');

                            let attributes = {
                                thumb_id: elemId + '-video-thumb-' + key,
                                poster: poster,
                                video_title: title,
                                data_title: title,
                            };


                            //add playlist template 
                            let temp = $this.createHtmlElement({
                                elementType: 'div',
                                attributes: {
                                    html: Mustache.render(thumbnailTemplate, attributes)
                                }
                            });

                            fragment.querySelector('#' + elemId + '-slide-' + i).appendChild(temp.firstChild);

                            $this.bindPlayVideo({
                                wrapper: fragment.querySelector('#' + attributes.thumb_id + '> .play-wrapper-thumbnail'),
                                videoParams: {
                                    title: title,
                                    player: params.player,
                                    src: src,
                                    mime: mime
                                }
                            });
                        }
                    }
                    if (totalSlides > 1) {
                        //add navigation arrow right
                        $this.addNavigation();

                        //bind arrow key left and right to the slide show
                        $this.addKeyboardNavigation();
                    }

                    //append the thumbnails to the wall container
                    document.querySelector('#' + elemId + '-' + options.containerId).appendChild(fragment);
                };

                /**
                 * @description ,Adds Wall controller bar 
                 * @param {player} params.player , the VideoJS player Object
                 * @returns {void}
                 */
                this.bindWallbarController = (params) => {
                    let wallbar = $this.createWallBar();
                    wallbar.on('click', function () {
                        $this.toggleWall(params);
                    });
                };

                /**
                 * @description ,slideToggle the video wall
                 * @param {player} params.player , the VideoJS player Object
                 */
                this.toggleWall = (params) => {
                    $('#' + elemId + '-' + options.videoWallId).stop(true, true).slideToggle('slow');
                    params.player.pause();
                };

                /**
                 * @description ,Creates a Wall Bar controller element
                 * @returns {HTMLElementObject} wallbar
                 */
                this.createWallBar = () => {
                    let wallbar = $this.createHtmlElement({
                        elementType: 'div',
                        attributes: {
                            id: elemId + '-wall-control',
                            class: 'wall-bar',
                            html: '<i class="fa fa-list"></i>',
                            style: 'width:' + $($this).width() + 'px;'
                        }
                    });
                    return $(wallbar).insertAfter("#" + elemId);
                };

                /**
                 * @description creates a filter input for the video search
                 */
                this.createFilterInput = () => {

                    (options.select2JsSource !== false && options.loadSelectAssets) ?
                    //load script file
                    $.getScript(options.select2JsSource, function (data, textStatus, jqxhr) {
                        let statusOk = jqxhr.status === 200;
                        (statusOk) && $this.bindSelect2Sources();
                    }): $this.bindSelect2Sources();

                };


                /**
                 * @description creates the select2 input for the search filter video.
                 * @returns {undefined}
                 */
                this.bindSelect2Sources = () => {
                    let html = '<div class="filter-videos" style="margin:10px auto;font-size:initial;">' +
                        '<select class="js-example-basic-single" name="' + elemId + '-filter" id="' + elemId + '-filter">' +
                        '</select>' +
                        '</div>';

                    let range = document.createElement('div');
                    range.innerHTML = html;
                    document.querySelector('#' + elemId + '-' + options.videoWallId).insertBefore(range.firstChild, document.querySelector('#' + elemId + '-' + options.containerId));

                    $("#" + elemId + "-filter").select2({
                        "allowClear": true,
                        // "closeOnSelect": false,
                        "theme": "default",
                        "width": "100%",
                        "placeholder": "Search Videos",
                        'minimumInputLength': 2,
                        "dropdownCssClass": 'bigdrop',
                        "templateResult": function (video) {
                            if (!video.id) {
                                return video.text;
                            }
                            var $video = $(
                                '<span class="video-list-thumb"><p>' + video.text + '<small>Select to play the file</small><img src="' + decodeURIComponent(video.element.dataset.src) + '" class="img-video-select" /></p></span>'
                            );
                            return $video;
                        },
                        "templateSelection": function (video) {
                            if (!video.id) {
                                return video.text;
                            }
                            var $video = $(
                                '<span class="video-select-thumb"><p><i class="fa fa-play-circle-o" aria-hidden="true"></i>&nbsp; Playing Now&nbsp;' + video.text + '</p></span>'
                            );
                            return $video;
                        }
                    }).on('select2:select', function (e) {
                        e.preventDefault();
                        var data = e.params.data;
                        $('#' + data.id + ' >.play-wrapper-thumbnail').trigger('click');

                    });

                    //populate select2 data
                    $("#" + elemId + "-filter").refreshFilterResults($this.filteredData());
                };

                /**
                 * @description Formats files list as Select2 Data
                 * @returns {data} JSON
                 */
                this.filteredData = () => {
                    let filterableFiles = $('#' + elemId + '-' + options.videoWallId + ' div.thumb-title');

                    let data = [{
                        "id": '',
                        "text": 'Search Files',
                        "href": '',
                        "cover": ''
                    }];

                    for (var i = 0; i < filterableFiles.length; i++) {

                        let elementRef = $(filterableFiles[i]);
                        let filename = elementRef.data('title');
                        let cover = elementRef.parent().css('background-image');
                        let bi = cover.slice(4, -1);
                        let elementId = elementRef.parent().prop('id');

                        // For IE we need to remove quotes to the proper url
                        bi = cover.slice(4, -1).replace(/"/g, "");

                        data.push({
                            "id": elementId,
                            "text": filename,
                            "cover": bi,
                            "href": elementId
                        });
                    }

                    return data;
                };

                elemId = $(this).prop('id');
                $this = this;
                $this.init();
                options.callback.call(this);
                return $this;
            }
        });

        //set default options
        $.fn.idowsVideowall.defaults = {
            wallOptions: 'carousel', //slide,thumb,playlist
            slideshowDelay: 2000, // slideshow delay
            videoWallId: "video-wall", //id of the video-wall container
            videoWallContainer: 'video-wall-container', // class for the video wall container
            containerId: 'video-wall-slides', //slides container id
            containerClass: "slides-container", // slides container class
            helpImproveVideoJS: false,
            thumbPageSize: 15,
            playlistPageSize: 8,
            videos: [],
            playlists: [],
            loadSelectAssets: true,
            loadBootstrapAssets: true,
            bootstrapCssSource: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
            bootstrapJsSource: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
            select2CssSource: '//cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css',
            select2JsSource: '//cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.full.min.js',
            openOnStart: true,
            callback: () => {},
        };

        /**
         * @description ,Returns template for the selected templateSelection
         * @param {template} , the name of the template to be retrieved
         */
        $.fn.getTemplate = (template) => {
            let templateSelection = {
                playlist: () => {
                    return [
                        '<!--Background color-->',
                        '<div class="playlist-header aqua-gradient text-left" id="{{playlistHeaderId}}" style="background-image:url(\'{{cover}}\'); background-size:cover;background-repeat:no-repeat;background-position:center;">',

                        '<!--Name-->',
                        '<span class="playlist-title">{{playlistName}}</span>',
                        '<div class="controls">',
                        '<button name="playall">Play All&nbsp;',
                        '<i class="fa fa-play" aria-hidden="true"></i>',
                        '</button>',

                        '</div>',
                        '<span class="playlist-count badge badge-pill purple-gradient">{{videoCount}} <i class="fa fa-video-camera" aria-hidden="true"></i></span>',
                        '</div>',

                        '<!--Avatar-->',
                        '<div>',
                        '<div class="avatar">',
                        '<img src="{{cover}}" class="rounded-circle img-responsive">',
                        '</div>',
                        '</div>',

                        '<div class="playlist-body">',
                        '</div>',
                    ].join("\n");
                },
                songlist: () => {
                    return [
                        '<div class="song-list" id="{{playlistSongId}}" style="background-image:linear-gradient(rgba(0, 0, 0, 0.35),rgba(88, 88, 88, 0.82)),url({{poster}});">',

                        '<span class="control">',
                        '<span class="play-wrapper-playlist">',
                        '<i class="fa fa-play" aria-hidden="true"></i>',
                        '</span>',

                        '</span>',
                        '<span class="songTitle badge indigo lighten-1 blue-gradient">{{songTitle}}</span>',
                        '</div>',
                    ].join("\n");
                },
                thumbnail: () => {
                    return [
                        '<div id="{{thumb_id}}" class="video-thumb" style="background:url({{poster}}); background-size:cover; background-repeat:no-repeat;background-position:center center !important">',
                        '<div class="thumb-title" data-title="{{data_title}}">{{video_title}}</div>',
                        '<div class="play-wrapper-thumbnail">',
                        '<i class="fa fa-play play-control"></i>',
                        '</div>',
                        '</div>',
                    ].join("\n");
                },
                carousel: () => {
                    return [
                        '<div id="{{slide_id}}" class="wall-slide mode-{{model}} {{status}}" style="background: url(&quot;{{poster}}&quot;) 0% 0% / cover no-repeat; top: 0px; right: 0px;">',
                        '<div class="video-title">{{title}}</div>',
                        '<div class="play-wrapper">',
                        '<i class="fa fa-play play-control"></i>',
                        '</div>',
                        '</div>'
                    ].join("\n");

                }
            };

            if (templateSelection.hasOwnProperty(template)) {
                return templateSelection[template].call(this);
            }
        };

        /**
         *@description determines if the script or css files were actually loaded  
         *@param {file},the file path to be loaded could be loacal or live cdn
         *@param {type}, the type of file script or css
         *@returns {true|false}, returns true or false if loaded or loaded
         */
        $.fn.AssetLoaded = (params) => {
            if (params.type === 'script') {
                var scripts = document.getElementsByTagName("script");
                for (let i = 0; i < scripts.length; i++) {
                    if (scripts[i].src.substr(-params.file.length) == params.file)
                        return true;
                }
            } else {
                var links = document.getElementsByTagName("link");
                for (let i = 0; i < links.length; i++) {
                    if (links[i].href.substr(-params.file.length) == params.file)
                        return true;
                }
            }
            return false;
        };

        /**
         * @description finds the next video to be played in the playlist
         * @param loopList an object for the select playlist with the list of videos
         * @returns {object|false} returns next video object or false depending on if there is a next video to be played
         */
        $.fn.findNextVideo = (loopList) => {
            for (let video in loopList) {
                if (loopList[video].isActive && parseInt(video) < parseInt(Object.keys(loopList).length - 1)) {
                    return parseInt(video) + 1;
                }
            }
            return false;
        };


        /**
         * @description refreshes the select2 with new data to be replaced with current
         * @param {data} JSON , the json data to be mapped to the selecte2 
         */
        $.fn.refreshFilterResults = function (data) {

            this.select2('data', data);

            // Update options
            var $select = $(this[0]);
            var options = data.map(function (item) {
                return '<option value="' + item.id + '" data-href="' + item.href + '" data-src="' + encodeURIComponent(item.cover) + '">' + item.text + '</option>';
            });
            $select.html(options.join('')).change();
        };

    })(jQuery);