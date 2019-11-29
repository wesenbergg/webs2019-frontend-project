import React from 'react'
import '../../../styles/Faq.css'

function FAQ ({faq,index,toggleFAQ}) {
    return (
        <div className={"faq " + (faq.auki ? 'auki' : '')}
             key={index} onClick={() => toggleFAQ(index)}>
            <div className="faq-kysymys">
                {faq.kysymys}
            </div>
            <div className ="faq-vastaus">
                {faq.vastaus}
            </div>
        </div>
    )
}

export default FAQ

