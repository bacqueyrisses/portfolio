// Hide classes when hovering buttons

document.querySelectorAll('.selector').forEach((button) => {
    "mouseenter click".split(" ").forEach(mouseEvent =>
    button.addEventListener(mouseEvent, (e) => {
        const filter = e.target.dataset.filter;
        document.querySelectorAll('.section:not(.' + filter + ')').forEach((contentToHide) => {

                contentToHide.classList.toggle('soft-hide')
                

            });
    }));
    button.addEventListener('mouseleave', (e) => {
        const filter = e.target.dataset.filter;
        document.querySelectorAll('.section:not(.' + filter + ')').forEach((contentToHide) => {
            contentToHide.classList.toggle('soft-hide')
        });
    });
});

