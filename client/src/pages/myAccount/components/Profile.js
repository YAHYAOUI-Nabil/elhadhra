import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Title from '../../../utils/Title';
import FlashAct from '../../../components/FlashAct';
import FollowUs from '../../../components/FollowUs';
import LettreInf from '../../../components/LettreInf';
import SalePoint from '../../../components/SalePoint';
import DeleteAccountDialog from './DeleteAccountDialog';
import EditInfosForm from './EditInfosForm';

const Profile = () => {
    const user = useSelector((state) => state.user.user)
    const [isEnable, setIsEnable] = useState(false)
    const [openModal, setOpenModal] = useState(false)
   

    
  return (
    <div className="xl:px-24 lg:px-16 md:px-8 px-4 pt-10 pb-2">
        <div className='flex lg:flex-row flex-col gap-6'>
            <div className='flex flex-col gap-6 lg:w-3/4'>
                <Title title="Mon compte" color="black" />
                {openModal && <DeleteAccountDialog email={user.email} setOpenModal={setOpenModal} />}
                <div className='flex flex-col items-center gap-8 lg:p-6'> 
                    <div className='flex flex-col gap-3 border-2 border-gray-100 rounded-2xl p-6 shadow-md shadow-gray-300 lg:w-[500px] w-full'>
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
                    <div className='flex flex-col gap-3 border-2 border-gray-100 rounded-2xl p-6 shadow-md shadow-gray-300 lg:w-[500px] w-full'>
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

                    <EditInfosForm user={user} />
                        
                    <div className='flex flex-col gap-3 border-2 border-gray-100 rounded-2xl p-6 shadow-md shadow-gray-300 lg:w-[500px] w-full'>
                        <p className='text-lg font-semibold'>Supprimer mon compte</p>
                        <p>Vous allez perdre votre compte définitivement dés que vous confirmez la suppression de votre compte.</p>
                        <div className='flex justify-end'>
                            <button
                                className='text-white font-semibold bg-red-600 px-2 py-1 rounded-md' 
                                onClick={() => setOpenModal(true)}
                                >
                                    Supprimer mon compte
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/4 flex flex-col gap-4 lg:mb-0 mb-2'>
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