import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getApi } from '../misc/config';

const Show = () => {
    
    const { id } = useParams();
    const [show, setShow] = useState(null)


    useEffect(()=>{
        getApi(`shows/${id}?embed=cast`)
        .then(data => setShow(data))
    }, [])
  
    return (
    <div>Show</div>
  )
}

export default Show