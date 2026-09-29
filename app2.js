AFRAME.registerComponent('interactief-object', {
    init: function () {
        let schelp = this.el;

        schelp.addEventListener('click', function () {
            // Speel het geluid af
            schelp.components.sound.playSound();

            // Laat de schelp ronddraaien
            schelp.setAttribute('animation', {
                property: 'rotation',
                from: '-15 0 0',
                to: '-15 360 0',
                dur: 1000
            });
        });
    }
});
