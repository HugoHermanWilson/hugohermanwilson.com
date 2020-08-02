import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { dateNumber, dateMonth, dateYear, dateString } from './utils';
import css from './index.module.css';

const Event = ({ slug, title, venue, date, externalLink, html }) => {
    return (
        <div className={css.container} key={slug}>
            <div className={css.dateBlock}>
                <p className={css.dateNumber}>{dateNumber(date)}</p>
                <p className={css.dateMonth}>{dateMonth(date)}</p>
                {dateYear(date) !== `${new Date().getFullYear()}` ? (
                    <p className={css.dateYear}>{dateYear(date)}</p>
                ) : null}
            </div>
            <div className={css.detailsBlock}>
                {externalLink ? (
                    <a
                        className={css.externalLink}
                        href={externalLink}
                        target="_blank"
                    >
                        <Icon name="external alternate" />
                    </a>
                ) : null}
                <h3 className={css.title}>{title}</h3>
                <p className={css.venue}>{venue}</p>
                <p className={css.date}>{dateString(date)}</p>
                <p
                    dangerouslySetInnerHTML={{
                        __html: html
                    }}
                />
            </div>
        </div>
    );
};

export default Event;
