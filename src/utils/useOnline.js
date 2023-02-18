import { useEffect, useState } from 'react';

const useOnline = () => {
    const [isOnline, setIsOnline] =useState(true);
    useEffect(()=>{
        const handleOnline = window.addEventListener('online',()=>{
            setIsOnline(true);
          })
          const handleOffline =  window.addEventListener('offline',()=>{
            setIsOnline(false);
          })

          return()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
          }
    },[])
  return isOnline;
}

export default useOnline