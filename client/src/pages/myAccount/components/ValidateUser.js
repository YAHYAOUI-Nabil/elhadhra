import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { validateUser } from '../../../api';
import { Navigate, useLocation } from 'react-router-dom';


const ValidateUser = () => {
    const { loading, isAuth, error, isRegistered } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const { state } = useLocation();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const submit = (data) => {
        const formData = {
            username: state.email,
            password: state.password,
            authCode: data.verification
        }
        dispatch(validateUser(formData));
    }
    return (
        <>
            {
                isAuth || !isRegistered
                ?
                    <Navigate to={'/mon-compte/profil'} />
                :
                    <div className="flex justify-center items-center px-24 py-24">
                        <div className='flex flex-col gap-4 w-1/2 bg-[#F5F5F5] p-8'>
                            <p>Un code de vérification a été envoyé pour votre addresse email. svp taper le code pour valider votre compte.</p>
                            <div className='mt-8'>
                                <form className='flex flex-col gap-5' onSubmit={handleSubmit(submit)}>
                                    <label htmlFor="verification">Code de vérification</label>
                                    <input 
                                        className='focus:outline-none rounded-md h-9 px-6 py-2 text-[#8B8DA5]'
                                        id='verification' 
                                        type='text'
                                        {...register('verification', { required: true, pattern: {
                                            value: /^[0-9]{6,}/,
                                            message: 'Le code est un nombre de six chiffres',
                                        } })} />
                                    {errors?.verification?.message && <p className='text-red-500'>{errors?.verification?.message}</p>}
                                    {/* {error && <p className='text-red-700'>Le code entré n'est pas valide!</p>} */}
                                    <div className='bg-red-500 rounded-md w-fit'>
                                        <input 
                                            className={`rounded-md w-fit px-6 py-2 uppercase font-bold text-white ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                            type="submit" 
                                            value='Valider' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default ValidateUser