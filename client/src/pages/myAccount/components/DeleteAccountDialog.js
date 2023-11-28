import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { deleteAccount } from '../../../api'


const DeleteAccountDialog = (props) => {
    const {email, setOpenModal} = props
    const dispatch = useDispatch();
    const {
        register,
        setError,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    const submit = (data) => {
        if(data.verification === email) {
            dispatch(deleteAccount());
            setOpenModal(false)
        } else {
            setError('verification', {type: "focus"}, { shouldFocus: true })
        }
    }
    return (
        <div className='fixed top-1/4 left-1/4 z-[999999999999999] w-1/2 p-8 bg-gray-200 rounded-xl shadow-xl'>
            <div className='absolute top-1 right-1 flex items-center justify-center bg-white rounded-full w-6 h-6'>
                <button 
                    onClick={() => setOpenModal(false)}
                    className='flex items-center justify-center rounded-full w-6 h-6'>
                    <MdOutlineClose />
                </button>
            </div>
            <div>
                <form className='flex flex-col gap-5' onSubmit={handleSubmit(submit)}>
                    <label htmlFor="verification">Etes-vous sûr de supprimer votre compte? Si vous supprimez votre compte vous perdrerez votre profil ainsi vos commentaires. Saisir <span className='text-lg font-semibold'>{email}</span> pour supprimer votre compte</label>
                    <input 
                        className='focus:outline-none rounded-md h-9 px-6 py-2 text-[#8B8DA5]'
                        id='verification' 
                        type='text'
                        {...register('verification', { required: true })} />
                    {errors.verification && <p className='text-red-500'>Vous devez re-écrire votre addresse email pour procéder la suppression.</p>}
                    
                    <div className='bg-red-500 rounded-md w-fit'>
                        <input 
                            className='rounded-md w-fit px-6 py-2 uppercase font-bold text-white cursor-pointer'
                            type="submit" 
                            value='Supprimer mon compte' />
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default DeleteAccountDialog