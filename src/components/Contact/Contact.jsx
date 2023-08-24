import './Contact.css'

const Contact = () => {
  return (
    <section className='aboutWidth slideIn contactContainer'>
      <div className='markTittleContainer'>
          <div className='markTittle'> CONTACT </div>
          <h1> Get in Touch </h1>
      </div>
<<<<<<< HEAD
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.45340228885!2d-58.51569870879599!3d-34.
      6156547700677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20
      Aires!5e0!3m2!1sen!2sar!4v1692726134258!5m2!1sen!2sar" allowFullScreen="" className='contactMap' loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>      
=======
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.45340228885!2d-58.51569870879599!3d-34.6156547700677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires!5e0!3m2!1sen!2sar!4v1692726134258!5m2!1sen!2sar" allowFullScreen="" className='contactMap' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>      
>>>>>>> 0953e4e50b0f725829a71e05cacae323b9f05bd0
      <form className='contactForm'>
        <input type="text" name="name" placeholder="Name" required/>
        <input type="email" name="user_email" placeholder="Email" required/>
        <textarea name="message" placeholder="Message" required=""/>
        <button type='submit'> Send Message</button>
      </form>
    </section>
  )
}

export default Contact