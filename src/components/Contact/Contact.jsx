import './Contact.css'

const Contact = () => {
  return (
    <section className='aboutWidth'>
      <div className='markTittleContainer'>
          <div className='markTittle'> CONTACT </div>
          <h1> Get in Touch </h1>
      </div>
      <img src="https://dummyimage.com/990x400/000/fff&text=Map" alt="" className='map'/>
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