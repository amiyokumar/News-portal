import React , {useState} from 'react'
import Hero from './Hero'
import FetchData from './FetchData'
import LoadingBar from 'react-top-loading-bar';
const Home = () => {
  const [progress] = useState(0)
  return (
    <div>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress+100} 
      />
      <Hero/>
      <FetchData/>
    </div>
  )
}

export default Home