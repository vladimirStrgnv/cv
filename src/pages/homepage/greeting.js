import React from 'react';
import './greeting.css';
import Button from '../../UI/button';

const Greeting = () => {
  return (
    <div className='greeting'>
        <div className='greeting__about'>
            <h2>Строгонов Владимир</h2>
            <h3 className='greeting__greeting-title'>front-end разработчик</h3>
            <Button text={'Связаться со мной'} path={'contacts'}></Button>
            <h3 className='greeting__experience-title'>Опыт работы</h3>
            <ul className='greeting__experience-list'>
              <li className='greeting__experience-item'>Junior JS full stack developer в компании REON c 12.10.2022 по сегодняшний день</li>
              <li className='greeting__experience-item'>Стажировка в Ylab с 10.05.2023 по сегодняшний день</li>
            </ul>
        </div>
    </div>
  )
}

export default Greeting;