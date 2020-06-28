import React from 'react';
import SplashLayout from '../layouts/SplashLayout';
import SplashImage from '../components/splash/SplashImage';
import Menu from '../components/Menu';

class SplashPage extends React.Component {
    constructor(props) {
        super(props);
        this.menuRef = React.createRef();
        this.state = {
            visibility: 'hidden',
            imageHeight: '80vh'
        };
    }

    componentDidMount() {
        this.calculateSplashImageHeight();
        setTimeout(() => {
            this.setState({ visibility: 'visible' });
        }, 20);
    }

    calculateSplashImageHeight = () => {
        if (window) {
            const menuHeight = this.menuRef.current.clientHeight;
            const splashImageHeight = window.visualViewport.height - menuHeight;
            this.setState({ imageHeight: `${splashImageHeight}px` });
        }
    };

    render() {
        return (
            <div>
                <SplashLayout>
                    <Menu
                        path={this.props.location.pathname}
                        visiblity={this.state.visibility}
                        menuRef={this.menuRef}
                    />
                    <SplashImage
                        visiblity={this.state.visibility}
                        height={this.state.imageHeight}
                    />
                </SplashLayout>
            </div>
        );
    }
}

export default SplashPage;
