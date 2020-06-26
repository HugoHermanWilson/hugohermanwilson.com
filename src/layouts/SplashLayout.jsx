import React from 'react';
import Head from '../components/Head'

class SplashLayout extends React.Component {

  render() {
    const {children} = this.props;

    return (
      <div id='SplashPage' className="splash">
        <Head />
        {children}
      </div>
    );
  }
}

export default SplashLayout;
