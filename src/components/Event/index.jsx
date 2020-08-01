import React from 'react';
import PropTypes from 'prop-types';
import { dateNumber, dateMonth, dateString } from './utils';
import css from './index.module.css';

const Event = ({ slug, title, venue, date, html }) => {
    return (
        <div className={css.container} key={slug}>
            <h3 className={css.title}>{title}</h3>
            <div className={css.dateBlock}>
                <p className={css.dateNumber}>{dateNumber(date)}</p>
                <p className={css.dateMonth}>{dateMonth(date)}</p>
            </div>
            <p className={css.date}>{dateString(date)}</p>
            <p className={css.venue}>Venue: {venue}</p>
            <p
                dangerouslySetInnerHTML={{
                    __html: html
                }}
            />
        </div>
    );
};

export default Event;
