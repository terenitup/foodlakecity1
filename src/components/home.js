import React, { Component } from 'react';

import dimsum2 from './dimsum2.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className='home layout__content-inset'>
        <img className='home__image' src={dimsum2} alt='photo of dim sum spread' />
        
        <div className='home__title'>
          <div>
            <p>Discover Great Eats</p>
          </div>
          <div>
            <p>in SLC and beyond with</p>
          </div>
          <div>
            <p>FoodLakeCity</p>  
          </div>
        </div>
                
      </div>
    );
  }
}
