$(document).ready(function () {
    $("#my-video").idowsVideowall({
        wallType: 'carousel',
        onBeforePlayback: function (e) {
            console.log(e);
        },
        onBeforePrev: function (params) {
            console.log(params);
        },
        onAfterPrev: function (params) {
            console.log(params);
        },
        onAfterNext: function (params) {
            console.log(params);
        },
        onBeforeNext: function (params) {
            console.log(params);
        },
        videos: [{
            src: 'video-uploads/jaan-jatti.mp4',
            poster: 'video-uploads/posters/playlist-1.jpg',
            mime: 'video/mp4',
            title: 'Sweet Sexy Savage'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }]
    }).on('onBeforeNext', function (e, params) {
        console.log(e, params);
    });
    $("#my-video-2").idowsVideowall({
        wallType: 'thumb',
        videos: [{
            src: 'video-uploads/jaan-jatti.mp4',
            poster: 'video-uploads/posters/1.jpg',
            mime: 'video/mp4',
            title: 'Video 1'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Video 2'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Video 3'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Video 4'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Video 5'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Video 6'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Video 7'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Video 8'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Video 9'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Video 10'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Video 11'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Video 12'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/jaan-jatti.mp4',
            poster: 'video-uploads/posters/1.jpg',
            mime: 'video/mp4',
            title: 'Jaan Jatti'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/jaan-jatti.mp4',
            poster: 'video-uploads/posters/1.jpg',
            mime: 'video/mp4',
            title: 'Jaan Jatti'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/jaan-jatti.mp4',
            poster: 'video-uploads/posters/1.jpg',
            mime: 'video/mp4',
            title: 'Jaan Jatti'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/jaan-jatti.mp4',
            poster: 'video-uploads/posters/1.jpg',
            mime: 'video/mp4',
            title: 'Jaan Jatti'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/jaan-jatti.mp4',
            poster: 'video-uploads/posters/1.jpg',
            mime: 'video/mp4',
            title: 'Jaan Jatti'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/jaan-jatti.mp4',
            poster: 'video-uploads/posters/1.jpg',
            mime: 'video/mp4',
            title: 'Jaan Jatti'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/jaan-jatti.mp4',
            poster: 'video-uploads/posters/1.jpg',
            mime: 'video/mp4',
            title: 'Jaan Jatti'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/jaan-jatti.mp4',
            poster: 'video-uploads/posters/1.jpg',
            mime: 'video/mp4',
            title: 'Jaan Jatti'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/jaan-jatti.mp4',
            poster: 'video-uploads/posters/1.jpg',
            mime: 'video/mp4',
            title: 'Jaan Jatti'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }, {
            src: 'video-uploads/mera-jehan.mp4',
            poster: 'video-uploads/posters/2.jpg',
            mime: 'video/mp4',
            title: 'Mera Jehan'
        }, {
            src: 'video-uploads/mitran-de-boot.mp4',
            poster: 'video-uploads/posters/3.jpg',
            mime: 'video/mp4',
            title: 'Mitran de boot'
        }, {
            src: 'video-uploads/mutiyar.mp4',
            poster: 'video-uploads/posters/4.jpg',
            mime: 'video/mp4',
            title: 'Mutiyar'
        }, {
            src: 'video-uploads/raashi-sood.mp4',
            poster: 'video-uploads/posters/5.jpg',
            mime: 'video/mp4',
            title: 'Raashi Sood'
        }]
    });
    $("#my-video-3").idowsVideowall({
        wallType: 'playlist',
        // onPlaylistStart: (params) => {
        //     console.log(params);
        // },
        // onBeforePlayback: function (e) {
        //     console.log(e);
        // },
        // onBeforePrev: function (params) {
        //     console.log(params);
        // },
        // onAfterPrev: function (params) {
        //     console.log(params);
        // },
        // onAfterNext: function (params) {
        //     console.log(params);
        // },
        // onBeforeNext: function (params) {
        //     console.log(params);
        // },
        playlists: [{
            name: 'Sweet Sexy Savage',
            cover: 'video-uploads/posters/playlist-1.jpg',
            videos: [{
                src: 'video-uploads/jaan-jatti.mp4',
                poster: 'video-uploads/posters/1.jpg',
                mime: 'video/mp4',
                title: 'Track 1'
            }, {
                src: 'video-uploads/mera-jehan.mp4',
                poster: 'video-uploads/posters/2.jpg',
                mime: 'video/mp4',
                title: 'Track 2'
            }, {
                src: 'video-uploads/mitran-de-boot.mp4',
                poster: 'video-uploads/posters/3.jpg',
                mime: 'video/mp4',
                title: 'Track 3'
            }, {
                src: 'video-uploads/mutiyar.mp4',
                poster: 'video-uploads/posters/4.jpg',
                mime: 'video/mp4',
                title: 'Track 4'
            }]
        }, {
            name: 'Bohemia',
            cover: 'video-uploads/posters/playlist-2.jpg',
            videos: [{
                src: 'video-uploads/jaan-jatti.mp4',
                poster: 'video-uploads/posters/1.jpg',
                mime: 'video/mp4',
                title: 'Jaan Jatti'
            }, {
                src: 'video-uploads/mera-jehan.mp4',
                poster: 'video-uploads/posters/2.jpg',
                mime: 'video/mp4',
                title: 'Mera Jehan'
            }, {
                src: 'video-uploads/mitran-de-boot.mp4',
                poster: 'video-uploads/posters/3.jpg',
                mime: 'video/mp4',
                title: 'Mitran de boot'
            }, {
                src: 'video-uploads/mutiyar.mp4',
                poster: 'video-uploads/posters/4.jpg',
                mime: 'video/mp4',
                title: 'Mutiyar'
            }]
        }, {
            name: 'Beetles',
            cover: 'video-uploads/posters/playlist-3.jpg',
            videos: [{
                src: 'video-uploads/jaan-jatti.mp4',
                poster: 'video-uploads/posters/1.jpg',
                mime: 'video/mp4',
                title: 'Jaan Jatti'
            }, {
                src: 'video-uploads/mera-jehan.mp4',
                poster: 'video-uploads/posters/2.jpg',
                mime: 'video/mp4',
                title: 'Mera Jehan'
            }, {
                src: 'video-uploads/mitran-de-boot.mp4',
                poster: 'video-uploads/posters/3.jpg',
                mime: 'video/mp4',
                title: 'Mitran de boot'
            }, {
                src: 'video-uploads/mutiyar.mp4',
                poster: 'video-uploads/posters/4.jpg',
                mime: 'video/mp4',
                title: 'Mutiyar'
            }]
        }, {
            name: 'Jazz',
            cover: 'video-uploads/posters/playlist-4.jpg',
            videos: [{
                src: 'video-uploads/jaan-jatti.mp4',
                poster: 'video-uploads/posters/1.jpg',
                mime: 'video/mp4',
                title: 'Jaan Jatti'
            }, {
                src: 'video-uploads/mera-jehan.mp4',
                poster: 'video-uploads/posters/2.jpg',
                mime: 'video/mp4',
                title: 'Mera Jehan'
            }, {
                src: 'video-uploads/mitran-de-boot.mp4',
                poster: 'video-uploads/posters/3.jpg',
                mime: 'video/mp4',
                title: 'Mitran de boot'
            }, {
                src: 'video-uploads/mutiyar.mp4',
                poster: 'video-uploads/posters/4.jpg',
                mime: 'video/mp4',
                title: 'Mutiyar'
            }]
        }, {
            name: 'Red Necks',
            cover: 'video-uploads/posters/playlist-5.jpg',
            videos: [{
                src: 'video-uploads/jaan-jatti.mp4',
                poster: 'video-uploads/posters/1.jpg',
                mime: 'video/mp4',
                title: 'Jaan Jatti'
            }, {
                src: 'video-uploads/mera-jehan.mp4',
                poster: 'video-uploads/posters/2.jpg',
                mime: 'video/mp4',
                title: 'Mera Jehan'
            }, {
                src: 'video-uploads/mitran-de-boot.mp4',
                poster: 'video-uploads/posters/3.jpg',
                mime: 'video/mp4',
                title: 'Mitran de boot'
            }, {
                src: 'video-uploads/mutiyar.mp4',
                poster: 'video-uploads/posters/4.jpg',
                mime: 'video/mp4',
                title: 'Mutiyar'
            }]
        }, {
            name: 'Bhangra Mix Feat MNM',
            cover: 'video-uploads/posters/playlist-6.jpg',
            videos: [{
                src: 'video-uploads/jaan-jatti.mp4',
                poster: 'video-uploads/posters/1.jpg',
                mime: 'video/mp4',
                title: 'Jaan Jatti'
            }, {
                src: 'video-uploads/mera-jehan.mp4',
                poster: 'video-uploads/posters/2.jpg',
                mime: 'video/mp4',
                title: 'Mera Jehan'
            }, {
                src: 'video-uploads/mitran-de-boot.mp4',
                poster: 'video-uploads/posters/3.jpg',
                mime: 'video/mp4',
                title: 'Mitran de boot'
            }, {
                src: 'video-uploads/mutiyar.mp4',
                poster: 'video-uploads/posters/4.jpg',
                mime: 'video/mp4',
                title: 'Mutiyar'
            }]
        }, {
            name: 'Bhangra Mix Feat MNM',
            cover: 'video-uploads/posters/playlist-6.jpg',
            videos: [{
                src: 'video-uploads/jaan-jatti.mp4',
                poster: 'video-uploads/posters/1.jpg',
                mime: 'video/mp4',
                title: 'Jaan Jatti'
            }, {
                src: 'video-uploads/mera-jehan.mp4',
                poster: 'video-uploads/posters/2.jpg',
                mime: 'video/mp4',
                title: 'Mera Jehan'
            }, {
                src: 'video-uploads/mitran-de-boot.mp4',
                poster: 'video-uploads/posters/3.jpg',
                mime: 'video/mp4',
                title: 'Mitran de boot'
            }, {
                src: 'video-uploads/mutiyar.mp4',
                poster: 'video-uploads/posters/4.jpg',
                mime: 'video/mp4',
                title: 'Mutiyar'
            }]
        }, {
            name: 'Bhangra Mix Feat MNM',
            cover: 'video-uploads/posters/playlist-6.jpg',
            videos: [{
                src: 'video-uploads/jaan-jatti.mp4',
                poster: 'video-uploads/posters/1.jpg',
                mime: 'video/mp4',
                title: 'Jaan Jatti'
            }, {
                src: 'video-uploads/mera-jehan.mp4',
                poster: 'video-uploads/posters/2.jpg',
                mime: 'video/mp4',
                title: 'Mera Jehan'
            }, {
                src: 'video-uploads/mitran-de-boot.mp4',
                poster: 'video-uploads/posters/3.jpg',
                mime: 'video/mp4',
                title: 'Mitran de boot'
            }, {
                src: 'video-uploads/mutiyar.mp4',
                poster: 'video-uploads/posters/4.jpg',
                mime: 'video/mp4',
                title: 'Mutiyar'
            }]
        }, {
            name: 'Bhangra Mix Feat MNM',
            cover: 'video-uploads/posters/playlist-6.jpg',
            videos: [{
                src: 'video-uploads/jaan-jatti.mp4',
                poster: 'video-uploads/posters/1.jpg',
                mime: 'video/mp4',
                title: 'Jaan Jatti'
            }, {
                src: 'video-uploads/mera-jehan.mp4',
                poster: 'video-uploads/posters/2.jpg',
                mime: 'video/mp4',
                title: 'Mera Jehan'
            }, {
                src: 'video-uploads/mitran-de-boot.mp4',
                poster: 'video-uploads/posters/3.jpg',
                mime: 'video/mp4',
                title: 'Mitran de boot'
            }, {
                src: 'video-uploads/mutiyar.mp4',
                poster: 'video-uploads/posters/4.jpg',
                mime: 'video/mp4',
                title: 'Mutiyar'
            }]
        }, {
            name: 'Bhangra Mix Feat MNM',
            cover: 'video-uploads/posters/playlist-6.jpg',
            videos: [{
                src: 'video-uploads/jaan-jatti.mp4',
                poster: 'video-uploads/posters/1.jpg',
                mime: 'video/mp4',
                title: 'Jaan Jatti'
            }, {
                src: 'video-uploads/mera-jehan.mp4',
                poster: 'video-uploads/posters/2.jpg',
                mime: 'video/mp4',
                title: 'Mera Jehan'
            }, {
                src: 'video-uploads/mitran-de-boot.mp4',
                poster: 'video-uploads/posters/3.jpg',
                mime: 'video/mp4',
                title: 'Mitran de boot'
            }, {
                src: 'video-uploads/mutiyar.mp4',
                poster: 'video-uploads/posters/4.jpg',
                mime: 'video/mp4',
                title: 'Mutiyar'
            }]
        }, ]
    }).on('onPlaylistStart', function (event, data) {
        for (var i in data.playlist) {
            let video = data.playlist;
            console.log(video[i].mime, video[i].title, video[i].isActive);
        }
    })
});