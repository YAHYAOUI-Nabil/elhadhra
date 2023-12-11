import React, { useEffect } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { signin } from "../../../api";
import { clearResponse } from "../userSlice"

const Signin = () => {
    const {loading, response, isAuth} = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    const submit = (data) => {
        dispatch(signin(data));
    }

    useEffect(() => {
      dispatch(clearResponse())
    }, [])
    

    return (
        <>
            {
                isAuth
                ?
                    <Navigate to={'/mon-compte/profil'} />
                :
                    <div className="flex justify-center items-center px-24 py-24">
                        <div className='flex flex-col gap-4 w-1/2 bg-[#F5F5F5] p-8'>
                            <h2 className='font-bold text-xl'>Se connecter</h2>
                            <div>
                                <form className='flex flex-col gap-5' onSubmit={handleSubmit(submit)}>
                                    <label htmlFor="usernameLogin">Email *</label>
                                    <input 
                                        className='focus:outline-none h-9 p-3 text-[#8B8DA5]'
                                        id='usernameLogin' 
                                        type='text'
                                        {...register('username', { required: true })} />
                                    {errors.username && <p className='text-red-500'>E-mail est obligatoire.</p>}
                                    <label htmlFor="passwordLogin">Mot de passe *</label>
                                    <input 
                                        className='focus:outline-none h-9 p-3 text-[#8B8DA5]'
                                        id='passwordLogin'
                                        type='password'
                                        {...register('password', { required: true })} />
                                    {errors.password && <p className='text-red-500'>Mot de passe est obligatoire.</p>}
                                    {response==="Email ou password incorrect" && <p className='text-red-700'>{response}</p>}
                                    <div className='bg-red-500 rounded-full w-fit'>
                                        <input 
                                            className={`border-2 border-black rounded-full w-fit px-6 py-2 uppercase font-bold text-white -translate-x-1 -translate-y-1 ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                            type="submit" 
                                            disabled = {loading ? true : false}
                                            value='Se connecter' />
                                    </div>
                                    <div className='flex flex-row items-center'>
                                        <input
                                            id='check'
                                            type='checkbox'
                                            {...register('isRemember')}
                                            className=''
                                        />
                                        <label htmlFor='check' className='ml-2'>Se souvenir de moi</label>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <NavLink to={'/mon-compte'} className='text-red-600 hover:underline'>Mot de passe perdu ?</NavLink>
                            </div>
                            <div>
                                <NavLink to={'/mon-compte/signup'} className='text-red-600 hover:underline'>Ou s'inscrire par ici</NavLink>
                            </div>
                        </div>
                    </div>
            }
        </>
        
  )
}

export default Signin