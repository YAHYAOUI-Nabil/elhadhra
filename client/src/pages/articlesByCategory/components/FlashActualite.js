import React from 'react'

const FlashActualite = () => {
  return (
    <div className='bg-[#F8EEE2] p-4 flex flex-col gap-5'>
        <p className='text-2xl font-bold'>Flash actualité</p>
        <div className='flex flex-row gap-3'>
        <div>
            <p className='whitespace-nowrap text-sm'>24 Oct</p>
            <p className='text-sm'>10h07</p>
        </div>
        <div>
            <p className='text-sm'>Yaël Braun-Pivet contre J-L. Mélenchon : jeu politique ou antisémitisme ?</p>
        </div>
        </div>
        <div className='flex flex-row gap-3'>
        <div>
            <p className='whitespace-nowrap text-sm'>24 Oct</p>
            <p className='text-sm'>10h07</p>
        </div>
        <div>
            <p className='text-sm'>Yaël Braun-Pivet contre J-L. Mélenchon : jeu politique ou antisémitisme ?</p>
        </div>
        </div>
    </div>
  )
}

export default FlashActualite