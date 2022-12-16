// Add gesture behaviour for mobile version

let pageWidth = window.innerWidth || document.body.clientWidth;
let treshold = Math.max(1, Math.floor(0.01 * pageWidth));
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const mail = document.getElementById("mail");
const mail2 = document.getElementById("mail-2");
const mail3 = document.getElementById("mail-3");
let activeFilter = "mail";

const limit = Math.tan(((45 * 1.5) / 180) * Math.PI);
const gestureZone = document.body;

gestureZone.addEventListener(
    "touchstart",
    function (event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    },
    false
);

gestureZone.addEventListener(
    "touchend",
    function (event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture(event);
    },
    false
);

function handleGesture(e) {
    let x = touchendX - touchstartX;
    let y = touchendY - touchstartY;
    let xy = Math.abs(x / y);
    let yx = Math.abs(y / x);

    if (Math.abs(x) > treshold || Math.abs(y) > treshold) {
        if (yx <= limit) {
            if (x < 0) {
                console.log("left");
            } else {
                console.log("right");
            }
        }
        if (xy <= limit) {
            if (y < 0) {
                if (activeFilter === "mail") {
                    mail.classList.toggle("b-hidden");
                    mail3.classList.toggle("b-hidden");
                    return (activeFilter = "github");
                }

                if (activeFilter === "github") {
                    mail3.classList.toggle("b-hidden");
                    mail2.classList.toggle("b-hidden");
                    return (activeFilter = "linkedin");
                }

                if (activeFilter === "linkedin") {
                    mail2.classList.toggle("b-hidden");
                    mail.classList.toggle("b-hidden");
                    return (activeFilter = "mail");
                }
            } else {
                if (activeFilter === "mail") {
                    mail.classList.toggle("b-hidden");
                    mail2.classList.toggle("b-hidden");
                    return (activeFilter = "linkedin");
                }

                if (activeFilter === "linkedin") {
                    mail2.classList.toggle("b-hidden");
                    mail3.classList.toggle("b-hidden");
                    return (activeFilter = "github");
                }

                if (activeFilter === "github") {
                    mail3.classList.toggle("b-hidden");
                    mail.classList.toggle("b-hidden");
                    return (activeFilter = "mail");
                }
            }
        }
    } else {
        console.log("tap");
    }
}

// Add custom Safari 15 theme on dark mode change (not necessary with plain bg)
// const head = document.getElementsByTagName("head")[0];
// const meta = document.createElement("meta");
// meta.name = "theme-color";

// window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
//     const newColorScheme = event.matches ? (meta.content = "#282c34") : (meta.content = "#fbead1");
// });

// head.appendChild(meta);
