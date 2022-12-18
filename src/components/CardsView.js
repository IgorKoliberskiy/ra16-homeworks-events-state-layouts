import React from 'react';
import ShopCard from './ShopCard';

export default function CardsView({ cards }) {
  
  return (
    <div>
      {cards.map(card => <ShopCard card={card} />)}
    </div>
  )
}