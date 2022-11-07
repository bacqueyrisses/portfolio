let pageWidth = window.innerWidth || document.body.clientWidth;
let treshold = Math.max(1,Math.floor(0.01 * (pageWidth)));
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const limit = Math.tan(45 * 1.5 / 180 * Math.PI);
const gestureZone = document.body

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture(event);
}, false);

function handleGesture(e) {
    let x = touchendX - touchstartX;
    let y = touchendY - touchstartY;
    let xy = Math.abs(x / y);
    let yx = Math.abs(y / x);

    if (Math.abs(x) > treshold || Math.abs(y) > treshold) {
        if (yx <= limit) {
            if (x < 0) {
                alert("left");
            } else {
                alert("right");
            }
        }
        if (xy <= limit) {
            if (y < 0) {
                alert("top");
            } else {
                alert("bottom");
            }
        }
    } else {
        alert("tap");
    }
}


// let touchstartX = 0;
// let touchstartY = 0;
// let touchendX = 0;
// let touchendY = 0;
// let activeFilter = 'mail'
//
// const mail = document.getElementById('mail')
// const mail2 = document.getElementById('mail-2')
// const mail3 = document.getElementById('mail-3')
//
// const gestureZone = document.body;
//
// gestureZone.addEventListener('touchstart', function(event) {
//     touchstartX = event.changedTouches[0].screenX;
//     touchstartY = event.changedTouches[0].screenY;
// }, false);
//
// gestureZone.addEventListener('touchend', function(event) {
//     touchendX = event.changedTouches[0].screenX;
//     touchendY = event.changedTouches[0].screenY;
//     handleGesture();
// }, false);
//
// function handleGesture() {
//     if (touchendX < touchstartX) {
//         if (activeFilter === "mail") {
//             mail.classList.toggle('b-hidden')
//             mail2.classList.toggle('b-hidden')
//             return activeFilter = 'linkedin'
//         }
//
//         if (activeFilter === 'linkedin') {
//             mail2.classList.toggle('b-hidden')
//             mail3.classList.toggle('b-hidden')
//             return activeFilter = 'github'
//         }
//
//         if (activeFilter === 'github') {
//             mail3.classList.toggle('b-hidden')
//             mail.classList.toggle('b-hidden')
//             return activeFilter = 'mail'
//         }
//     }
//
//     if (touchendX > touchstartX) {
//         if (activeFilter === "mail") {
//             mail.classList.toggle('b-hidden')
//             mail3.classList.toggle('b-hidden')
//             return activeFilter = 'github'
//         }
//
//         if (activeFilter === 'github') {
//             mail3.classList.toggle('b-hidden')
//             mail2.classList.toggle('b-hidden')
//             return activeFilter = 'linkedin'
//         }
//
//         if (activeFilter === 'linkedin') {
//             mail2.classList.toggle('b-hidden')
//             mail.classList.toggle('b-hidden')
//             return activeFilter = 'mail'
//         }
//     }
    //
    // if (touchendY < touchstartY) {
    //     if (activeFilter === "one") {
    //         mail.classList.toggle('b-hidden')
    //         mail2.classList.toggle('b-hidden')
    //         return activeFilter = 'two'
    //     }
    //
    //     if (activeFilter === 'two') {
    //         mail2.classList.toggle('b-hidden')
    //         mail3.classList.toggle('b-hidden')
    //         return activeFilter = 'three'
    //     }
    //
    //     if (activeFilter === 'three') {
    //         mail3.classList.toggle('b-hidden')
    //         mail.classList.toggle('b-hidden')
    //         return activeFilter = 'one'
    //     }
    //
    // }
    //
    // if (touchendY > touchstartY) {
    //     if (activeFilter === "one") {
    //         mail.classList.toggle('b-hidden')
    //         mail2.classList.toggle('b-hidden')
    //         return activeFilter = 'two'
    //     }
    //
    //     if (activeFilter === 'two') {
    //         mail2.classList.toggle('b-hidden')
    //         mail3.classList.toggle('b-hidden')
    //         return activeFilter = 'three'
    //     }
    //
    //     if (activeFilter === 'three') {
    //         mail3.classList.toggle('b-hidden')
    //         mail.classList.toggle('b-hidden')
    //         return activeFilter = 'one'
    //     }
    //
    // }

    // if (touchendY === touchstartY) {
    //     console.log('Tap');
    //     alert('tap')
    //
    // }
// }




// if (typeof window !== 'undefined') {
//     // Prerequisites
//     let activeFilter = null;
//     const filterNotApplicable = mouseEvent => {
//         if (
//             (window.screen.width > 640 && mouseEvent === 'click') ||
//             (window.screen.width <= 640 && ['mouseenter', 'mouseleave'].includes(mouseEvent))
//         ) {
//             return true;
//         }
//     };
//
//     // Set activeFilter ifs
//     document.querySelectorAll('.selector').forEach(selector => {
//         'mouseenter mouseleave click'.split(' ').forEach(mouseEvent => {
//             if (filterNotApplicable(mouseEvent)) {
//                 return;
//             }
//
//             selector.addEventListener(mouseEvent, e => {
//                 const filter = e.target.dataset.filter;
//
//                 // activeFilter ifs
//                 if (activeFilter === null) {
//                     activeFilter = applyFilter(filter);
//                     return;
//                 }
//
//                 if (activeFilter === filter) {
//                     activeFilter = removeFilter(filter);
//                     return;
//                 }
//
//                 if (activeFilter !== null && activeFilter !== filter) {
//                     removeFilter(activeFilter);
//                     activeFilter = applyFilter(filter);
//                     return;
//                 }
//             });
//         });
//     });
//
//     // Functions
//     const applyFilter = filter => {
//         // Hide content
//         const contentToHide = document.querySelectorAll(`.section:not(.${filter})`);
//         contentToHide.forEach(content => {
//             content.classList.add('hide');
//         });
//         // Make the selector font-style go italic
//         document.querySelector(`li[data-filter=${filter}]`).style.fontStyle = 'italic';
//         // activeFilter = filter
//         return filter;
//     };
//
//     const removeFilter = filter => {
//         // Reveal hidden content
//         const contentToShow = document.querySelectorAll('.hide');
//         contentToShow.forEach(content => {
//             content.classList.remove('hide');
//         });
//         // Make the selector font-style go normal
//         document.querySelector(`li[data-filter=${filter}]`).style.fontStyle = 'normal';
//         // activeFilter = null
//         return null;
//     };
// }
//
//
//
