import React from 'react';
import SplashLayout from '../layouts/splash';
import SplashImage from '../components/splash/splashImage.js';
import Menu from '../components/menu.js';

class SplashPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            visibility: 'hidden'
        }
    }

    componentDidMount(){
        setTimeout(
            () => {
                this.setState({ visibility: 'visible' })
            },
            20
        )
    }

    render(){
        return (
            <div>
                <SplashLayout>
                    <SplashImage visiblity={this.state.visibility} />
                    <Menu path={this.props.location.pathname} visiblity={this.state.visibility} />
                </SplashLayout>
            </div>
        );
    }
}

export default SplashPage;