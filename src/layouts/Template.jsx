import React from 'react';
import Head from '../components/Head';

class Template extends React.Component {
    render() {
        return (
            <div>
                <Head />
                {this.props.children}
            </div>
        );
    }
}

export default Template;
