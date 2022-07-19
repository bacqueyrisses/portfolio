// Hide classes when hovering buttons
document.querySelectorAll('.selector').forEach((button) => {
    button.addEventListener('mouseenter', (e) => {
        const filter = e.target.dataset.filter;
        document.querySelectorAll('.section:not(.' + filter + ')').forEach((contentToHide) => {
                contentToHide.style.opacity = 0.25;
            });
    });
    button.addEventListener('mouseleave', (e) => {
        const filter = e.target.dataset.filter;
        document.querySelectorAll('.section:not(.' + filter + ')').forEach((contentToHide) => {
                contentToHide.style.opacity = 1;
            });
    });
});

// Custom cursor when hovering skills
document.querySelectorAll('.skills').forEach(tech => {
    tech.addEventListener('mouseenter', e => {
        const cursor = e.target.dataset.cursor;
        document.body.style.cursor = 'url(' + window.location.href + cursor + ')';
        console.log('url(' + window.location.href + cursor + ')');
        let t = document.body.style.cursor
        console.log(t);
    })})