import React from 'react';
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
    const user = useSelector((state) => state.user)
    const email = user?.user?.email || "email personalisé";
    const logoutUser = () => {
        dispatch(logout());
        navigate('/mon-compte');
    }
  return (
    <div className="px-24 pt-10 pb-2">
        <div className='flex flex-row gap-6'>
            <div className='flex flex-col gap-6 w-3/4'>
                <Title title="Mon compte" color="black" />
                <div>
                    <h4>Adresse email</h4>
                    <input type='email' placeholder={email} />
                </div>
                <button onClick={logoutUser}>logout</button>
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