import React from 'react';
import PropTypes from 'prop-types';
import Template from '../layouts/Template';
import Menu from '../components/navigation/Menu';
import Body from '../components/Body';
import ContactForm from '../components/ContactForm';

export default function Contact(props) {
    return (
        <Template>
            <Menu path={props.location.pathname} />
            <Body className=" center-text body-font">
                <h1 className="title-font large-text">Contact</h1>
                <p>
                    If you&apos;d like to get in touch, please send me an email
                    using the form below.
                </p>
                <ContactForm />
            </Body>
        </Template>
    );
}

Contact.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired
};
