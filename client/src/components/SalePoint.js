import React from 'react';
import logoElhadhira from '../assets/logo_elhadhira.png'

const SalePoint = () => {
  return (
    <div className="mt-32 mb-4 px-4 flex flex-col gap-3 items-center bg-[#F8EEE2]">
        <div className='-mt-32'>
            <img src='https://livrenoir.fr/wp-content/uploads/2023/07/kiosque.png' alt='Sale Point'/>
        </div>
        <div>
            <p className='text-xl font-bold'>En kiosque</p>
        </div>
        <div>
            <img src={logoElhadhira} alt='elhadhira' />
        </div>
        <div>
            <img src='https://livrenoir.fr/wp-content/uploads/2023/07/kiosque-bas.png' alt='elhadhira' />
        </div>
        <div className='-mb-3'>
            <div className='bg-red-600 rounded-full'>
                <button className='w-full text-white px-3 py-2 border-2 border-black rounded-full uppercase text-xs font-bold translate-x-0.5 translate-y-1'>nos points de ventes</button>
            </div>
        </div>
    </div>
  )
}

export default SalePoint