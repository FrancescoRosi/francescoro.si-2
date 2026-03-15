if (matchMedia("(pointer:fine)").matches) {
    window.addEventListener("mousemove", e => {
        const cursor = document.querySelector("#cursor");
    
        cursor.animate({
            left: `${e.clientX - 12}px`,
            top: `${e.clientY - 12}px`,
            transform: `rotate(${67.5 - Math.round(90 * (e.clientX / window.innerWidth))}deg)`,
            marginLeft: `calc(12px - ${24 - (Math.round(24 * (e.clientX / window.innerWidth)))}px)`
        }, {
            duration: 100,
            fill: "forwards"
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".link > div").forEach(el => {
        if (window.matchMedia("(min-height: 100vw)").matches) el.style.cssText = `--height: ${el.querySelector(".project-info").scrollHeight / 2}px;`;
        else el.style.cssText = `--height: ${el.scrollHeight}px;`;
    });
});
document.querySelectorAll(".link a").forEach(el => el.addEventListener("click", () => el.parentElement.classList.toggle("active")));

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
};
const backgrounds = ["aquamarine", "bisque", "blanchedalmond", "brown", "burlywood", "cadetblue", "chocolate", "coral", "cornflowerblue", "darkcyan", "darkorchid", "darksalmon", "darkslateblue", "darkslategray", "dodgerblue", "firebrick", "goldenrod", "hotpink", "indianred", "lightblue", "lightcoral", "lightgreen", "lightpink", "lightsalmon", "lightskyblue", "lightslategray", "mediumaquamarine", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumturquoise", "midnightblue", "orchid", "palevioletred", "peru", "plum", "rebeccapurple", "rosybrown", "royalblue", "salmon", "sandybrown", "seagreen", "sienna", "slateblue", "slategray", "steelblue", "teal", "tomato", "violet", "yellowgreen"];

window.addEventListener("click", e => {
    if (((!window.matchMedia("(min-height: 100vw)").matches && e.clientY < document.querySelector("#content").getBoundingClientRect().y) || (window.matchMedia("(min-height: 100vw)").matches && e.clientY < window.innerWidth * 0.0940625)) && [document.querySelector("main"), document.querySelector("#work"), document.querySelector("#content")].includes(e.target)) {
        document.querySelector("#logo").animate([{
            transform: "scale(1)"
        }, {
            transform: "scale(0.95)",
            filter: "blur(5px)"
        }], {
            duration: 100,
            fill: "forwards"
        });
        setTimeout(() => {
            document.documentElement.style.setProperty("--background", backgrounds[getRandomInt(0, backgrounds.length - 1)]);
            document.querySelector("#logo").animate([{
                transform: "scale(0.95)",
                filter: "blur(5px)"
            }, {
                transform: "scale(1)",
                filter: "blur(0)"
            }], {
                duration: 500,
                easing: "ease-in-out",
                fill: "forwards"
            });
        }, 100);
    };
});