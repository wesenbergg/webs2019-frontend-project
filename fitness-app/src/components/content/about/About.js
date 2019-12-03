import React, {useState} from 'react'
import FAQ from './FAQ'
import Team from "./Team";

const About = () => {

        const [faqs, setFaqs] = useState([
            {
                kysymys: 'Where I can register to the website',
                vastaus: 'From top-right of the page there is a sign up button',
                auki: false
            },

            {
                kysymys: 'Is this website free?',
                vastaus: '100% free, no payment information required',
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
                kysymys: 'My account was deleted, even though I didn´t do anything wrong',
                vastaus: 'Please contact our creators, found below of this same page',
                auki: false
            },



            {
                kysymys: 'I have a question that I can´t find answer on FAQ',
                vastaus: 'You can send email to one of our website creators.This can be found bottom of this page',
                auki: false
            }





        ]);

        const toggleFAQ = index => {
            setFaqs(faqs.map((faq,i) => {
                if (i === index) {
                    faq.auki = !faq.auki
                } else {
                    faq.open = false;
                }
                return faq;
            }))
        }

        return (
            <div className='about'>
                <div className='header'>
                    <h1>FAQ Page</h1>
                </div>
                <div className='faqs'>
                {faqs.map((faq,i)=> (
                    <FAQ key={Math.floor(Math.random() * 99999999)} faq={faq} index={i} toggleFAQ={toggleFAQ}/>
                    ))}
                    <h2> Creators & Contact</h2>
                </div>
                    <Team/>
             </div>



        );
}


export default About;