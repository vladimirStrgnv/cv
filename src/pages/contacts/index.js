import React from 'react';
import './index.css';
import ContactList from './contact-list';
import useAnimationRender from '../../customHook/useAnimationRender';

const ContactPage = () => {
  const isShowBox = useAnimationRender();
  return (
    <section className='contacts'>
      <div className={`block ${isShowBox ? "block-show" : ""}`}>
        <div className='contacts__wrapper'>
          <h2 className='contacts__title'>Контакты</h2>
          <p className='contacts__descrpt'>Рассмотрю любые предложения по фулл-тайм вакансиям либо проектной работе.</p>
          <h3 className='contacts__subtitle'>Связаться со мной:</h3>
          <ContactList></ContactList>
        </div>
      </div>
    </section>
  )
}

export default ContactPage;