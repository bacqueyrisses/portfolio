if (typeof window !== 'undefined') {

    let activeFilter = null

    const filterNotApplicable = () => {
        if (
            window.screen.width <= 640 && mouseEvent === 'click' 
            ||
            window.screen.width > 640 && [mouseleave, mouseenter].includes(mouseEvent)
        ) {
            return true
        }
    }

    // Set activeFilter ifs
    document.querySelectorAll('.selector').forEach(selector => {

        'click mouseenter mouseleave'.split(' ').forEach(mouseEvent => {
            selector.addEventListener(mouseEvent, e => {
                const filter = e.target.dataset.filter

                if (activeFilter === null) {
                    activeFilter = applyFilter(filter)
                    return
                }

                if (activeFilter === filter) {
                    activeFilter = removeFilter(filter)
                    return
                }

                if (activeFilter !== null && activeFilter !== filter) {
                    removeFilter(activeFilter) 
                    activeFilter = applyFilter(filter)
                    return
                }
            })
        })
    })

    // Functions
    const applyFilter = filter => {
        document.querySelectorAll(`.section:not(.${filter})`).forEach(contentToHide => contentToHide.classList.add('hide'))
    }

    const removeFilter = filter => {
        document.querySelectorAll('.hide').forEach(contentToShow => contentToShow.classList.remove('hide'))
    }



}
