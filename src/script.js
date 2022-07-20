// Hide classes when hovering buttons

document.querySelectorAll('.selector').forEach((button) => {
    "mouseenter click".split(" ").forEach(mouseEvent =>
    button.addEventListener(mouseEvent, (e) => {
        const filter = e.target.dataset.filter;
        document.querySelectorAll('.section:not(.' + filter + ')').forEach((contentToHide) => {
                contentToHide.style.opacity = 0.25;
            });
    }));
    button.addEventListener('mouseleave', (e) => {
        const filter = e.target.dataset.filter;
        document.querySelectorAll('.section:not(.' + filter + ')').forEach((contentToHide) => {
                contentToHide.style.opacity = 1;
            });
    });
});

// Custom cursor when hovering skills
// document.querySelectorAll('.skills').forEach(tech => {
//     tech.addEventListener('mouseenter', e => {
//         const cursor = e.target.dataset.cursor;
//         document.body.style.cursor = cursor + " , auto";
//     })
//     tech.addEventListener('mouseleave', e => {
//         document.body.style.cursor = 'inherit';
// })});


