// Hide classes when hovering buttons

document.querySelectorAll('.selector').forEach((button) => {
    "mouseenter click".split(" ").forEach(mouseEvent =>
    button.addEventListener(mouseEvent, (e) => {
        const filter = e.target.dataset.filter;
        document.querySelectorAll('.section:not(.' + filter + ')').forEach((contentToHide) => {
                if (window.getComputedStyle(button)['font-style'] === 'italic') {
                    contentToHide.style.opacity = 1;
                } else {
                    contentToHide.style.opacity = 0.25;
                }
            });
    }));
    button.addEventListener('mouseleave', (e) => {
        const filter = e.target.dataset.filter;
        document.querySelectorAll('.section:not(.' + filter + ')').forEach((contentToHide) => {
                contentToHide.style.opacity = 1;
            });
    });
});

