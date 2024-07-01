import { useEffect, useState } from 'react'
import $api from '../../http'
import Certificate from './Certificate'

interface Certificate {
    id: number,
    store_title: string,
    description: string,
    sum: number,
    image: string,
    quantity: number
}


export default function CertificateList () {

    const [certificates, setCertificates] = useState<Certificate[]>([])

    useEffect(() => {
        async function fetchData() {
            const response = await $api(`${import.meta.env.VITE_REACT_APP_API_URL}/certificates`)
            const certificatesObjects = response.data
            setCertificates(certificatesObjects)
          }
          
          fetchData()
    }, [])

    return ( 
        <div className='certificates-list'>
            {
                certificates && certificates.length ? 
                certificates.map(cert => {
                    return (
                        <Certificate certificate={cert}/>
                    )
                }) :
                <div className='no-certificates'></div>
            }
        </div>
     )
}
