import styles from '../styles'
import { useRef, useState} from "react";
import cowgirl from '../images/cowgirl.svg'
import cowboy from '../images/cowboy.svg'
import contact from '../images/contact.svg'
import { FaHeart } from "react-icons/fa";
import { GiTexas } from "react-icons/gi";

// import emailjs from '@emailjs/browser';

const Contact = ({socialMediaData}) => {
const form = useRef();
const [error, setError] = useState(false);
const [success, setSuccess] = useState(false);

// const sendEmail = (e) =>{
//   e.preventDefault();

//   emailjs
//       .sendForm(
//         'service_gilnphb', 
//         'template_e1kspna', 
//         form.current, {
//         publicKey: 'GVwpxX-t-a0VZM-8Q',
//       })
//       .then(
//         (result) => {
//           setSuccess(true);
//           setError(false)
//           form.current.reset();
//         },
//         (error) => {
//           setError(true);
//           setSuccess(false)
//         },
//       );
//   };


  return (

    
    <section className = {`${styles.padding} flex flex-col `}>
        <h1 className ={`${styles.flexCenter} font-rye text-[40px]`}>Contact</h1>

    <div className={`flex flex-col ${styles.flexCenter} ${styles.paddingX} `}>


        <div className={`flex items-center relative`}> 
          <img src={cowgirl} alt='' className='max-w-[300px]'/>

          <p className ='max-w-[480px] font-stint text-[20px] p-10' >Something to say partner? Drop us a line. <span><a className ='hover:underline text-[22px] tracking-wider text-tccred' href = "mailto:contact@texascodingclub.com">contact@texascodingclub.com</a> </span> 
          
          <div className='flex items-center'>
            <p>We'd love to hear from ya </p>
           <span> <FaHeart className='ml-2 text-[20px]'/> 
           <div className = "absolute z-[0] w-[40%] h-[40%] right-0 bottom-10 black__gradient" /> 
</span> </div>
 </p>
        </div>
                    
          <div className={`flex justify-end items-center relative`}>
          <p className='max-w-[480px] font-stint text-[20px] p-10'>Interested in joining the Texas Coding Club? We're a small group, and we are open to new developers, new ideas and any feedback on how we can be better for our community.<span></span> </p>
          <img src={cowboy} alt='' className='max-w-[300px]' />
          <div className = "absolute z-[0] w-[50%] h-[50%] left-0 bottom-0 black__gradient" /> 
          </div>
    </div>

        <div className={`flex flex-col items-center py-10`}>
          <p className =  {` font-stint text-[20px] text-center`}>We are local to the Dallas, Fort Worth area. If you would like to contribute to the blog, get a coffee, or join our next study session - send a message, we'll be in touch! </p><GiTexas size={30}
          className='m-2' />
          <img src={contact} alt='' className='w-[400px] m-10' />
        </div>


           {/* <form ref={form} onSubmit={sendEmail} className ="flex flex-col justify-center text-center items-center ">
            <input type="text" required placeholder="Name" name="name" className = " w-3/4 md:w-1/2 rounded-lg px-4 py-4 mt-8 border-2"/>
            
            <input type="email" required placeholder="Email" name="email" className = " w-3/4 md:w-1/2 rounded-lg px-4 py-4 mt-8 border-2" />
            
            <textarea rows={8} cols={24} placeholder="Message" name="message" className = "w-3/4 md:w-1/2 rounded-lg px-4 py-4 mt-8 border-2"/>
            
            <button className = "bg-orange-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded my-4">Submit</button>
            {error && "Error"}
            {success && "Message Sent!"}
            
          </form> */}


    </section>
  )
}

export default Contact