import { useParams } from "react-router";
import Bid from "../Bid/Bid";
import { useEffect, useState } from "react";
import $api from "../../http";
import { BidType } from "../../../features/bidsSlice";

export default function BidPage () {
    const { id } = useParams()
    const user = localStorage.getItem('user')
    const userObject = JSON.parse(user as string)
    const userObjectId = String(userObject.id)

    const [bid, setBid] = useState<BidType>({})

    useEffect(() => {
        async function fetchData() {
          const response = await $api(`${import.meta.env.VITE_REACT_APP_API_URL}/bid/${id}`)
          const responsedata = response.data
          setBid(responsedata)
        }
        fetchData();
    
      }, []);

    

    
    return ( 
        
        <Bid bid={bid} userId={userObjectId}/>

     );
}
 