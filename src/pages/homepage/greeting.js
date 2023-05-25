import React from 'react';
import './greeting.css';
import Button from '../../UI/button';

const Greeting = () => {
  return (
    <div className='greeting'>
        <div className='greeting__about'>
            <h2>Строгонов Владимир</h2>
            <h3>front-end разработчик</h3>
            <Button text={'Связаться со мной'} path={'contacts'}></Button>
        </div>
    </div>
  )
}

export default Greeting;