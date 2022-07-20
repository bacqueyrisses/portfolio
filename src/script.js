// Hide classes when hovering buttons

document.querySelectorAll('.selector').forEach((button) => {
    "mouseenter click".split(" ").forEach(mouseEvent =>
    button.addEventListener(mouseEvent, (e) => {
        const filter = e.target.dataset.filter;
        document.querySelectorAll('.section:not(.' + filter + ')').forEach((contentToHide) => {
                // if (window.getComputedStyle(button)['font-style'] === 'italic') {
                //     contentToHide.style.opacity = 1;
                // } else {
                //     contentToHide.style.opacity = 0.25;
                // }
                if (contentToHide.classList.contains('soft-hide')) {
                    contentToHide.classList.remove('soft-hide')
                } else {
                    contentToHide.classList.add('soft-hide')
                }
            });
    }));
    // button.addEventListener('mouseleave', (e) => {
    //     const filter = e.target.dataset.filter;
    //     document.querySelectorAll('.section:not(.' + filter + ')').forEach((contentToHide) => {
    //         contentToHide.classList.remove('soft-hide');
    //         });
    // });
});

