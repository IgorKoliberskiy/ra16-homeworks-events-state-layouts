import React from 'react';

export default function ShopCard({ card }) {
 
  return (    
    <div className='card'>
      <h1 className='card_name'>{card.name}</h1>
      <p className='card_color'>{card.color}</p>
      <img className='card_img' src={card.img} alt='' />
      <div className='card_footer'>
        <p className='card_price'>${card.price}</p>
        <button className='card_button'>ADD TO CART</button>
      </div>
    </div>
  )
}