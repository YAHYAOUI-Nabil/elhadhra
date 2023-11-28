import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";

import { editInfos } from "../../../api"

const EditInfosForm = ({user}) => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const submit = (data) => {
        dispatch(editInfos(data))
    }
    
    return (
        <div className='flex flex-col gap-3 border-2 border-gray-100 rounded-2xl p-6 shadow-md shadow-gray-300 w-[500px]'>
            <p className='text-lg font-semibold'>Informations personnelles</p>
            <form className='flex flex-col gap-3' onSubmit={handleSubmit(submit)}>
                <label htmlFor="identifier" className='text-sm font-semibold'>Identifiant</label>
                <input 
                    className='text-slate-600 border-2 border-gray-200 outline-none p-2 rounded-md'
                    id='identifier' 
                    type='text'
                    value={user.identifier}
                    {...register('identifier', { required: true }, {onChange: (e) => console.log(e)})} />
                {errors.identifier && <p>Identifiant est obligatoire.</p>}
                <label htmlFor="firstName" className='text-sm font-semibold'>Prénom</label>
                <input 
                    className='text-slate-600 border-2 border-gray-200 outline-none p-2 rounded-md'
                    id='firstName'
                    type='text'
                    value={user.firstName}
                    {...register('firstName', { required: true })} />
                {errors.firstName && <p>Prénom est obligatoire.</p>}
                <label htmlFor="lastName" className='text-sm font-semibold'>Nom</label>
                <input 
                    className='text-slate-600 border-2 border-gray-200 outline-none p-2 rounded-md'
                    id='lastName' 
                    type='text'
                    value={user.lastName}
                    {...register('lastName', { required: true })} />
                {errors.lastName && <p>Nom est obligatoire.</p>}
                <label htmlFor="phone" className='text-sm font-semibold'>Téléphone</label>
                <input 
                    className='text-slate-600 border-2 border-gray-200 outline-none p-2 rounded-md'
                    id='phone'
                    type='tel'
                    value={user.phone}
                    {...register('phone', { required: true })} />
                {errors.phone && <p>Téléphone est obligatoire.</p>}
                <div className='flex justify-end'>
                    <input 
                        className='text-white font-semibold bg-blue-500 px-2 py-1 rounded-md'
                        type="submit" 
                        value="Enregistrer" />
                </div>
            </form>
        </div>
  )
}

export default EditInfosForm