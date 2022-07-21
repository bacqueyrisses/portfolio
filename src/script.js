// Hide classes when hovering buttons
if (typeof window !== 'undefined') {
    let activeFilter = null;
    const filterNotApplicable = (mouseEvent) =>
        ((window.screen.width > 640 && mouseEvent === 'click') ||
        (window.screen.width <= 640 &&
            ['mouseenter', 'mouseleave'].includes(mouseEvent)));

    document.querySelectorAll('.selector').forEach((button) => {
        'mouseenter click mouseleave'.split(' ').forEach((mouseEvent) =>
            button.addEventListener(mouseEvent, (e) => {
                if (filterNotApplicable(mouseEvent)) {
                    return;
                }

                const filter = e.target.dataset.filter;

                if (mouseEvent === 'mouseleave') {
                    activeFilter = removeFilter(filter)
                    return
                }


                if (activeFilter === null) {
                    activeFilter = applyFilter(filter);
                    return;
                }

                if (activeFilter === filter) {
                    activeFilter = removeFilter(filter);
                    return;
                }


                if (activeFilter !== null && activeFilter !== filter) {
                    removeFilter(activeFilter);
                    activeFilter = applyFilter(filter);
                }

            })
        );
    });
}

const applyFilter = (filter) => {
    const contentsToHide = document.querySelectorAll(
        '.section:not(.' + filter + ')'
    );
    contentsToHide.forEach((contentToHide) => {
        contentToHide.classList.add('bye');
    });

    return filter;
};

const removeFilter = (filter) => {
    const contentsToShow = document.querySelectorAll('.bye');
    contentsToShow.forEach((contentToShow) => {
        contentToShow.classList.remove('bye');
    });

    // const activeButton = document.querySelector(`li[data-filter=${filter}]`)
    // activeButton.

    return null;
};





