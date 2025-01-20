// import React from 'react';
import emailjs from '@emailjs/browser';

function Contact({ lang }) {
   emailjs.init({
      publicKey: 'CCbT47O0vzlsTN-xl',
      blockHeadless: true,
      limitRate: {
         id: 'app',
         throttle: 10000
      }
   });

   const sendMail = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      emailjs.send('service_cj21j0e', 'template_dx7tioj', {
         email: formData.get('email'),
         name: formData.get('name'),
         message: formData.get('text')
      });
   };
   return (
      <div>
         <h1>{lang.contact.contactMe}</h1>
         <form className='contactForm' onSubmit={sendMail}>
            <div className='group'>
               <input type='text' id='name' required='required' name='name' />
               <label for='name'>{lang.contact.name}</label>
               <div className='bar'></div>
            </div>
            <div className='group'>
               <input type='text' id='email' required='required' name='email' />
               <label for='email'>{lang.contact.email}</label>
               <div className='bar'></div>
            </div>
            <textarea
               placeholder={lang.contact.promptMessage}
               id='text'
               name='text'
               rows='4'
               style={{
                  overflow: 'hidden',
                  wordWrap: 'break-word',
                  resize: 'none',
                  height: '160px'
               }}
            ></textarea>
            <br />
            <div style={{ widht: '100%', textAlign: 'right' }}>
               <button className='cvButton'>{lang.contact.sendButton}</button>
            </div>
         </form>
      </div>
   );
}
export default Contact;
