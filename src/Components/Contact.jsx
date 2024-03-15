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
    <div className = {`${styles.paragraph} mb-5`}>
        <h1 className =  {`${styles.heading1} max-w-[480px], mt-5 flex justify-center font-semibold`}>Contact</h1>

        <h2 className =  {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center text-center`}>We would love to hear from you!        <br />
         We are working quickly to establish a new domain.</h2>
        <p className =  {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center`}>If you would like to contribute to our blog, arrange a coffee chat, meet us for our next study session, or pick our brains, email us at: </p>
           <a className =  {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center hover:underline text-blue-700`} href = "mailto:contact@texascodingclub.com">contact@texascodingclub.com</a>
        {/* <li className = "flex justify-center">
            <ul>Sharing your story</ul>
            <ul>Instructional tutorials</ul>
            <ul>Personal anecdotes related to your tech journey</ul>
            <ul>Projects your working on</ul>
            <ul>Collaboration ideas</ul>
        </li> */}
       

        <h2 className =  {`${styles.paragraph} ${styles.marginX} max-w-[480px], mt-5 flex justify-center text-center`}>We would love to hear from you!        <br />
         We are working quickly to establish a new domain and email service</h2>
        <p className =  {`${styles.paragraph} ${styles.marginX} max-w-[480px], mt-5 flex justify-center text-center`}>If you would like to contribute to our blog, arrange a coffee chat, or meet us for our next study session, send us a message below. </p>
           {/* <a className =  {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center hover:underline text-blue-700`} href = "mailto:aguado.joe@gmail.com">aguado.joe@gmail.com</a> */}

           <form ref={form} onSubmit={sendEmail} className ="flex-col justify-center text-center">
            <input type="text" required placeholder="Name" name="name" className = "rounded-lg md:w-1/2 px-8 py-8 mt-8"/>

            <div>
            <input type="email" required placeholder="Email" name="email" className = "rounded-lg md:w-1/2 px-8 py-8 mt-8" />
            </div>

            <div>
            <textarea rows={8} placeholder="Message" name="message" className = "rounded-lg md:w-1/2 px-8 py-8 mt-8"/>
            </div>
            <div>
            <button className = "bg-orange-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">Submit</button>
            </div>
          </form>

    </div>
  )
}

export default Contact