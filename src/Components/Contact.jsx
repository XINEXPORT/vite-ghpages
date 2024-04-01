import styles from '../styles'
import { useRef, useState} from "react";
import cowgirl from '../images/cowgirl.svg'
import cowboy from '../images/cowboy.svg'
import contact from '../images/contact.svg'
import { FaHeart } from "react-icons/fa";
import { GiTexas } from "react-icons/gi";

import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

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

    
    <section className = {`${styles.padding} ${styles.flexCenter} flex flex-col`}>
      <h1 className ={`font-rye text-[40px]`}>Contact</h1>

      <div id='contactBody' className={`${styles.paddingX} `}>


        <div id='section1' className={`flex flex-col md:flex-row justify-start items-center relative p-4`}> 
          
          <div id='contactimage' className=''>
            <img src={cowgirl} alt='' className='max-w-[300px] w-full p-2'/>
          </div>

          <div id='contacttext' className=''>

 
                <p className ='max-w-[480px] font-stint text-[20px] text-center flex justify-center items-center w-full h-full' > Got something to say, partner? Drop us a line! Feel free to DM or add us to stay connected. 
                </p>

              <div className='flex items-center justify-center p-4'>
                <a href='https://www.instagram.com/texascodingclub/' className='' target='_blank' rel='noopener noreferrer'><RiInstagramFill size={40} className='text-tccred'/> </a> 
                <a href='https://www.linkedin.com/company/texas-coding-club/' className='ml-8' target='_blank' rel='noopener noreferrer'><FaLinkedin size={40} className='text-tccred'/></a>
                <a href='https://www.linkedin.com/company/texas-coding-club/' className='ml-8' ><IoIosMail size={40} className='text-tccred'/></a>
              </div>

          </div>
        </div>




        <div id='section2' className={`flex flex-col md:flex-row justify-end items-center relative`}>

          <p className='max-w-[480px] font-stint text-[20px] text-center'>Interested in joining the Texas Coding Club? We're a small group open to new developers, new ideas or feedback on how we can be better for our community. <a href = "mailto:contact@texascodingclub.com" className ='hover:underline text-[18px] tracking-wider text-tccred'>contact@texascodingclub.com</a></p>

          <img src={cowboy} alt='' className=' max-w-[300px] w-full m-4' />

          </div>
          </div>
          {/* <div className = "absolute z-[0] w-[50%] h-[50%] left-0 bottom-0 black__gradient" />  */}

          
        <div id='section3' className={`flex flex-col items-center py-20 relative`}>
          <p className =  {` font-stint text-[20px] text-center max-w-[720px]`}>We are local to the Dallas, Fort Worth area. If you would like to contribute to the blog, get coffee, or join our next study session - send a message, we'll be in touch! </p><GiTexas size={30}
          className='m-2 ' />
          <img src={contact} alt='' className='w-[500px] ' />
                    <div className = "absolute z-[0] w-[20%] h-[20%] right-0 bottom-0 black__gradient" /> 
                    <div className = "absolute z-[0] w-[10%] h-[10%] top-0 left-0 black__gradient" /> 
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