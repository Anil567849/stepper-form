import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setBudget} from '../store/authSlice.js';
import {setStep} from '../store/stepsSlice.js';

function Step1() {

    const [state, setState] = useState([
        {
            from: '0',
            to: '1000',
        },
        {
            from: '1000',
            to: '2000',
        },
        {
            from: '2000',
            to: '5000',
        },
        {
            from: '5000',
            to: '10000',
        },
        {
            from: '10000',
            to: '25000',
        },
        {
            from: '25000',
            to: '+',
        }
    ])

    const {step} = useSelector(state => state.steps);
    const {budgetTo, budgetFrom} = useSelector(state => state.auth);
    const dispatch = useDispatch('');

    function handleClick(val){
        dispatch(setBudget({from: val.from, to: val.to}));
        dispatch(setStep({step: step+1}));
    }

  return (
    <div className='flex justify-center pt-10'>
        <div className="w-[30vw]">
            <h1 className='text-2xl font-bold'>Step #1</h1>
            <p className='text-2xl font-bold'>What is your monthly Digital Marketing Budget?</p>
            {
                state.map((val, ind) => {
                    return (
                        <p onClick={()=> handleClick(val)} key={ind} className='border p-3 mb-3 mt-3 cursor-pointer'>
                            {
                                (val.from == 0) ? ("< $" + val.to + "/mo") : ((val.from == 25000) ? "$"+ val.from + " + " : "$"+ val.from + " - " + "$"+val.to)
                            }
                        </p> 
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default Step1