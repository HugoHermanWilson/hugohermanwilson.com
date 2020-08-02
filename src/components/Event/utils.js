import moment from 'moment';

moment().format();

const dateNumber = date => {
    if (/^\d{4}-\d{2}-\d{2}/.test(date)) {
        const dateNumberString = /(?<=-)\d{2}(?=T)/.exec(date)[0];
        if (dateNumberString[0] === '1' || dateNumberString[1] === '1') {
            return dateNumberString[0] + ' ' + dateNumberString[1]; // dealing with non monospaced font
        }
        return dateNumberString;
    }

    return '00';
};

const dateMonth = date => {
    const month = moment(date).format('MMM');
    return month === 'Invalid date' ? 'XXX' : month;
};

const dateYear = date => {
    const year = moment(date).format('YYYY');
    return year === 'Invalid date' ? 'XXXX' : year;
};

const dateString = date => {
    if (dateYear(date) !== `${new Date().getFullYear()}`) {
        const string = moment(date).format('h:mm a, ddd Do MMMM YYYY');
        return string;
    }

    const string = moment(date).format('h:mm a, ddd Do MMMM');
    return string;
};

export { dateNumber, dateMonth, dateYear, dateString };
