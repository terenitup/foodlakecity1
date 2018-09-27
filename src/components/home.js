import React, { Component } from 'react';

import dimsum2 from './dimsum2.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className='home layout__content-inset'>
        
        <figure>
          <img className='home__image' src={dimsum2} alt='photo of dim sum spread' />
        </figure>
        
        
        <div className='home__title'>
          
        </div>
                
      </div>
    );
  }
}
