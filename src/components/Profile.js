import React, { useEffect, useState } from 'react'


const Profile = ({name}) => {
  const [count , setCount] = useState(0);
  const [count2] = useState(0);
  useEffect(()=>{
    //API call
    const timer = setInterval(() => {
      console.log('setInterval');
    }, 1000);
    return () => { // clear the timer always while leaving the page.
      // similar to componentWillUnmount HERE.
      clearInterval(timer);
      console.log('clear timer');
    }

  }, []);
  return (
    <div>
      <h2>Profile functional components</h2>
      <h3>Name: {name}</h3>
      <h4>Count : {count}</h4>
      <button onClick={()=>{
        setCount(1);
      }}> Click </button>
    </div>
  )
}

export default Profile