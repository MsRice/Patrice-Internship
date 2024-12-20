import React, { useEffect, useState } from 'react';

const Expiration = ({element}) => {
    const [expirationDate , setExpirationDate] = useState(element.expiryDate)
    let timeInMilliSec = element.expiryDate;
    let cancelID;
  
    const countdownCounter = document.querySelector(`.countdown__${element.id}`)




      
    function updateCountdown(){
        
        let timeToExpirationInMilli = timeInMilliSec - Date.now()
        const expirationDuration = generateExpireDate(timeToExpirationInMilli)
        
        countdownCounter.innerHTML = expirationDuration 
      }

      setInterval(() =>{
        updateCountdown()
      }, 1000)
    
    function generateExpireDate(timeToExpirationInMilli){

        let timeLeft = timeToExpirationInMilli  /1000
        let timer = timeToExpirationInMilli  /1000
        
        const daysLeft = Math.floor(timeLeft / 86400)
        timeLeft = timeLeft - (daysLeft * 86400)
        
        
        const hoursLeft = Math.floor(timeLeft / 3600)
        timeLeft = timeLeft - (hoursLeft * 3600)
        
        
        const minutesLeft = Math.floor(timeLeft / 60)
        timeLeft = timeLeft - (minutesLeft * 60)
        
        const secondsLeft = Math.floor(timeLeft )

        if(timer > 86399) {
            const expirationDuration = `${daysLeft} d ${hoursLeft} h ${minutesLeft} m ${secondsLeft} s`
            return expirationDuration
        }       
        else if(timer > 3599) {
            const expirationDuration = `${hoursLeft} h ${minutesLeft} m ${secondsLeft} s`
            return expirationDuration
        }       
        else if(timer > 59) {
            const expirationDuration = `${minutesLeft} m ${secondsLeft} s`
            return expirationDuration
        }       
        else if(timer > 1) {
            const expirationDuration = `${secondsLeft} s`
            return expirationDuration
        }       
        
      
    }

    return (
        <>

        </>
    );
}

export default Expiration;
