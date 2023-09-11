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
              <li className='greeting__experience-item'>Junior JS full stack developer в компании REON c 12.10.2022 по 10.09.2022</li>
              <p>Занимался созданием виджетов для срм системы amoCRM. Выполнял  задания связанные с серверной частью приложения, на таких
                технологиях, как express и mongoDB, так и задания связанные с клиентской частью приложения, приемущественно на таких технологиях, как 
                React + Redux и Vue 3.
              </p>
              <li className='greeting__experience-item'>Стажировка в Ylab с 10.05.2023 по 10.06.2023</li>
            </ul>
            <h3 className='greeting__greeting-title'>Образование</h3>
            <ul className='greeting__education-list'>
              <li className='greeting__education-item'>Реклама и связь с общественностью (ЮФУ, 2017-2021, оконченное высшее образование)</li>
              <li className='greeting__education-item'>Гостиничное дело (ЮФУ, 2021-2023, неоконченное высшее образование)</li>
              <li className='greeting__education-item'>Информатика и вычислительная техника (ЮФУ, 2020-2022, неоконченное высшее образование)</li>
            </ul>
        </div>
    </div>
  )
}

export default Greeting;