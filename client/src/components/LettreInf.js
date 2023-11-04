import React from 'react'

const LettreInf = () => {
  return (
    <div className=" p-4 flex flex-col gap-5 bg-[#F8EEE2]">
        <h2 className='text-4xl font-bold'>Lettre d'information</h2>
        <p>Inscrivez-vous gratuitement à notre newsletter matinale.</p>
        <div className='flex flex-col gap-3'>
            <input type='email' placeholder='Email' className='rounded-full border-none px-3 py-2 focus:outline-none' />
            <div className='bg-red-600 rounded-full'>
                <button className='w-full text-white px-3 py-2 border-2 border-black rounded-full uppercase text-xs font-bold translate-x-0.5 translate-y-1'>Recevoir la lettre d'information</button>
            </div>
        </div>
    </div>
  )
}

export default LettreInf