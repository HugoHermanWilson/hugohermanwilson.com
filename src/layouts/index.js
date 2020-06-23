import React from 'react'
import Head from '../components/head';


class Template extends React.Component {
  
  render({children}) {

    return (
      <div>
        <Head />
        {children}
      </div>
    )
  }
}

export default Template
