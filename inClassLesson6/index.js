// // Таймаут
// const timerId = setTimeout(() => {
//     console.log(5);
// }, 5_000);

// setTimeout(() => {
//     clearTimeout(timerId);
//     console.log('clear Timeout');
//     setTimeout(() => {
//         console.log('clear Interval');
//         clearInterval(intervalId);
//     }, 3_000);
// }, 3_000);


// // Интервал
// let s = 0;

// const intervalId = setInterval(() => {
//     console.log(++s);
// }, 1_000);


// // Задача на подумать 1
// function scheduleTask(task) {
//     const id = setTimeout(() => task(), 300);

//     return () => clearTimeout(id);
// }

// const cancelTask = scheduleTask(() => {
//     console.log('task');
// });

// cancelTask();


// Request animation frame
function renderCycle(callback) {
    const idRef = {id: 0};
    const render = () => { 
        idRef.id = requestAnimationFrame(() => {
            callback();
            render();
        });
    };

    render();

    return () => cancelAnimationFrame(idRef.id);
}

// const stop = renderCycle(() => {

// });

let v = 0;
const stop = renderCycle (() => {
    document.body.textContent = String(++v);
})