import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { validateUser } from '../../../api';


const ValidateUser = () => {
    const dispatch = useDispatch();
    const {
        register,
        setError,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const submit = (data) => {
        const formData = {
            username: localStorage.getItem('emailValidation'),
            password: localStorage.getItem('passwordValidation'),
            authCode: data.verification
        }
        dispatch(validateUser(formData));
    }
    return (
        <div className='flex items-center justify-center p-10'>
            <div className='w-96 bg-gray-100 rounded-2xl shadow-xl p-6'>
                <p>Un code de vérification a été envoyé pour votre addresse email. svp taper le code pour valider votre compte.</p>
                <div className='mt-8'>
                    <form className='flex flex-col gap-5' onSubmit={handleSubmit(submit)}>
                        <label htmlFor="verification">Code de vérification</label>
                        <input 
                            className='focus:outline-none rounded-md h-9 px-6 py-2 text-[#8B8DA5]'
                            id='verification' 
                            type='text'
                            {...register('verification', { required: true })} />
                        {errors.verification && <p className='text-red-500'>Le code entré n'est pas valide!</p>}
                        
                        <div className='bg-red-500 rounded-md w-fit'>
                            <input 
                                className='rounded-md w-fit px-6 py-2 uppercase font-bold text-white cursor-pointer'
                                type="submit" 
                                value='Valider' />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ValidateUser