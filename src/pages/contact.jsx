import React from 'react';
import PropTypes from 'prop-types';
import Template from '../layouts/Template';
import Menu from '../components/Menu';
import Body from '../components/Body';
import ContactForm from '../components/ContactForm';

export default function Contact(props) {
    return (
        <div>
            <Template>
                <Menu path={props.location.pathname} />
                <Body className="white center-text body-font">
                    <h1 className="title-font large-text">Contact</h1>
                    <p>
                        If you&apos;d like to get in touch, please send me an
                        email using the form below.
                    </p>
                    <ContactForm />
                </Body>
            </Template>
        </div>
    );
}

Contact.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired
};
