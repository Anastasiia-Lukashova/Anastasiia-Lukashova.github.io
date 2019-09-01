document.getElementsByClassName('navbar-toggler')[0].onclick = function () {
    this.classList.toggle('navbar-toggler_opened');
    document.getElementsByClassName('navbar-menu')[0].classList.toggle('navbar-menu_openedBurg');
};