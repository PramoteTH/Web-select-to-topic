import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>You can share your pictures with your Friends !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='pictures of A challenging place for adventurers.'
              label='Adventure'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='pictures of Religious place used for religious ceremonies'
              label='Ceremonial site'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='pictures of Mysterious places from all over the world'
              label='Mystery'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Colorful pictures of the capital of each country'
              label='City'
              path='/'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Pictures of landmarks from all directions'
              label='Landmark'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
