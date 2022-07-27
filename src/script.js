if (typeof window !== 'undefined') {

    // Prerequisites 

    let activeFilter = null;
    const filterNotApplicable = (mouseEvent) => {
        if (
            (window.screen.width > 640 && mouseEvent === 'click') ||
            (window.screen.width <= 640 &&
                ['mouseenter', 'mouseleave'].includes(mouseEvent))
        ) {
            return true;
        }
    };

    // Set activeFilter ifs

    document.querySelectorAll('.selector').forEach((selector) => {
        'mouseenter mouseleave click'.split(' ').forEach((mouseEvent) => {
            if (filterNotApplicable(mouseEvent)) {
                return;
            }

            selector.addEventListener(mouseEvent, (e) => {
                const filter = e.target.dataset.filter;

                // activeFilter ifs
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
                    return;
                }
            });
        });
    });

    // Functions

    const applyFilter = (filter) => {
        // Hide content
        const contentToHide = document.querySelectorAll(
            `.section:not(.${filter})`
        );
        contentToHide.forEach((content) => {
            content.classList.add('hide');
        });
        // Make the selector font-style go italic
        document.querySelector(`li[data-filter=${filter}]`).style.fontStyle =
            'italic';
        // activeFilter = filter
        return filter;
    };

    const removeFilter = (filter) => {
        // Reveal hidden content
        const contentToShow = document.querySelectorAll('.hide');
        contentToShow.forEach((content) => {
            content.classList.remove('hide');
        });
        // Make the selector font-style go normal
        document.querySelector(`li[data-filter=${filter}]`).style.fontStyle =
            'normal';
        // activeFilter = null
        return null;
    };
}
