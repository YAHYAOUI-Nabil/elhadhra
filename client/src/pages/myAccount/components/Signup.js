import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";

import { signup } from "../../../api"

const Signup = () => {
    const { loading } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const submit = (data) => {
        dispatch(signup(data))
    }
    
    return (
        <div className='flex flex-col gap-4 w-full bg-[#F5F5F5] p-8'>
            <h2 className='font-bold text-xl'>S'enregistrer</h2>
            <div>
                <form className='flex flex-col gap-5' onSubmit={handleSubmit(submit)}>
                    <label htmlFor="identifier">Identifiant *</label>
                    <input 
                        className='focus:outline-none h-9 p-3 text-[#8B8DA5]'
                        id='identifier' 
                        type='text'
                        {...register('identifier', { required: true })} />
                    {errors.identifier && <p className='text-red-500'>Identifiant est obligatoire.</p>}
                    <label htmlFor="username">E-mail *</label>
                    <input 
                        className='focus:outline-none h-9 p-3 text-[#8B8DA5]'
                        id='username'
                        type='email'
                        {...register('username', { required: true , pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'svp entrer un email valide.',
                        }})} />
                    {errors.username?.message && <p className='text-red-500'>{errors.username?.message}</p>}
                    <label htmlFor="password">Mot de passe *</label>
                    <input 
                        className='focus:outline-none h-9 p-3 text-[#8B8DA5]'
                        id='password' 
                        type='password'
                        {...register('password', { required: true, pattern: {
                            value: /^[a-zA-Z0-9]{8,}/,
                            message: 'minimum 08 caractères',
                        } })} />
                    {errors.password?.message && <p className='text-red-500'>{errors.password?.message}</p>}
                    <label htmlFor="firstName">Prénom *</label>
                    <input 
                        className='focus:outline-none h-9 p-3 text-[#8B8DA5]'
                        id='firstName'
                        type='text'
                        {...register('firstName', { required: true })} />
                    {errors.firstName && <p className='text-red-500'>Prénom est obligatoire.</p>}
                    <label htmlFor="lastName">Nom *</label>
                    <input 
                        className='focus:outline-none h-9 p-3 text-[#8B8DA5]'
                        id='lastName' 
                        type='text'
                        {...register('lastName', { required: true })} />
                    {errors.lastName && <p className='text-red-500'>Nom est obligatoire.</p>}
                    <label htmlFor="phone">Téléphone *</label>
                    <input 
                        className='focus:outline-none h-9 p-3 text-[#8B8DA5]'
                        id='phone'
                        type='tel'
                        {...register('phone', { required: true })} />
                    {errors.phone && <p className='text-red-500'>Téléphone est obligatoire.</p>}
                    <div className='flex flex-row items-start'>
                        <input
                            id='policy'
                            type='checkbox'
                            {...register('isRemember')}
                            className=''
                        />
                        <label htmlFor='policy' className='ml-2'>J'accepte d'être tenu informé de vos offres spéciales par le biais de communications commerciales (facultatif)</label>
                    </div>
                    <div>
                        <p className=''>Vos données personnelles seront utilisées pour vous accompagner au cours de votre visite du site web, gérer l’accès à votre compte, et pour d’autres raisons décrites dans notre <span className='text-red-500'>politique de confidentialité</span>.</p>
                    </div>
                    <div className='bg-red-500 rounded-full w-fit'>
                        <input 
                            className={`border-2 border-black rounded-full w-fit px-6 py-2 uppercase font-bold text-white -translate-x-1 -translate-y-1 ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            type="submit" 
                            disabled = {loading ? true : false}
                            value="S'enregistrer" />
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Signup