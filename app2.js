AFRAME.registerComponent('interactief-object', {

    init: function () {

        let schelp = this.el;

        schelp.addEventListener('click', function () {

            // Geluid opnieuw afspelen
            schelp.components.sound.stopSound();
            schelp.components.sound.playSound();

            // Oude animatie verwijderen
            schelp.removeAttribute('animation');

            // Animatie opnieuw starten
            setTimeout(function () {
                schelp.setAttribute('animation', {
                    property: 'rotation',
                    from: '0 30 0',
                    to: '0 390 0',
                    dur: 1000
                });
            }, 10);

        });

    }

});