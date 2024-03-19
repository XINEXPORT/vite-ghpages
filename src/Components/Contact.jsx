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
    <section className = {`${styles.paragraph} text-center flex flex-col justify-center`}>
        <h1 className ={`${styles.heading1} flex justify-center `}>Contact</h1>


        <h2 className =''>We would love to hear from you.      </h2>
          <a className =  {`${styles.paragraph} hover:underline text-blue-700`} href = "mailto:contact@texascodingclub.com">contact@texascodingclub.com</a>
        <p className =  {`${styles.paragraph}`}>If you would like to contribute to our blog, arrange a coffee chat, or meet us for our next study session, send us an message below. </p>


           <form ref={form} onSubmit={sendEmail} className ="flex flex-col justify-center text-center items-center">

            <input type="text" required placeholder="Name" name="name" className = " w-3/4 md:w-1/2 rounded-lg px-4 py-4 mt-8 border-2"/>


            <input type="email" required placeholder="Email" name="email" className = " w-3/4 md:w-1/2 rounded-lg px-4 py-4 mt-8 border-2" />



            <textarea rows={8} placeholder="Message" name="message" className = "w-3/4 md:w-1/2 rounded-lg px-4 py-4 mt-8 border-2"/>

            <div>
            <button className = "bg-orange-600 hover:bg-green-500 text-white font-bold py-2 m-6 px-4 rounded ">Submit</button>
            </div>
          </form>

    </section>
  )
}

export default Contact