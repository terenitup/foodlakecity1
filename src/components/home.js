import React, { Component } from 'react';

import dimsum2 from './dimsum2.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className='home layout__content-insest'>
        <img className='home__image' src={dimsum2} alt='photo of dim sum spread' />
        <h1>FoodLakeCity</h1>
        <h1>Discover Great Eats in SLC and beyond with</h1>
      </div>
    );
  }
}
