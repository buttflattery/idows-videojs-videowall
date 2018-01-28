# VIDEOJS VideoWall by IDOWS #
 **Version 1.0**
 ________
### What is this repository for? ###
A jquery plugin that creates a Video Wall for VIDEOJS video player using three different modes.

* Carousel (Default)
* Thumbnail
* Playlist

### External Libraries Used ###
* [VideoJs](http://videojs.com/) Library
* [MustacheJS](https://github.com/janl/mustache.js/) for Templating
* [jQuery v2.2.4](https://jquery.com/download/)
* Fontawesome
* [Select2 v4.0.5](https://select2.org/)
* [Bootstrap v3.3.7](https://getbootstrap.com/docs/3.3/)

# Demo #
http://plugins.idowstech.com/site/demovideowall

# Features #
_________

The plugin features 3 modes to use for your video files with VideoJS

* **Carousel (Default)**

* **Thumbnail**

* **Playlist**


### Start using with minimum effort ###

You can provide the list of videos/playlists to the plugin and thats it all will be done by the plugin itself it gives you ease to manange your video files with VideoJS player. 

### Select the Right Mode for you ###

The Video wall plugin takes the video tag used by the VideoJS plugin and automatically adjusts its size according to the dimensions of the video player, so you need to be decide which mode will work best for you.

Each mode has its own usage the carousel mode can be used for all sizes player small, medium and large. But if you are limited to use small sized video player on your site then you must use `carousel` mode. 

If you intend to use rather medium sized player or large sized you can use `thumb` mode as it would provide you with the ability to filter and play the videos using the popular Select2 dropdown just type the name and hit <kbd>Enter</kbd> the video will start playing.

And if you are using VideoJs to manage and present your videos in form of  playlists `playlist` mode is the right mode to use for you. This mode is only used for playlists and it is not recommended for small OR Medium size player

### Keyboard Support ###

You can navigate between the slides in all 3 modes using your left <kbd><-</kbd> and right <kbd>-></kbd> keyboard buttons.
More over you can use the scroll up and down to navigate between the video slides too if you dont feel like moving to the keyboard and want to stick with the mouse.

### How do I get set up? ###

* ## LIBRARIES ##

```html

    //video js css file if not added yet
    <link href="http://vjs.zencdn.net/6.2.8/video-js.css" rel="stylesheet">

    //videowall css file
    <link href="video-wall.css" rel="stylesheet">

    //fontawesome for icons
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

    //google font Roboto
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

    //jquery library
    <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
    //video js library if not inluded
    <script src="http://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>
    <script src="http://vjs.zencdn.net/6.2.8/video.js"></script>
    //MustacheJs library required for `Playlist` mode
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.min.js"></script>
    //idows videowall plugin
    <script src="video-wall.js"></script>

```
* ## HTML ##

```HTML
<video id="my-video" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="500" height="500"
                    data-setup="{}" poster="video-uploads/posters/1.jpg">
    <source src="sample.mp4" type='video/mp4'>
    <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a web browser that
        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
    </p>
</video>
```

* ## JAVASCRIPT ##
Then choose your desired mode and paste the relevant script provided

## 1. Carousel Mode  (Default) ##

![delete-single-files](https://plugins.idowstech.com/images/video-wall-carousel.png) 
        
### Quick Start Code ### 

```javascript 

    $ ( '#video-js-video-tag-id' ).idowsVideowall ( {
    videos : [{
            src : '/images/video-wall/sample1.mp4',
            poster : '/images/video-wall/posters/sample1.png',
            mime : 'video/mp4',
            title : 'Circus Video Custom '
        }, {
            src : '/images/video-wall/sample2.mp4',
            poster : '/images/video-wall/posters/sample2.png',
            mime : 'video/mp4',
            title : 'Deep Space Star Acts'
        }, {
            src : '/images/video-wall/sample3.mp4',
            poster : '/images/video-wall/posters/sample3.png',
            mime : 'video/mp4',
            title : 'Dolby Digital Intro'
        }, {
            src : '/images/video-wall/sample3.mp4',
            poster : '/images/video-wall/posters/sample3.png',
            mime : 'video/mp4',
            title : 'Dolby Digital Intro'
        }]
    } );
```

## Thumbnail Mode ##

![delete-single-files](https://plugins.idowstech.com/images/video-wall-thumb.png)

### Quick Start Code ### 

```javascript 

    $ ( '#video-js-video-tag-id' ).idowsVideowall ( {
    wallType : 'thumb',
    videos : [{
            src : '/images/video-wall/sample1.mp4',
            poster : '/images/video-wall/posters/sample1.png',
            mime : 'video/mp4',
            title : 'Circus Video Custom '
        }, {
            src : '/images/video-wall/sample2.mp4',
            poster : '/images/video-wall/posters/sample2.png',
            mime : 'video/mp4',
            title : 'Deep Space Star Acts'
        }, {
            src : '/images/video-wall/sample3.mp4',
            poster : '/images/video-wall/posters/sample3.png',
            mime : 'video/mp4',
            title : 'Dolby Digital Intro'
        }, {
            src : '/images/video-wall/sample4.mp4',
            poster : '/images/video-wall/posters/sample4.png',
            mime : 'video/mp4',
            title : 'Toy Helicopter Demo'
        },]
    } );
```
## Playlist Mode ##

![delete-single-files](https://plugins.idowstech.com/images/video-wall-playlist.png)

### Quick Start Code ###   

```javascript

    $ ( "#video-js-video-tag-id" ).idowsVideowall ( {
        wallType : 'playlist',
        playlists : [{
            name : 'Sweet Sexy Savage',
            cover : '/images/video-wall/posters/playlist-1.jpg',
            videos : [{
                    src : '/images/video-wall/sample1.mp4',
                    poster : '/images/video-wall/posters/sample1.png',
                    mime : 'video/mp4',
                    title : 'Circus Juggler Video'
                }, {
                    src : '/images/video-wall/sample2.mp4',
                    poster : '/images/video-wall/posters/sample2.png',
                    mime : 'video/mp4',
                    title : 'Deep Space Star Acts'
                }, {
                    src : '/images/video-wall/sample3.mp4',
                    poster : '/images/video-wall/posters/sample3.png',
                    mime : 'video/mp4',
                    title : 'Dolby Digital Intro'
                }, {
                    src : '/images/video-wall/sample4.mp4',
                    poster : '/images/video-wall/posters/sample4.png',
                    mime : 'video/mp4',
                    title : 'Toy Helicopter Demo'
                }, {
                    src : '/images/video-wall/sample4.mp4',
                    poster : '/images/video-wall/posters/sample4.png',
                    mime : 'video/mp4',
                    title : 'Toy Helicopter Demo'
                }]
        } ]
    }); 
```

# Options #


| Option Name       |   Type       |   Values        |       Description 
| ------------- |:-------------| ----------------| ------------------
| `wallType`   |`string`  | `carousel` (default), `thumb`, `playlist`  | Selects which type of videowall mode you want 
| `videoWallId` |`string`     | `video-wall` (default)      |   `id` of the video-wall container |
| `videoWallContainer`|`string` | `video-wall-container` (default)      |    `css class` for the video wall container |
| `containerId`|`string` | `video-wall-slides` (default)      |    `id` for the slides container|
| `containerClass` |`string`| `slides-container` (default)      |    `css class` for slides container|
| `helpImproveVideoJS`|`boolean` | `true, false` (default)      |    VideoJS Option to collect information|
| `thumbPageSize`|`int` | `15` (default)      |    Default page size for the thumbnails in `thumb` mode|
| `playlistPageSize`|`int` | `8` (default)      |    Default page size for the playlists in `playlist` mode|
| `videos`|`JSON Array` | `[{` <br /> `src:'path/to/your/video/file',` <br />`poster:'path/to/poster/image',`<br />`mime:'video/mp4' (or any other you are using),` <br /> `title:'Video Title'`<br />`}]`      |    Used in `thumb` or `carousel` mode. You have to pass an array of objects or a JSON Array having all the video files information. See [Demo](http://tinyii.my/site/videowalldemo) for example code.|
| `playlists`|`JSON Array` | `[{`<br />`name:'Playlist Name',` <br />`cover:'path/to/playlist/cover/image',`<br />`videos:[{src:'',poster:'',mime:'',title:''}],` <br />`},]`      |    Used in `playlist` mode for initializing the playlists. The attributes passed for each playlist file in form of JSONArray. Each playlist contains `video` Array which contains the list of videos associated to that playlist. The properties of this array are identical to the `video` array passed in `carousel` and `thumb` mode.See [Demo](http://tinyii.my/site/videowalldemo) for example code.|
| `loadSelectAssets`|`boolean` | `true` (default)`, false`      |    Whether the `Select2 v4.0.5` assets should be loaded internally by the plugin or manually by the user. The select2 is used in the `thumb` mode to search and play the video files available in the video wall. if you use `false` then none of the assets(`JS` or `CSS`) would be loaded, you would have to include them yourself.|
| `loadBootstrapAssets`|`boolean` | `true` (default)`, false`      |    Whether the `bootstrap v3.3.7` assets should be loaded internally by the plugin or manually by the user. If you use `false` then none of the assets(`JS` or `CSS`) would be loaded, you would have to include them yourself.|
| `select2CssSource`|`string url` | `//cdnjs url to select2.min.css`     |    Source for the `Select2 CSS` assets. You can specify your own `CDN` version if you like or if you want to use local resources.|
| `select2JsSource`|`string url` | `//cdnjs url to select2.full.min.js`     |    Source for the `Select2 JS` assets. You can specify your own `CDN` version if you like or if you want to use local resources.|
| `bootstrapCssSource`|`string url` | `//maxcdn url to bootstrap.min.css`     |    Source for the `Bootstrap CSS` assets. You can specify your own `CDN` version if you like or if you want to use local resources.|
| `bootstrapJsSource`|`string url` | `//maxcdn url to bootstrap.min.js`     |    Source for the `Bootstrap JS` assets. You can specify your own `CDN` version if you like or if you want to use local resources.|
| `openOnStart`|`boolean` | `true`(default)`, false`     |    Whether to start the video wall minimized or open when the page loads.|


# Events #

|Event Name         |       Params      |     Usage & Description
|----------         |-------------------|     ------------------|
|`callback`         |`null`         | `$('#id').idowsVideoWall({`<br />`callback:function(){`<br />`console.log('finished loading);`<br />`}`<br />`});`<br /><br />Description:<br/><br />***A callback function that is triggered after the initialization of the plugin, called once/instance.***
|`onBeforePlayback` | `@param event,`<br />` @param data (Obj)`<br /> `{`<br />`title,`<br />`mime,`<br />`player,`<br />`src`<br />`}`| `$("#element-id").idowsVideowall(` <br /> `{` <br /> `wallType:'thumb'` <br /> `}).on('onBeforePlayback',function(event,data)){` <br /> `console.log(data)` <br /> `};` <br /> or <br /> `var obj=$("#element-id").idowsVideowall();`<br /> `obj.on('onBeforePlayback',function(event,data){`<br />`console.log(data);}`<br />`);` <br /><br />Description:<br/><br />***This event is triggered right **after** you click play button and **before** the play back starts. This event is also triggered **before** starting a new video playback while the playlist is playing using `Play All` button.***
|`onAfterPlayback`  |`@param event,`<br />`@param data (Obj)`<br /> `{`<br />`title,`<br />`mime,`<br />`player,`<br />`src`<br />`}`| `$("#element-id").idowsVideowall({` <br /> `wallType:'thumb'` <br /> `}).on('onAfterPlayback',function(event,data)){` <br /> `console.log(data)` <br /> `};` <br /> or <br /> `var obj=$("#element-id").idowsVideowall();`<br /> `obj.on('onAfterPlayback',function(event,data){`<br />`console.log(data);}`<br />`);` <br /><br />Description:<br/><br />***This event is triggered right **after** you click play button and **after** the play back has started. This event is also triggered **after** starting a new video playback while the playlist is playing using `Play All` button.***
|`onBeforeNext`     |`@param event,`<br />`@param data(Obj)`<br />`{`<br />`nextSlide,`<br />`currentSlide`<br />`}`| `$("#element-id").idowsVideowall({` <br /> `wallType:'thumb'` <br /> `}).on('onBeforeNext',function(event,data)){` <br /> `console.log(data.nextSlide,data.currentSlide)` <br /> `};` <br /> or <br /> `var obj=$("#element-id").idowsVideowall();`<br /> `obj.on('onBeforeNext',function(event,data){`<br />`console.log(data);}`<br />`);`<br /><br />Description:<br/><br />***This event is triggered right **after** you click next button and **before** the next slide is presented. This event is also triggered **after** you scroll-down while hovering over the video wall.***
|`onAfterNext`     |  `@param event ,`<br />` @param data(Obj)`<br />` {`<br />`previousSlide,`<br />`currentSlide`<br />`}`|`$("#element-id").idowsVideowall({` <br /> `wallType:'thumb'` <br /> `}).on('onAfterNext',function(event,data)){` <br /> `console.log(data.previousSlide,data.currentSlide)` <br /> `};` <br /> or <br /> `var obj=$("#element-id").idowsVideowall();`<br /> `obj.on('onAfterNext',function(event,data){`<br />`console.log(data);}`<br />`);`<br /><br />Description:<br/><br />***This event is triggered right **after** you click next button and **after** the next slide is presented. This event is also triggered **after** you scroll-down while hovering over the video wall and after the next slide is presented.***
|`onBeforePrev`     |  `@param event ,`<br />` @param data(Obj)`<br />` {`<br />`nextSlide,`<br />`currentSlide`<br />`}`|`$("#element-id").idowsVideowall({` <br /> `wallType:'thumb'` <br /> `}).on('onBeforePrev',function(event,data)){` <br /> `console.log(data.nextSlide,data.currentSlide)` <br /> `};` <br /> or <br /> `var obj=$("#element-id").idowsVideowall();`<br /> `obj.on('onBeforePrev',function(event,data){`<br />`console.log(data);}`<br />`);`<br /><br />Description:<br/><br />***This event is triggered right **after** you click previous or back arrow button and **before** the previous slide is presented. This event is also triggered **after** you scroll-up while hovering over the video wall and **before** the previous slide is presented.***
|`onAfterPrev`     |  `@param event ,`<br />` @param data(Obj)`<br />` {`<br />`currentSlide,`<br />`previousSlide`<br />`}`|`$("#element-id").idowsVideowall({` <br /> `wallType:'thumb'` <br /> `}).on('onAfterPrev',function(event,data)){` <br /> `console.log(data.previousSlide,data.currentSlide)` <br /> `};` <br /> or <br /> `var obj=$("#element-id").idowsVideowall();`<br /> `obj.on('onAfterPrev',function(event,data){`<br />`console.log(data);}`<br />`);`<br /><br />Description:<br/><br />***This event is triggered right **after** you click previous or back arrow button and **after** the previous slide is presented. This event is also triggered **after** you scroll-up while hovering over the video wall and **after** the previous slide is presented.***
|`onPlaylistStart`     |  `@param event ,`<br />` @param data(Obj)`<br />` {`<br />`playlist[{`<br />`isActive:true/false,`<br />`mime:"video/mp4",`<br />`poster:"video-uploads/posters/1.jpg",`<br />`src:"sample.mp4",`<br />`title:"Track 1"`<br />`}]`<br />`}`|`$("#element-id").idowsVideowall({` <br /> `wallType:'thumb'` <br /> `}).on('onPlaylistStart',function(event,data)){` <br /> `for(var i in data.playlist){`<br />`let video = data.playlist;`<br />`console.log(video[i].mime, video[i].title, video[i].isActive);}` <br /> `};` <br /> or <br /> `var obj=$("#element-id").idowsVideowall();`<br /> `obj.on('onPlaylistStart',function(event,data){`<br />`for (var i in data.playlist) {`<br />`let video = data.playlist;`<br />`console.log(video[i].mime, video[i].title, video[i].isActive);`<br />`}}`<br />`);`<br /><br />Description:<br/><br />***This event is triggered right **after** you click `Play All` button  and **before** the playback starts. It returns a javascript object of `playlist` which contains the list of the currently playing playlist videos. The object contains*** <br />`isActive: (Boolean), identifies which file is currently playing.`<br />`mime: (Video MimeTypes), the mime type of the video file`<br />`poster: (string) , the poster of the video file playing.`<br />`src: (string) ,the path to video file source`<br />`title: (string), the title of the video file`
|`onPlaylistEnd`     |  `@param event ,`<br />` @param data(Obj)`<br />` {`<br />`playlist[{`<br />`isActive:true/false,`<br />`mime:"video/mp4",`<br />`poster:"video-uploads/posters/1.jpg",`<br />`src:"sample.mp4",`<br />`title:"Track 1"`<br />`}]`<br />`}`|`$("#element-id").idowsVideowall({` <br /> `wallType:'thumb'` <br /> `}).on('onPlaylistStart',function(event,data)){` <br /> `for(var i in data.playlist){`<br />`let video = data.playlist;`<br />`console.log(video[i].mime, video[i].title, video[i].isActive);}` <br /> `};` <br /> or <br /> `var obj=$("#element-id").idowsVideowall();`<br /> `obj.on('onPlaylistStart',function(event,data){`<br />`for (var i in data.playlist) {`<br />`let video = data.playlist;`<br />`console.log(video[i].mime, video[i].title, video[i].isActive);`<br />`}}`<br />`);`<br /><br />Description:<br/><br />***This event is triggered right **after**  the playback ends. It returns a javascript object of `playlist` which contains the list of the recently played playlist videos. The object contains*** <br />`isActive: (Boolean), identifies which file is currently playing.`<br />`mime: (Video MimeTypes), the mime type of the video file`<br />`poster: (string) , the poster of the video file playing.`<br />`src: (string) ,the path to video file source`<br />`title: (string), the title of the video file`


### Who do I talk to? ###

* buttflattery@hotmail.com
* [Muhammad Omer Aslam](https://www.facebook.com/omer.aslam)
* admin@idowstech.com