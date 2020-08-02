import moment from 'moment';

const dateNumber = date => {
    if (/^\d{4}-\d{2}-\d{2}/.test(date)) {
        const dateNumberString = `${moment.utc(date).date()}`;

        if (dateNumberString[0] === '1' || dateNumberString[1] === '1') {
            return dateNumberString[0] + ' ' + dateNumberString[1]; // dealing with non monospaced font
        }
        return dateNumberString;
    }

    return '00';
};

const dateMonth = date => {
    const month = moment.utc(date).format('MMM');
    return month === 'Invalid date' ? 'XXX' : month;
};

const dateString = date => {
    const string = moment.utc(date).format('h:mm a, ddd Do MMMM');
    return string;
};

export { dateNumber, dateMonth, dateString };
