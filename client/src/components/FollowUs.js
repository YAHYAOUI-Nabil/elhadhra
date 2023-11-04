import React from 'react';
import { BsInstagram, BsYoutube, BsTwitter, BsTelegram } from "react-icons/bs";


const FollowUs = () => {
  return (
    <div className='bg-[#F8EEE2] p-4 flex flex-col gap-5'>
        <h2 className='text-4xl font-bold'>Suivre ELHADHIRA</h2>
        <div className="flex gap-8">
          <a 
            href="https://www.youtube.com/@edenmedEtalieTunisie"
            target="_blank"
            rel="noreferrer"
            className="text-red-600 hover:opacity-80">
              <BsInstagram className="w-6 h-6" />
            </a>
          <a 
            href="https://www.youtube.com/@edenmedEtalieTunisie"
            target="_blank"
            rel="noreferrer"
            className="text-red-600 hover:opacity-80">
              <BsYoutube className="w-6 h-6" />
            </a>
          <a 
            href="https://www.youtube.com/@edenmedEtalieTunisie"
            target="_blank"
            rel="noreferrer"
            className="text-red-600 hover:opacity-80">
              <BsTelegram className="w-6 h-6" />
            </a>
          <a 
            href="https://www.youtube.com/@edenmedEtalieTunisie"
            target="_blank"
            rel="noreferrer"
            className="text-red-600 hover:opacity-80">
              <BsTwitter className="w-6 h-6" />
            </a>
        </div>
    </div>
  )
}

export default FollowUs