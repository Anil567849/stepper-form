import React from 'react'
import { useDispatch } from 'react-redux';
import {setStep} from '../store/stepsSlice.js';

function Step3() {
    const dispatch = useDispatch('');

    function handleClick(e){
        dispatch(setStep({step: 1}));

        //submit the form;
    }

  return (
    <div className='flex justify-center pt-10'>
        <div className="w-[30vw]">
            <h1 className='text-2xl font-bold'>Your request for a proposal has been submitted.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, voluptas? Officiis est sit modi debitis dolorem inventore impedit quasi! Corporis doloremque ratione veniam impedit sapiente ducimus dolor ipsa accusantium minus?</p>

            <div className="mt-1 flex items-center justify-center gap-x-6">
                <button type="submit" className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleClick}>Return Home</button>
            </div>
            
        </div>
    </div>
  )
}

export default Step3