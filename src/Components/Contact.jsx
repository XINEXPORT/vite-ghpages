import styles from '../styles'
import { useRef, useState} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
const form = useRef();
const [error, setError] = useState(false);
const [success, setSuccess] = useState(false);

const sendEmail = (e) =>{
  e.preventDefault();

  emailjs
      .sendForm(
        'service_gilnphb', 
        'template_e1kspna', 
        form.current, {
        publicKey: 'GVwpxX-t-a0VZM-8Q',
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        },
      );
  };


  return (
    <div className = "w-screen h-screen">
        <h1 className =  {`${styles.heading1} max-w-[480px], mt-5 flex justify-center font-semibold`}>Contact</h1>
        <h2 className =  {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center text-center`}>We would love to hear from you!        <br />
         We are working quickly to establish a new domain and email service</h2>
        <p className =  {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center`}>If you would like to contribute to our blog, arrange a coffee chat, meet us for our next study session, or pick our brains, email us at: </p>
           <a className =  {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center hover:underline text-blue-700`} href = "mailto:aguado.joe@gmail.com">aguado.joe@gmail.com</a>

           <form ref={form} onSubmit={sendEmail}>
            <label className = {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center text-center`}>Name</label>
            <input type="text" required placeholder="Name" name="name" />

            <label className =  {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center text-center`}>Email</label>
            <input type="email" required placeholder="Email" name="email" />

            <label className =  {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center text-center`}>Message</label>
            <textarea rows={8} placeholder="Message" name="message" />

            <button>Submit</button>
          </form>
    </div>
  )
}

export default Contact