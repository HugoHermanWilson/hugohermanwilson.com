import React from 'react';
import SplashLayout from '../layouts/splash';
import SplashImage from '../components/splash/splashImage.js';

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
                console.log("3s")
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
            </SplashLayout>
          </div>
        );
    }
}

export default SplashPage;