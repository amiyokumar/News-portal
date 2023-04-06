import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
import InfiniteScroll from 'react-infinite-scroll-component'
const Entertainment = () => {
  const [progress, setProgress] = useState(0)
  const [Data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://newsapi.org/v2/everything?q=entertainment&apiKey=5eecd1feae2c4104a59359eeb7e5f191")
    .then((res)=>{
      setData(res.data.articles);
    })
  },[])


return (
  <>
  
  <h1 className="text-center" style={{color:'orange', margin: '10px 0px', marginTop: '30px' }}>Top Entertainment News</h1>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress+100} 
      />

    <div className='container my-5'>
      <div className='row text-center'>
        {
          Data.map((val)=>{
            return(
              <div className='col my-1 p-3'>
              <div className="card" style={{width : "18rem"}}>
                <img src={val.urlToImage } className="img" alt="No Image Found😞" ></img>
                <div className="card-body"style={{whitespace: 'nowrap'}}>
                  <h5 className="card-title" align="center">{val.title.substring(0,30)}...</h5>
                  <p className="card-text "align="left" margin='0'>{val.description.substring(0,100)}...</p>
                  <p className="card-text">Published By: {!val.author?"Unknown":val.author}</p>
                  <p className="card-text">Time: {val.publishedAt}</p>
                  <a href={val.url} target="blank">View More</a>
      </div>
    </div>
              </div>
              
            )
          })
        }
      </div>
    </div>
  </>
)
}

export default Entertainment