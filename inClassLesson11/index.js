function t(string, data) {
    return string.replace(/{{(\w+)}}/g, (match, key) => {
        return Object.hasOwn(data, key) ? String(data[key]) : match;
    });
};

console.log(t(`Нужно заменить это число {{count}}.`, { count: 6 }))