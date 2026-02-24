import React from 'react'
import { useState, useEffect } from 'react'


const TextChange = () => {

    const texts = ["Hello! I'm Asad","Hello! I'm Asad","Hello! I'm Asad"]
    const [currentText,setCurrentText] = useState("")
    const [endValue,setendValue] = useState(true)
    const [isForward, setIsForword]= useState(true)
    const [index,setIndex]= useState(0)

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentText(texts[index].substring(0,endValue))
            if(isForward){
                setendValue((prev)=>prev+1);
            }
            else{
                setendValue((prev)=>prev-1)
            }
            if(endValue > texts[index].length+10){
                setIsForword(false)
            }
            if(endValue < 2.1){
                setIsForword(true)
                setIndex((prev)=>prev&texts.length)
            }
        }, 50)
        return ()=>clearInterval(intervalId)

    },[endValue, isForward,index,texts])

  return (
    <div className='transition duration-300 ease'>{currentText}</div>
  )
}

export default TextChange