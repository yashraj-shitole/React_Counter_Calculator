import React, { useState } from 'react'

function Calculator() {

    let [a,seta]=useState(0);
    let [b,setb]=useState(0);

    let [Answer,setAnswer]=useState(0);

    const add=()=>{
        setAnswer(Number(document.getElementById('num1').value) + Number(document.getElementById('num2').value));
    }
    const sub=()=>{
        setAnswer(Number(document.getElementById('num1').value) - Number(document.getElementById('num2').value));

 
    }
    const mul=()=>{
        setAnswer(Number(document.getElementById('num1').value) * Number(document.getElementById('num2').value));

    }
    const div=()=>{
        setAnswer(Number(document.getElementById('num1').value) / Number(document.getElementById('num2').value));

    }
    const clear=()=>{
        document.getElementById('num1').value=0;
        document.getElementById('num2').value=0;
        setAnswer(0)

    }

  

  return (
    
      
       


        <div className='flex flex-col gap-5 w-[300px] border rounded-3xl p-5 border-[#383838] md:p-10  md:w-[400px]'>
            <h1 className='text-3xl'>Calculator</h1>

        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='num1' type="text"  size="10" />
    
        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='num2' type="text"  size="10" />
        

        <div className='flex justify-evenly'>
        <button className='w-[150px] text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={add}> Addition</button>
        <button className='w-[150px] text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={sub}>Subtraction</button>
        </div>

        <div className='flex justify-evenly'>
        <button className='w-[150px] text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={mul}>Multiplication</button>
        <button className='w-[150px] text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={div}>Division</button>
        </div>

        <button className=' text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={clear}>Clear</button>
       
        <h1 className='text-3xl overflow-scroll'>Answer: {Answer}</h1>


        </div>
  )
}

export default Calculator;
