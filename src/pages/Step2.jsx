import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setAuth} from '../store/authSlice.js';
import {setStep} from '../store/stepsSlice.js';

function Step2() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [extra, setExtra] = useState('')
    const dispatch = useDispatch('');
    const {step} = useSelector(state => state.steps);

    function checkLen() {
        if(name.length == 0 || email.length == 0 || phone.length == 0){
            return false;
        }
        return true;
    }

    function checkPhone(params) {
        if(phone.length != 10){
            return false;
        }
        return true;
    }

    function handleClick(e){
        e.preventDefault();
        if(!checkLen() || !checkPhone()){
            alert("please make sure all fields are right")
            return;
        }
        dispatch(setAuth({name, email, phone, extra}));
        dispatch(setStep({step: step+1}));

        //submit the form;
    }

  return (
    <div className='flex justify-center pt-10'>
        <div className="w-[30vw]">
            <h1 className='text-2xl font-bold'>Step #2</h1>
            <h2 className='text-2xl font-bold'>Details</h2>
            <p>Tell us about yourself.</p>

            <form onSubmit={handleClick}>

                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            
                            <div className="sm:col-span-6">
                                <label for="text" className="text-start block text-sm font-medium leading-6 text-gray-900">Name</label>
                                <div className="mt-2">
                                    <input id="text" name="text" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setName(e.target.value)} value={name}/>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label for="email" className="text-start block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setEmail(e.target.value)} value={email}/>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label for="phone" className="text-start block text-sm font-medium leading-6 text-gray-900">Phone</label>
                                <div className="mt-2">
                                    <input type="text" name="phone" id="phone" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setPhone(e.target.value)} value={phone}/>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label for="about" className="text-start block text-sm font-medium leading-6 text-gray-900">Tell us anything else</label>
                                <div className="mt-2">
                                    <textarea id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setExtra(e.target.value)} value={extra}></textarea>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>

                <div className="mt-1 flex items-center justify-center gap-x-6">
                    <button type="submit" className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Request</button>
                </div>

            </form>
            
        </div>
    </div>
  )
}

export default Step2