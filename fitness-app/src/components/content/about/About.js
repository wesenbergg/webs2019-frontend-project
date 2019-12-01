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
                kysymys: '?',
                vastaus: 'vastaus',
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
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
                    ))}
                </div>
                <div className="col-lg-3">
                    <Team/>
                 </div>
            </div>



        );
}


export default About;