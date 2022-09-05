import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getApi } from '../misc/config';

const Show = () => {
    
    const { id } = useParams();
    const [show, setShow] = useState(null)
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false);

    useEffect(()=>{
        
        let isMounting = true
        
        setLoading(true)
        getApi(`shows/${id}?embed=cast`)
        .then(data => {
            if(isMounting){
                setLoading(false)
                setShow(data)
            }
        })
        .catch(err=>{
            if(isMounting){
                setLoading(false)
                setErrors(err)
            }
        })

        return () => {
            isMounting = false
        }
    }, []);

    if(loading){
        return( <div>Loading...</div> )
    }

    if(errors){
        return( <div>Oops! An error accured</div>)
    }
  
    return (
    <div>Show</div>
  )
}

export default Show