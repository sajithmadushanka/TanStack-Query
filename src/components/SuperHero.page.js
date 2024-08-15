import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import axios from 'axios'

const SuperHeroPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const[data, setData] = useState('')
    const[error, setError] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:4001/SuperHeros')
        .then((res)=>{
            setData(res.data)
            setIsLoading(false)
        } ).catch((e)=>{

            setError(e.message)
            setIsLoading(false)

        })
    })
    if(isLoading) return <>isLoading...</>
    if(error) return <h1>{error}</h1>
  return (
    <div>
        <Navbar />
        <h1>SuperHeroPage</h1>
        {data.map((hero) =>{
            return <div style={{display:'flex'}}>
                <p>{hero.id} '  ' </p> 
                <p>{hero.name} '  ' </p>
                <p>{hero.city}</p>
            </div>
        })}
    </div>
  )
}

export default SuperHeroPage
