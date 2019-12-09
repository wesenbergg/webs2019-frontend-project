import React, {useState} from 'react'
import FAQ from './FAQ'
import Team from "./Team"
import Contact from './Contact'

const About = () => {

        const [faqs, setFaqs] = useState([
            {
                kysymys: 'Where I can register to the website',
                vastaus: 'From top-right of the page there is a sign up button',
                auki: false
            },
            {
                kysymys: 'How do I activate my account?',
                vastaus: 'After you successfully sign up, we\'ll send an email with activation instructions. All you need to do to activate is tap on the activation link.',
                auki: false
            },
            {
                kysymys: 'Is this website free?',
                vastaus: '100% free, no payment information required.',
                auki: false
            },
            {
                kysymys: 'Is this website also for beginners?',
                vastaus: 'Yes, from beginner to all the way to the professional athletes',
                auki: false
            },

            {
                kysymys: 'Is my personal information safe?',
                vastaus: 'We dont use your personal info, other than being able to identify the users',
                auki: false
            },

            {
                kysymys: "I can't access to my account. What should I do?",
                vastaus: 'First try forgot your password link in sign in page. If that did not solve your problem, please contact our administration info@stayfit.com or fill up contact form found below of this page.',
                auki: false
            },
            {
                kysymys: 'Can I get a hard copy of my workout post?',
                vastaus: 'We do not send hard copies, but you can download a high-quality PDF version from your Profile page on our website.',
                auki: false
            },
            {
                kysymys: 'How can I close my StayFit account?',
                vastaus: 'To close your account, please send a request to info@stayfit.com from the email associated with your account. We will then process your request.',
                auki: false
            },
            {
                kysymys: 'How can I provide feedback?',
                vastaus: 'Feel free to send all feedback to info@stayfit.com. We take our users’ feedback very seriously, and make every effort to thoroughly consider every email, review, or question sent.',
                auki: false
            },
            {
                kysymys: 'I have a question that I can´t find answer on FAQ',
                vastaus: 'You can send email to one of our website creators. This can be found bottom of this page.',
                auki: false
            }
        ]);

        const toggleFAQ = index => {
            setFaqs(faqs.map((faq,i) => {
                if (i === index) {
                    faq.auki = !faq.auki
                } else {
                    faq.open = false
                }
                return faq
            }))
        }

        return (
            <div className='about'>
                <h1 className='header-team'>About</h1>
                <div className='faqs container'>
                    <h2 id="faq-h" className="text-left">FAQ</h2>
                    {faqs.map((faq,i)=> <FAQ key={Math.floor(Math.random() * 99999999)} faq={faq} index={i} toggleFAQ={toggleFAQ}/>)}
                </div>
                <h1 className='header-team'>Team</h1>
                <Team/>
                <h1 className='header-team'>Contact</h1>
                <p className="text-muted">Contact us or leave a contact request.</p>
                <Contact />
             </div>



        );
}


export default About;