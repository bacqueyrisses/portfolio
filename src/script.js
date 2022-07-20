// Hide classes when hovering buttons

document.querySelectorAll('.selector').forEach((button) => {
    "mouseenter click".split(" ").forEach(mouseEvent =>
    button.addEventListener(mouseEvent, (e) => {
        const filter = e.target.dataset.filter;
        document.querySelectorAll('.section:not(.' + filter + ')').forEach((contentToHide) => {
        if ((window.screen.width <= 640) && (mouseEvent === 'click')) {
            contentToHide.classList.toggle('soft-hide')
            } else if (window.screen.width > 640) {
            contentToHide.classList.toggle('soft-hide')
            } else {
        return
    }

})}));

    button.addEventListener('mouseleave', (e) => {
        const filter = e.target.dataset.filter;
        if (window.screen.width > 640) {
        document.querySelectorAll('.section:not(.' + filter + ')').forEach((contentToHide) => {
            contentToHide.classList.remove('soft-hide');
            })};
    });
});

// Séparer mouseenter sur desktop et click sur desktop et mobile