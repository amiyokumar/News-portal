import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const FetchData = () => {
    const [Data,setData]=useState("")
    const fetchData= async()=>{
        await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=5eecd1feae2c4104a59359eeb7e5f191").then((res)=>setData(res.data.articles));
    }
    useEffect(() => {
      fetchData();
    }, [])
    
  return (
    <div className='container my-4'>
      <div className="contwrap d-flex">
      <img src="./../giphy.gif" height={30} width={30}/>
      <h3><u>Trending News:</u></h3>
      <img src="./../giphy.gif" height={30} width={30}/>
    </div>
    <div className=' container d-flex justify-content-center align-items-center flex-column my-3'>
        {Data? 
            Data.map((items,index)=>(
            <>
            <div className='container my-1 p-3' style={{boxShadow: "2px 2px 10px silver ",borderRadius:"10px"}}>
                <h5>{items.title}</h5>
                <p>Published By: {!items.author?"Unknown":items.author} </p>
                <a href={items.url} target="blank">View More...</a>
                </div>
                </>
                )) : 'Loading...'}</div>
    </div>
  )
}

export default FetchData