import styles from '../styles'
import {useLoaderData} from 'react-router-dom';

const Contact = () => {
const users = useLoaderData();
  return (
    <div >
        <h1 className =  {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center font-semibold`}>Contact</h1>
        <h2 className =  {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center`}>We would love to hear from you!</h2>
        <p className =  {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center`}>If you would like to contribute to our blog, arrange a coffee chat, meet us for our next study session, or pick our brains, email us at </p>
           <a className =  {`${styles.paragraph} max-w-[480px], mt-5 flex justify-center hover:underline text-blue-700`} href = "mailto:texascodingclub@gmail.com">texascodingclub@gmail.com</a>
        {/* <li className = "flex justify-center">
            <ul>Sharing your story</ul>
            <ul>Instructional tutorials</ul>
            <ul>Personal anecdotes related to your tech journey</ul>
            <ul>Projects your working on</ul>
            <ul>Collaboration ideas</ul>
        </li> */}
       
    </div>
  )
}

export default Contact