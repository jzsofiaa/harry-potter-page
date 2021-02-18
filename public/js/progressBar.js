const body = document.querySelector('body');
const progressBar = document.getElementById('progress-bar');

// this function increase/decrease the percentage of the element to stretch
window.onscroll = () => {
    const pixelScrolled = window.scrollY;   // returns the pixels the current document has been scrolled vertically
    const viewportHeight = window.innerHeight;   // returns the height of a window's content area.
    const bodyHeight = body.scrollHeight;   // returns the entire height of an element in pixels

    // convert pixels to percentage
    const pixelsToPercentage = (pixelScrolled / (bodyHeight - viewportHeight)) * 100;

    progressBar.style.width = `${pixelsToPercentage}%`;
};
