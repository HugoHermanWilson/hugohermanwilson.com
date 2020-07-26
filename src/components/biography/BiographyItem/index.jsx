/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0;
    margin-bottom: 0.5rem;
`;

const Title = styled.h5`
    margin: 0;
    display: inline-block;
    font-size: 1rem;
`;

const Opera = styled.h5`
    margin: 0;
    display: inline-block;
    margin-left: 0.5rem;
    font-style: italic;

    :before {
        content: '- ';
    }
`;

const Company = styled.h5`
    margin: 0;
    color: #ffffff80;
`;

const formattedRecitalName = unformattedRecitalName => {
    // addresses situations where a BiographyItem's name includes the piece of music!
    // omg the effort for this little edge case
    let recital = unformattedRecitalName;

    if (/((?=\w)_|_\b)/.test(recital)) {
        let tagChoice = true; // start with opening tag
        const tags = tagChoice ? '<em>' : '</em>';

        while (/((?=\w)_|_\b)/.test(recital)) {
            recital = recital.replace(/((?=\w)_|_\b)/, tags(tagChoice));
            tagChoice = !tagChoice;
        }
    }

    return recital;
};

const RecitalDetails = ({ index, frontmatter }) => (
    <Container id={`BiographyItem-recital-${index}`}>
        <Title>{formattedRecitalName(frontmatter.recital)}></Title>
        <Company>{frontmatter.company}</Company>
    </Container>
);

RecitalDetails.propTypes = {
    index: PropTypes.number.isRequired,
    frontmatter: PropTypes.shape({
        isOpera: PropTypes.bool,
        role: PropTypes.string.isRequired,
        opera: PropTypes.string.isRequired,
        isRecital: PropTypes.bool,
        recital: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired
    }).isRequired
};

const OperaDetails = ({ index, frontmatter }) => (
    <Container id={`BiographyItem-opera-${index}`}>
        <Title>{frontmatter.role}</Title>
        <Opera>{frontmatter.opera}</Opera>
        <Company>{frontmatter.company}</Company>
    </Container>
);

OperaDetails.propTypes = {
    index: PropTypes.number.isRequired,
    frontmatter: PropTypes.shape({
        isOpera: PropTypes.bool,
        role: PropTypes.string.isRequired,
        opera: PropTypes.string.isRequired,
        isRecital: PropTypes.bool,
        recital: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired
    }).isRequired
};

export default function BiographyItem(props) {
    const isOpera = () => {
        return !!props.data.frontmatter.isOpera;
    };

    const isRecital = () => {
        return !!props.data.frontmatter.isRecital;
    };

    if (isOpera(props)) {
        return (
            <OperaDetails
                index={props.index}
                frontmatter={props.data.frontmatter}
            />
        );
    }

    if (isRecital(props)) {
        return (
            <OperaDetails
                index={props.index}
                frontmatter={props.data.frontmatter}
            />
        );
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
