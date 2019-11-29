import React, {useState} from 'react'
import FAQ from './FAQ'

const About = () => {

        const [faqs, setFaqs] = useState([
            {
                kysymys: 'Mistä voin rekisteröidä käyttäjäksi?',
                vastaus: 'Sign up kohdasta, etusivulla oikealla ylhäällä',
                auki: true
            },

            {
                kysymys: 'kysymys?',
                vastaus: 'KYLLÄ ON ',
                auki: false
            },
            {
                kysymys: 'kysymys?',
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
            </div>
        );
}


export default About;