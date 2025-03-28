import React from 'react'

export default function Timer({gameStart,setIsTimerOver,expected}){
    const [timer,setTimer] = React.useState({minutes:'04',seconds:'00'})
    const timeRemaining = (Number(timer.minutes) * 60) + Number(timer.seconds) - 1
    React.useEffect(() => {
        if(timer.minutes === '00' && timer.seconds === '00'){
        setIsTimerOver(prev=>!prev)
                         }
           const step = setTimeout(()=>{
            if(gameStart){
                setTimer(prev => ({...prev,minutes:`${Math.floor(timeRemaining/60)}`.padStart(2,'0'),seconds:`${timeRemaining % 60}`.padStart(2,'0')}))}
        },Math.max(0,1000 - Date.now() + expected.current ))
        expected.current += 1000
        return () => clearTimeout(step)
    },[timer,gameStart])
  return(
    <span className = {`${timeRemaining < 10 ? 'warning new-game' : 'new-game' }`}>{timer.minutes}:{timer.seconds}</span>
  )
}