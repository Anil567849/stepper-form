import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setStep} from '../store/stepsSlice.js';
import ProgressBar from "@ramonak/react-progress-bar";

function Header() {
  const dispatch = useDispatch('');
  const {step} = useSelector(state => state.steps);

  function handleBack() {
    if(step > 1){
      dispatch(setStep({step: step-1}));
    }else{
      dispatch(setStep({step: 1}));
    }
  }

  function handleExit() {
      dispatch(setStep({step: 1}));
  }
  return (
    <div >
        <div className='flex justify-between shadow pt-1 pb-1'>
            <div>
                <span className='font-bold p-10 cursor-pointer' onClick={handleBack}>Go Back</span>
            </div>
            <div>
                <span className='font-bold p-10 cursor-pointer' onClick={handleExit}>Exit</span>
            </div>
        </div>
        <ProgressBar completed={Math.floor(step*33.34)} />
    </div>
  )
}

export default Header