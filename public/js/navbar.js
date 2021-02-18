let navBarMenu = document.getElementById('js-menu');

document.getElementById('hamburger-button').addEventListener('click', () => {
    // This code toggles the active class on the menu list.
    navBarMenu.classList.toggle('active');
});
