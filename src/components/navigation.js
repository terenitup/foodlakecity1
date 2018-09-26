import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Navigation extends Component {

  render() {
    return (
      <div className='navigation'>
        <Link to='/'>home</Link>
        <Link to='/blog'>blog</Link>
        <a href='https://www.instagram.com/foodlakecity/' target='_blank'>instagram</a>
        <Link to='/contact'>contact</Link>
      </div>
    );
  }
}