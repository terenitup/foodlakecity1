import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Navigation extends Component {

  render() {
    return (
      <div className='navigation'>
        <div className='navigation__subtitle'>
            <p>Discover Great Eats<br></br>in SLC and beyond with</p>
        </div>
        <div className='navigation__foodlakecity'>
            <p>FOODLAKECITY</p>  
        </div>
        <Link className='navigation__home' to='/'>home</Link>
        <Link className='navigation__blog' to='/blog'>blog</Link>
        <a className='navigation__instagram' href='https://www.instagram.com/foodlakecity/' 
          target='_blank'>
          instagram
        </a>
        <Link className='navigation__contact' to='/contact'>contact</Link>
      </div>
    );
  }
}