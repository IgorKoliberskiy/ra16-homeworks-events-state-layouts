import React from 'react';

export default function IconSwitch({ icon, onSwitch }) { 
  return (
    <header className='switch' >
      <button className='material-icons' onClick={onSwitch}>{icon}</button>
    </header>
  )
}