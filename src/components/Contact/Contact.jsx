import Counter from '../../assets/utils';
import './Contact.css'
import { useEffect, useState } from 'react';

const Contact = ({ language, translations, closeSideBar}) => {
  Counter('contact')
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [emailResponse, setEmailResponse] = useState(null);

const handleSubmit = async () => {
  const form = document.querySelector('.contactForm');
  const datos = {
    name: form.elements.name.value,
    email: form.elements.user_email.value,
    message: form.elements.message.value
  };

  const respuesta = await fetch(`https://porfoliobackend-dev-amke.1.us-1.fl0.io/mail`, {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  if (respuesta.ok) {
    console.log('Correo enviado exitosamente');
  } else {
    console.error('Error al enviar el correo');
  }
  const content = await respuesta.json();
  setEmailResponse(content.message);
};


  return (
    <section className='aboutWidth slideIn contactContainer' onClick={closeSideBar}>
      <div className='markTittleContainer'>
          <div className='markTittle'> {translations[language].contactTittle} </div>
          <h1> {translations[language].contactH1} </h1>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.45340228885!2d-58.51569870879599!3d-34.
      6156547700677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20
      Aires!5e0!3m2!1sen!2sar!4v1692726134258!5m2!1sen!2sar" allowFullScreen="" className='contactMap' loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>      
      <form className='contactForm'>
        <input type="text" name="name" placeholder={translations[language].contactName} required/>
        <input type="email" name="user_email" placeholder="Email" required/>
        <textarea name="message" placeholder={translations[language].contactMsj} required=""/>
        {emailResponse?<strong className='emailResponse'>{emailResponse}</strong>:<></>}
        <button type='button' onClick={handleSubmit}> {translations[language].contactSend} </button> 
      </form>
    </section>
  )
}

export default Contact