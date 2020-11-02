/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.css';

export default function PerformanceDetails(props) {
    const isRecital = () => {
        return !!props.data.frontmatter.isRecital;
    };

    const isOratorio = () => {
        return !!props.data.frontmatter.isOratorio;
    };

    const formattedName = () => {
        // addresses situations where name includes the piece of music - needs to be italicised
        // omg the effort for this little edge case
        let recital = props.data.frontmatter.recital;

        if (/((?=\w)_|_\b)/.test(props.data.frontmatter.recital)) {
            const tags = choice => {
                return choice ? '<em>' : '</em>';
            };
            let tagChoice = true; // start with opening tag
            while (/((?=\w)_|_\b)/.test(recital)) {
                recital = recital.replace(/((?=\w)_|_\b)/, tags(tagChoice));
                tagChoice = !tagChoice;
            }
        }

        return recital;
    };

    if (isRecital(props) || isOratorio(props)) {
        const nameHTML = formattedName(props);

        return (
            <div
                id={`BiographyItem-recital-${props.index}`}
                className={css.container}
            >
                <h5
                    className={css.title}
                    dangerouslySetInnerHTML={{
                        __html: nameHTML
                    }}
                />
                <p className={css.company}>{props.data.frontmatter.company}</p>
            </div>
        );
    }

    return null; // bad data
}

PerformanceDetails.propTypes = {
    index: PropTypes.number.isRequired,
    data: PropTypes.shape({
        frontmatter: PropTypes.shape({
            isRecital: PropTypes.bool,
            isOratorio: PropTypes.bool,
            recital: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired
        }),
        fields: PropTypes.shape({
            slug: PropTypes.string.isRequired
        })
    }).isRequired
};
