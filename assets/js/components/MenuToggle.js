class MenuToggle {
    constructor (toggle) {
        if (typeof toggle === 'undefined') {
            return;
        }

        this.toggles = document.querySelectorAll(toggle);

        this.toggles.forEach(toggle => {
            toggle.addEventListener('click', this.toggleMenu);
        });
    }

    toggleMenu (e) {
        e.preventDefault();

        let
            toggle = e.target,
            menuSel = toggle.dataset.menu
        ;

        if (typeof menuSel === 'undefined') {
            return;
        }

        const menu = document.querySelector(menuSel);

        if (typeof menu === 'undefined') {
            return;
        }

        menu.classList.toggle('menu-open', !menu.classList.contains('menu-open'));
    }
}

window.addEventListener('load', function () {
    new MenuToggle('.menu-toggle');
});
