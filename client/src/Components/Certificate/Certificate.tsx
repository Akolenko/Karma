import React from 'react'
import './Certificate.css'
import $api from '../../http'

interface Certificate {
    id: number,
    store_title: string,
    description: string,
    sum: number,
    image: string,
    quantity: number
}


export default function Certificate ({ certificate } : { certificate: Certificate }) {


    async function buyCertificatehandler(sum: string, image: string): Promise<void> {
        const userId = localStorage.getItem('userId')
        const response = await $api.post(`${import.meta.env.VITE_REACT_APP_API_URL}/certificates/buy`,
            {userId, sum, image}
        )
    }
    
    return ( 
        <div className='certificate-wrapper'>
            <div><img src={certificate.image} alt="certificate" className='certificate-image' /></div>
            <div>{certificate.description}</div>
            <div>{certificate.sum} руб.</div>
            <div>
                <button onClick={() => buyCertificatehandler(`${certificate.sum}`, `${certificate.image}`)}>КУПИТЬ</button>
            </div>
        </div>
     );
}
