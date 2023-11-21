import { COLORS } from "./colors";
import { createElementByColor } from "./createElementByColor";

const mainEl = document.getElementById('main');
// const spanCollection = mainEl ? Array.from(mainEl.querySelectorAll<HTMLElement>('[data-color]')) : [];

mainEl?.appendChild(COLORS.reduce((fragment, color) => {
    fragment.appendChild(createElementByColor(color));
    return fragment;
}, document.createDocumentFragment()));

mainEl?.addEventListener('click', (event) => {
    const targetEl = event.target as HTMLElement;
    const coloredEl = targetEl.closest<HTMLElement>('[data-color]');

    if (coloredEl) {
        const colorValue = coloredEl.getAttribute('data-color');

        coloredEl.style.setProperty('background-color', colorValue);
    }
});


// spanCollection.forEach((spanEl) => {
//     const colorValue = spanEl.textContent;

//     if (colorValue) {
//         const paintBg = () => {
//             spanEl.style.setProperty('background-color', colorValue);

//             setTimeout(() => {
//                 spanEl.style.removeProperty('background-color')
//             }, 1_000);
//         };

//         spanEl.addEventListener('click', paintBg);
//     };
// });