import React from 'react';
import Title from '../../../utils/Title';
import FlashAct from '../../../components/FlashAct';
import FollowUs from '../../../components/FollowUs';
import LettreInf from '../../../components/LettreInf';
import SalePoint from '../../../components/SalePoint';

const Profile = () => {
    const email = "email personalisé"
  return (
    <div className="px-24 pt-10 pb-2">
        <div className='flex flex-row gap-6'>
            <div className='flex flex-col gap-6 w-3/4'>
                <Title title="Mon compte" color="black" />
                <div>
                    <h4>Adresse email</h4>
                    <input type='email' placeholder={email} />
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