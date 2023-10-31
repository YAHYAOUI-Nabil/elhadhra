import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Signin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    return (
        <div className='flex flex-col gap-4 w-full bg-[#F5F5F5] p-8 h-fit'>
            <h2 className='font-bold text-xl'>Se connecter</h2>
            <div>
                <form className='flex flex-col gap-5' onSubmit={handleSubmit((data) => console.log(data))}>
                    <label htmlFor="name">Identifiant ou e-mail *</label>
                    <input 
                        className='focus:outline-none h-9 p-3 text-[#8B8DA5]'
                        id='name' 
                        type='text'
                        {...register('name', { required: true })} />
                    {errors.name && <p>Last name is required.</p>}
                    <label htmlFor="password">Mot de passe *</label>
                    <input 
                        className='focus:outline-none h-9 p-3 text-[#8B8DA5]'
                        id='password'
                        type='password'
                        {...register('password', { required: true })} />
                    {errors.password && <p>Mot de passe est obligatoire.</p>}
                    <div className='bg-red-500 rounded-full w-fit'>
                        <input 
                            className='border-2 border-black rounded-full w-fit px-6 py-2 uppercase font-bold text-white -translate-x-1 -translate-y-1 cursor-pointer'
                            type="submit" 
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
        </div>
  )
}

export default Signin