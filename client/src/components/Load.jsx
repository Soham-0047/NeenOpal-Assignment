import React, { useEffect, useState } from 'react'
import './load.css';


const Load = () => {


    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading for 5 seconds
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 5000);
  
      // Clear the timeout on component unmount
      return () => clearTimeout(timeout);
    }, []);
  
    if (!loading) return null;
  
  return (
   <>
   <div class="loader">
  <div class="inner one"></div>
  <div class="inner two"></div>
  <div class="inner three"></div>
    </div>
   </>
  )
}

export default Load