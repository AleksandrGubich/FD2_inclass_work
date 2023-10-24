function delay(period) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, period);
    });
};

delay(300).then(() => {
    console.log('all is ok');
});