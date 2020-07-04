/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.css';

export default function BiographyItem(props) {
    const isOpera = () => {
        return !!props.data.frontmatter.isOpera;
    };

    const isRecital = () => {
        return !!props.data.frontmatter.isRecital;
    };

    const formattedRecitalName = () => {
        // addresses situations where a BiographyItem's name includes the piece of music!
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

    const operaDetails = () => {
        return (
            <div id={`BiographyItem-${props.index}`} className={css.container}>
                <h5 className={css.title}>{props.data.frontmatter.role}</h5>
                <p className={css.opera}>{props.data.frontmatter.opera}</p>
                <p className={css.company}>{props.data.frontmatter.company}</p>
            </div>
        );
    };

    const recitalDetails = () => {
        const recitalName = formattedRecitalName(props);

        return (
            <div id={`BiographyItem-${props.index}`} className={css.container}>
                <h5
                    className={css.title}
                    dangerouslySetInnerHTML={{
                        __html: recitalName
                    }}
                />
                <p className={css.company}>{props.data.frontmatter.company}</p>
            </div>
        );
    };

    if (isOpera(props)) {
        return operaDetails(props);
    }

    if (isRecital(props)) {
        return recitalDetails(props);
    }

    return <div id="bad-file" />;
}

BiographyItem.propTypes = {
    index: PropTypes.number.isRequired,
    data: PropTypes.shape({
        frontmatter: PropTypes.shape({
            isOpera: PropTypes.bool,
            role: PropTypes.string.isRequired,
            opera: PropTypes.string.isRequired,
            isRecital: PropTypes.bool,
            recital: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired
        }),
        fields: PropTypes.shape({
            slug: PropTypes.string.isRequired
        })
    }).isRequired
};
