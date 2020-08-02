import React from 'react';
import { Icon } from 'semantic-ui-react';
import css from './index.module.css';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleInputChange = event => {
        const field = event.target.name;
        this.setState({
            [field]: event.target.value
        });
    };

    render() {
        return (
            <form
                id="ContactForm"
                className={css.container}
                name="contact"
                method="POST"
                encType="application/x-www-form-urlencoded"
                data-netlify="true"
            >
                <input type="hidden" name="form-name" value="contact" />

                <label className={css.label} htmlFor="contact-form-name">
                    Your Name:{' '}
                </label>
                <input
                    id="contact-form-name"
                    className={css.field}
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    required
                />
                <label className={css.label} htmlFor="contact-form-email">
                    Your Email:{' '}
                </label>
                <input
                    id="contact-form-email"
                    className={css.field}
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                />

                <label className={css.label} htmlFor="contact-form-message">
                    Message:{' '}
                </label>
                <textarea
                    id="contact-form-message"
                    className={css.field}
                    name="message"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    required
                />
                <button className={css.button} type="submit">
                    <Icon name="paper plane outline" />
                    <p className={css.send}>Send</p>
                </button>
            </form>
        );
    }
}

export default ContactForm;
