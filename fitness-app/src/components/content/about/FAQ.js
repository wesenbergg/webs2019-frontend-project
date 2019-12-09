import React from 'react'
import '../../../styles/Faq.css'

function FAQ ({faq,index,toggleFAQ}) {
    return (
        <div className={"faq " + (faq.auki ? 'auki' : '')}
             key={index} onClick={() => toggleFAQ(index)}>
            <div className="faq-kysymys">
                <p className="text-left">{faq.kysymys}</p>
            </div>
            <div className ="faq-vastaus">
                <p className="text-left">{faq.vastaus}</p>
            </div>
        </div>
    )
}

export default FAQ

