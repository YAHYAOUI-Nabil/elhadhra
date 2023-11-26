import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../api'

import Title from '../../../utils/Title';
import FlashAct from '../../../components/FlashAct';
import FollowUs from '../../../components/FollowUs';
import LettreInf from '../../../components/LettreInf';
import SalePoint from '../../../components/SalePoint';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user)
    const [isEnable, setIsEnable] = useState(false)
    
    const logoutUser = () => {
        dispatch(logout());
        navigate('/mon-compte');
    }
  return (
    <div className="px-24 pt-10 pb-2">
        <div className='flex flex-row gap-6'>
            <div className='flex flex-col gap-6 w-3/4'>
                <Title title="Mon compte" color="black" />
                <div className='flex flex-col items-center gap-8 p-6'> 
                    <div className='flex flex-col gap-3 border-2 border-gray-100 rounded-2xl p-6 shadow-md shadow-gray-300 w-[500px]'>
                        <p className='text-lg font-semibold'>Addresse Email</p>
                        <input 
                            type='email' 
                            value={user.email}
                            disabled = {isEnable ? false : true}
                            className={`text-slate-600 bg-gray-200 outline-none p-2 rounded-md ${isEnable ? 'cursor-auto' : 'cursor-not-allowed'}`} />
                        <button 
                            onClick={() => setIsEnable(!isEnable)}
                            className='text-white font-semibold bg-blue-500 px-2 py-1 rounded-md w-fit' 
                            >
                                Changer l'addresse email
                        </button>
                    </div>
                    <div className='flex flex-col gap-3 border-2 border-gray-100 rounded-2xl p-6 shadow-md shadow-gray-300 w-[500px]'>
                        <p className='text-lg font-semibold mb-2'>Mot de passe</p>
                        <label className='text-sm font-semibold'>Mot de passe actuel</label>
                        <input 
                            type='password' 
                            value={user.email} 
                            className='text-slate-600 border-2 border-gray-200 outline-none p-2 rounded-md' />
                        <label className='text-sm font-semibold'>Nouveau Mot de passe</label>
                        <input 
                            type='password' 
                            className='text-slate-600 border-2 border-gray-200 outline-none p-2 rounded-md' />
                        <label className='text-sm font-semibold'>confirmation Mot de passe</label>
                        <input 
                            type='password' 
                            className='text-slate-600 border-2 border-gray-200 outline-none p-2 rounded-md' />
                        <div className='flex justify-end'>
                            <button
                                className='text-white font-semibold bg-blue-500 px-2 py-1 rounded-md' 
                                onClick={()=>console.log("compte supprimer")}
                                >
                                    Enregistrer
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 border-2 border-gray-100 rounded-2xl p-6 shadow-md shadow-gray-300 w-[500px]'>
                        <p className='text-lg font-semibold'>Informations personnelles</p>
                        <form className='flex flex-col gap-3'>
                            <label className='text-sm font-semibold'>Pseudo</label>
                            <input 
                                type='text' 
                                value={user.pseudo}
                                className='text-slate-600 border-2 border-gray-200 outline-none p-2 rounded-md' />
                            <label className='text-sm font-semibold'>Prénom</label>
                            <input 
                                type='text' 
                                value={user.firstName}
                                className='text-slate-600 border-2 border-gray-200 outline-none p-2 rounded-md' />
                            <label className='text-sm font-semibold'>Nom</label>
                            <input 
                                type='text' 
                                value={user.lastName}
                                className='text-slate-600 border-2 border-gray-200 outline-none p-2 rounded-md' />
                            <label className='text-sm font-semibold'>Téléphone</label>
                            <input 
                                type='tel' 
                                value={user.phone}
                                className='text-slate-600 border-2 border-gray-200 outline-none p-2 rounded-md' />
                            <div className='flex justify-end'>
                                <button
                                    className='text-white font-semibold bg-blue-500 px-2 py-1 rounded-md' 
                                    onClick={()=>console.log("compte supprimer")}
                                    >
                                        Enregistrer
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='flex flex-col gap-3 border-2 border-gray-100 rounded-2xl p-6 shadow-md shadow-gray-300 w-[500px]'>
                        <p className='text-lg font-semibold'>Supprimer mon compte</p>
                        <p>Vous allez perdre votre compte définitivement dés que vous confirmez la suppression de votre compte.</p>
                        <div className='flex justify-end'>
                            <button
                                className='text-white font-semibold bg-red-600 px-2 py-1 rounded-md' 
                                onClick={()=>console.log("compte supprimer")}
                                >
                                    Supprimer mon compte
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/4 flex flex-col gap-4'>
                <SalePoint />
                <FlashAct />
                <LettreInf />
                <FollowUs />
            </div>
        </div>
    </div>
  )
}

export default Profile