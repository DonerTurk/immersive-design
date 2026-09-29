AFRAME.registerComponent('interactief-object', {

    init: function () {

        let schelp = this.el;

        schelp.addEventListener('click', function () {

            // Geluid afspelen
            schelp.components.sound.playSound();

            // Schelp laten draaien
            schelp.setAttribute('animation', {
                property: 'rotation',
                from: '0 30 0',
                to: '0 390 0',
                dur: 1000
            });

        });

    }

});