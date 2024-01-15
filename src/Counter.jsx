import React from 'react'
import { useState } from "react";


const Counter = () => {
    
let [counter, setCounter]=useState(0);


const add=()=> {
  setCounter(counter+1);
}

const  remove=()=>{
  if(counter>0){
    setCounter(counter-1)
  }
  else{
    setCounter(counter);

  }

}

  return (
    <div className="flex flex-col gap-5 w-[300px]  border rounded-3xl p-5 border-[#383838] md:p-10  md:w-[400px]"> 
    <h1 className="text-3xl">COUNTER</h1>
  
  <h1 className="text-3xl">{counter}</h1>
  <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={add}>Add Value to {counter}</button>
  <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={remove}>Remove Value {counter}</button>
  
    </div>
  )
}

export default Counter
