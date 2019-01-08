// Animation Timeline
var animation = anime.timeline({
    loop: false
});

// Animations
animation
    .add({
        targets: '.logo',
        scale: [0, 1],
        easing: 'easeOutBack',
        duration: 500
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
        scale: .7,
        translateY: '-350px',
        delay: 500,
        duration: 500,
        easing: 'easeInOutQuad'
    })
    .add({
        targets: '.title',
        opacity: 1,
        translateY: '20px',
        duration: 200,
        delay: 100,
        easing: 'easeInOutQuad'
    })
    .add({
        targets: '.act',
        translateX: '280px',
        delay: function(el, i, l) {
            return i * 1000;
        },
        duration: 1000,
        easing: 'easeInOutQuad'
    });
  