import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsInstagram, BsYoutube, BsTwitter, BsTelegram, BsXLg } from "react-icons/bs";


import logo from '../assets/logo_elhadhira.png'
import { journal, studio, legal, apropos } from '../data/data'
import ItemsMenu from '../utils/ItemsMenu'
import { useStateContext } from '../context/ContextProvider';

const SideBar = () => {
    const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <div className='bg-black/80 w-screen h-screen flex'>
        <div className='relative flex flex-col gap-6 bg-black overflow-y-scroll scrollbar-hide w-[25%] h-screen p-6'>
            <div 
                onClick={() => setActiveMenu(!activeMenu)}
                className='absolute flex items-center justify-center w-6 h-6 cursor-pointer bg-white hover:bg-red-600 hover:text-white rounded-full top-2 right-2'>
                <span className='rounded-full'>
                    <BsXLg className='w-4 h-4' />
                </span>
            </div>
            <div className="flex flex-col text-white uppercase">
                <NavLink to="/" className="font-bold text-5xl">
                    elhad<span className="text-red-600">hira</span>
                </NavLink>
            </div>
            <div className='flex flex-row gap-2 items-center text-white'>
                <NavLink to="/mon-compte">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </NavLink>
                <NavLink to="/mon-compte" className="uppercase text-2xl font-bold">
                    mon compte
                </NavLink>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='bg-red-600 rounded-full'>
                    <button className='w-full text-white px-3 py-2 border-2 border-white rounded-full uppercase text-sm font-bold -translate-x-0.5 -translate-y-1'>S'abonner</button>
                </div>
                <div className='bg-red-600 rounded-full'>
                    <button className='w-full text-white px-3 py-2 border-2 border-white rounded-full uppercase text-sm font-bold -translate-x-0.5 -translate-y-1'>Faire un don</button>
                </div>
                <div className='bg-red-600 rounded-full'>
                    <button className='w-full text-white px-3 py-2 border-2 border-white rounded-full uppercase text-sm font-bold -translate-x-0.5 -translate-y-1'>nos points de vente</button>
                </div>
            </div>
            <div className="border-2 border-red-600 w-full">
                <NavLink to="/" className="w-full">
                    <img src={logo} alt="ELHADHIRA" />
                </NavLink>
            </div>
            <div className='text-white'>
                <NavLink to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </NavLink>
            </div>
            <ItemsMenu title='le journal' items={journal} />
            <ItemsMenu title='le studio' items={studio} />
            <ItemsMenu title='à propos' items={apropos} />
            <ItemsMenu title='légal' items={legal} />
            <div className='flex flex-col gap-4'>
                <h2 className='text-lg uppercase text-gray-300'>suivez-nous</h2>
                <div className="flex gap-8">
                    <a 
                        href="https://www.youtube.com/@edenmedEtalieTunisie"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:opacity-80">
                        <BsInstagram className="w-6 h-6" />
                        </a>
                    <a 
                        href="https://www.youtube.com/@edenmedEtalieTunisie"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:opacity-80">
                        <BsYoutube className="w-6 h-6" />
                        </a>
                    <a 
                        href="https://www.youtube.com/@edenmedEtalieTunisie"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:opacity-80">
                        <BsTelegram className="w-6 h-6" />
                        </a>
                    <a 
                        href="https://www.youtube.com/@edenmedEtalieTunisie"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:opacity-80">
                        <BsTwitter className="w-6 h-6" />
                        </a>
                    </div>
            </div>
        </div>
        <div className='h-screen w-[75%]' onClick={() => setActiveMenu(false)}></div>
    </div>
  )
}

export default SideBar