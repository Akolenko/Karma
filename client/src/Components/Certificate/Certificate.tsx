import React from 'react'
import './Certificate.css'

interface Certificate {
    id: number,
    store_title: string,
    description: string,
    sum: number,
    image: string,
    quantity: number
}


export default function Certificate ({ certificate } : { certificate: Certificate }) {

    function buyCertificatehandler(): void {
        const userId = localStorage.getItem('userId')
    }
    
    return ( 
        <div className='certificate-wrapper'>
            <div><img src={certificate.image} alt="certificate" className='certificate-image' /></div>
            <div>{certificate.description}</div>
            <div>{certificate.sum} руб.</div>
            <div>
                <button onClick={() => buyCertificatehandler()}>КУПИТЬ</button>
            </div>
        </div>
     );
}
