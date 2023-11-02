import React from 'react'
import Title from '../../../utils/Title'

const Lettre = () => {
  return (
    <div className="-mx-24 px-24 py-5 bg-[#F8EEE2] bg-[url('https://livrenoir.fr/wp-content/uploads/2023/07/newsletter.png')] bg-cover bg-no-repeat bg-center">
        <div className='w-[45%] flex flex-col gap-5'>
            <Title title="Lettre d'information" color="black" />
            <div className='flex flex-col gap-3'>
                <input type='email' placeholder='Entrez votre email ici' className='rounded-full border-none px-6 py-2 focus:outline-none' />
                <div className='bg-red-600 rounded-full'>
                    <button className='w-full text-white px-6 py-2 border-2 border-black rounded-full uppercase text-lg font-bold -translate-x-1.5 -translate-y-1.5'>Recevoir la lettre d'information</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lettre