import React from 'react'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <p>
        <img
          src={profilePic}
          alt={`Hugo Herman-Wilson`}
          style={{
            width:'150px',
            height:'150px',
            borderRadius: '100%'
          }}
        />
        Hi, I'm <strong>Hugo Herman-Wilson</strong> and I'm an absolute lad.
        <a href="https://twitter.com/HugoBaritone">
          You should follow me on Twitter
        </a>
      </p>
    )
  }
}

export default Bio
