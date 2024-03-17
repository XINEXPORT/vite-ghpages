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
          setError(false)
          form.current.reset();
        },
        (error) => {
          setError(true);
          setSuccess(false)
        },
      );
  };


  return (
    <div className = {`${styles.paragraph} max-w-[480px], flex flex-col justify-center`}>
        <h1 className ={`${styles. heading1} flex justify-center text-center font-semibold`}>Contact</h1>

       

        <h2 className =  {`${styles.paragraph} ${styles.marginX} flex justify-center`}>We would love to hear from you!      </h2>
          <a className =  {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center hover:underline text-blue-700`} href = "mailto:contact@texascodingclub.com">contact@texascodingclub.com</a>
        <p className =  {`${styles.paragraph} ${styles.marginX} max-w-[480px], mt-5 flex justify-center text-center`}>If you would like to contribute to our blog, arrange a coffee chat, or meet us for our next study session, send us an message below. </p>


           <form ref={form} onSubmit={sendEmail} className ="flex-col justify-center text-center">
            <input type="text" required placeholder="Name" name="name" className = "rounded-lg md:w-1/2 px-4 py-4 mt-8 border-2"/>

            <div>
            <input type="email" required placeholder="Email" name="email" className = "rounded-lg md:w-1/2 px-4 py-4 mt-8 border-2" />
            </div>

            <div>
            <textarea rows="10" cols = "24" placeholder="Message" name="message" className = "rounded-lg md:w-1/2 px-4 py-4 mt-8 border-2"/>
            </div>

            <div>
            <button className = "bg-orange-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mb-10">Submit</button>
            {error && "Error"}
            {success && "Message Sent!"}
            </div>
          </form>

    </div>
  )
}

export default Contact