import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Navigation extends Component {

  render() {
    return (
      <div className='navigation'>
        <Link to='/'>home</Link>
        <Link to='/blog'>blog</Link>
        <Link to='/instagram'>instagram</Link>
        <Link to='/contact'>contact</Link>
      </div>
    );
  }
}