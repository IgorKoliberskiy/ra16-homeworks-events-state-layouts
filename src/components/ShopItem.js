import React from 'react';

export default function ShopItem({ item }) {
    
  return (
    <div className='item'>
      <img className='item_img' src={item.img} alt='' />
      <h1 className='item_name'>{item.name}</h1>
      <p className='item_color'>{item.color}</p>
      <p className='item_price'>${item.price}</p>
      <button className='item_button'>ADD TO CART</button>
    </div>
  )
}