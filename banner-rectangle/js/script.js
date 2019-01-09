// timeline
var animation = anime.timeline({
    loop: true
});

// animations
animation
    // logo
    .add({
        targets: '.logo',
        scale: [0, 1],
        easing: 'easeOutBack',
        duration: 500,
        delay: 200
    })
    .add({
        targets: '.logo .wing',
        opacity: 1,
        rotate: ['-10deg', '0deg'],
        delay: function(el, i, l) {
            return i * 100;
        },
        duration: 200,
        easing: 'easeInOutQuad'
    })
    .add({
        targets: '.logo',
        scale: .5,
        translateY: '-200px',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuad'
    })
    // url
    .add({
        targets: '.url',
        translateY: '-10px',
        opacity: 1,
        duration: 100,
        offset: '-=200',
        easing: 'easeInOutQuad'
    })
    // title
    .add({
        targets: '.title',
        opacity: 1,
        translateY: '20px',
        duration: 200,
        delay: 300,
        easing: 'easeInOutQuad'
    })
    // overlay
    .add({
        targets: '.overlay',
        translateY: '-300%',
        delay: 2000,
        duration: 1000,
        easing: 'easeInOutQuad'
    })
    // remove stuff
    .add({
        targets: '.title',
        opacity: 0,
        duration: 10,
        easing: 'linear',
        offset: '-=600'
    })
    // locations
    .add({
        targets: '.location .city',
        translateY: [
            { value: '10px', duration: 200 },
            { value: '30px', duration: 1000 },
            { value: '50px', duration: 200 }
        ],
        opacity: [
            { value: 1, duration: 200 },
            { value: 0, duration: 200, delay: 1000 },
        ],
        delay: function(el, i, l) {
            return i * 2000;
        },
        offset: '+=500',
        duration: 2000,
        easing: 'linear'
    })
    .add({
        targets: '.location .country',
        translateY: [
            { value: '-10px', duration: 200 },
            { value: '-30px', duration: 1000 },
            { value: '-50px', duration: 200 }
        ],
        opacity: [
            { value: 1, duration: 200 },
            { value: 0, duration: 200, delay: 1000 },
        ],
        delay: function(el, i, l) {
            return i * 2000;
        },
        offset: '-=5400',
        duration: 2000,
        easing: 'linear'
    })
    // date
    .add({
        targets: '.date',
        opacity: 1,
        translateY: '20px',
        duration: 200,
        delay: 800,
        easing: 'easeInOutQuad'
    })
    // cta
    .add({
        targets: '.cta',
        opacity: 1,
        translateY: '20px',
        duration: 200,
        delay: 100,
        easing: 'easeInOutQuad'
    })
    .add({
        targets: '.cta',
        scale: [1, 1.3, .8, 1],
        translateY: [0, 0],
        duration: 600,
        easing: 'easeInOutQuad',
        delay: 2000 
    })
    // overlay
    .add({
        targets: '.overlay',
        translateY: '0',
        delay: 2000,
        duration: 1000,
        easing: 'easeInOutQuad'
    })
    // remove stuff
    .add({
        targets: ['.logo', '.date', '.cta', '.url'],
        opacity: 0,
        duration: 10,
        offset: '-=500',
        easing: 'linear'
    });

// animation
//     // logo
//     .add({
//         targets: '.logo',
//         scale: [0, 1],
//         easing: 'easeOutBack',
//         duration: 500,
//         delay: 200
//     })
//     .add({
//         targets: '.logo .wing',
//         opacity: 1,
//         rotate: ['-10deg', '0deg'],
//         delay: function(el, i, l) {
//             return i * 100;
//         },
//         duration: 200,
//         easing: 'easeInOutQuad'
//     })
//     .add({
//         targets: '.logo',
//         scale: .7,
//         translateY: '-350px',
//         delay: 500,
//         duration: 500,
//         easing: 'easeInOutQuad'
//     })
//     // url
//     .add({
//         targets: '.url',
//         translateY: '-20px',
//         opacity: 1,
//         duration: 200,
//         offset: '-=300',
//         easing: 'easeInOutQuad'
//     })
//     // title
//     .add({
//         targets: '.title',
//         opacity: 1,
//         translateY: '20px',
//         duration: 200,
//         delay: 300,
//         easing: 'easeInOutQuad'
//     })
//     // acts
//     .add({
//         targets: '.act',
//         translateX: '310px',
//         delay: function(el, i, l) {
//             return i * 1400;
//         },
//         offset: '+=500',
//         duration: 1400,
//         easing: [0,.7,1,.3]
//     })
//     // overlay
//     .add({
//         targets: '.overlay',
//         translateX: '300%',
//         delay: 200,
//         duration: 1000,
//         easing: 'easeInOutQuad'
//     })
//     // remove stuff
//     .add({
//         targets: '.title',
//         opacity: 0,
//         duration: 10,
//         easing: 'linear',
//         offset: '-=600'
//     })
//     // date
//     .add({
//         targets: '.date',
//         opacity: 1,
//         translateY: '20px',
//         duration: 200,
//         delay: 300,
//         easing: 'easeInOutQuad'
//     })
//     // cta
//     .add({
//         targets: '.cta',
//         opacity: 1,
//         translateY: '-20px',
//         duration: 200,
//         delay: 100,
//         easing: 'easeInOutQuad'
//     })
//     .add({
//         targets: '.cta',
//         scale: [1, 1.3, .8, 1],
//         translateY: [0, 0],
//         duration: 600,
//         easing: 'easeInOutQuad',
//         delay: 2000 
//     })
//     // overlay
//     .add({
//         targets: '.overlay',
//         translateX: '0',
//         delay: 2000,
//         duration: 1000,
//         easing: 'easeInOutQuad'
//     })
//     // remove stuff
//     .add({
//         targets: ['.logo', '.date', '.cta', '.url'],
//         opacity: 0,
//         duration: 10,
//         offset: '-=500',
//         easing: 'linear'
//     });
  