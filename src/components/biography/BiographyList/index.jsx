import React from 'react';
// import PropTypes from 'prop-types';
import OperaDetails from '../OperaDetails';
import PerformanceDetails from '../PerformanceDetails';
import css from './index.module.css';

const BiographyList = props => {
    const listOfSoloDescriptions = () => {
        return props.solos.map(({ node }, index) => {
            if (props.type === 'opera') {
                // OPERAS
                return (
                    <OperaDetails
                        key={node.fields.slug}
                        data={node}
                        index={index + 1}
                    />
                );
            }

            if (props.type === 'recital' || props.type === 'oratorio') {
                // RECITALS & ORATORIOS
                return (
                    <PerformanceDetails
                        key={node.fields.slug}
                        data={node}
                        index={index + 1}
                    />
                );
            }
        });
    };

    const sectionHeader = () => {
        return props.title;
    };

    return (
        <div className={css.container}>
            <h3 className={`${css.sectionHeader} title-font`}>
                {sectionHeader()}
            </h3>
            {listOfSoloDescriptions()}
        </div>
    );
};

export default BiographyList;
