const dateNumber = date => {
    console.log(date);
    console.log(/^\d{4}-\d{2}-\d{2}/.test(date));
    if (/^\d{4}-\d{2}-\d{2}/.test(date)) {
        return /(?<=-)\d{2}(?=T)/.exec(date)[0];
    }

    return '00';
};

const dateMonth = date => {
    return 'AUG';
};

const dateString = date => {
    return 'date string';
};

export { dateNumber, dateMonth, dateString };
