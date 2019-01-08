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
        translateY: '-320px',
        delay: 500,
        duration: 500,
        easing: 'easeInOutQuad'
    });
  