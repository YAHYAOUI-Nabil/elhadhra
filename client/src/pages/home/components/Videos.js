import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import Title from "../../../components/Title";

const Videos = () => {
  return (
    <div className='flex flex-col gap-4 my-4'>
        <Title title="vidéos" color="black" />
        <div className='flex flex-row gap-3'>
            <div className='flex flex-col gap-2 w-2/3'>
                <a href='https://www.youtube.com/watch?v=1ZqzVPVS8FI'>
                    <div className="bg-[url('https://livrenoir.fr/wp-content/uploads/2023/10/IMG-0224-SITE-1024x768.jpg')] bg-cover bg-no-repeat bg-center h-96 flex justify-center items-center">
                        <a href="https://www.youtube.com/watch?v=1ZqzVPVS8FI">
                            <img src="https://livrenoir.fr/wp-content/uploads/elementor/thumbs/play-icon-qc3pjl2itaw8h186zk9h73cnszqnqm6tt7fgwp5kz8.png" alt="video title"/>
                        </a>
                    </div>
                </a>
                <div>
                    <NavLink to={'/'} className="text-lg font-semibold">Livre Noir a infiltré Utopia 56, l'asso pro-migrants</NavLink>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-1/3'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row gap-3'>
                        <div className='w-1/2'>
                            <a href='https://www.youtube.com/watch?v=1ZqzVPVS8FI'>
                                <div className="bg-[url('https://livrenoir.fr/wp-content/uploads/2023/10/milices-citoyennes-sondage-peine-de-mort-insecurite-.jpg')] bg-cover bg-no-repeat bg-center h-24 flex justify-center items-center">
                                    <a href="https://www.youtube.com/watch?v=1ZqzVPVS8FI">
                                        <img src="https://livrenoir.fr/wp-content/uploads/elementor/thumbs/play-icon-qc3pjl2itaw8h186zk9h73cnszqnqm6tt7fgwp5kz8.png" alt="video title"/>
                                    </a>
                                </div>
                            </a>
                        </div>
                        <div className='w-1/2 pt-2'>
                            <p className='text-sm leading-4 font-bold'>Georges Fenech : « Les délinquants n'ont peur ni de la police ni de la justice ! »</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <div className='w-1/2'>
                            <a href='https://www.youtube.com/watch?v=1ZqzVPVS8FI'>
                                <div className="bg-[url('https://livrenoir.fr/wp-content/uploads/2023/10/pexels-ahmed-akacha-15803788-1024x683.jpg')] bg-cover bg-no-repeat bg-center h-24 flex justify-center items-center">
                                    <a href="https://www.youtube.com/watch?v=1ZqzVPVS8FI">
                                        <img src="https://livrenoir.fr/wp-content/uploads/elementor/thumbs/play-icon-qc3pjl2itaw8h186zk9h73cnszqnqm6tt7fgwp5kz8.png" alt="video title"/>
                                    </a>
                                </div>
                            </a>
                        </div>
                        <div className='w-1/2 pt-2'>
                            <p className='text-sm leading-4 font-bold'>Georges Fenech : « Les délinquants n'ont peur ni de la police ni de la justice ! »</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <div className='w-1/2'>
                            <a href='https://www.youtube.com/watch?v=1ZqzVPVS8FI'>
                                <div className="bg-[url('https://livrenoir.fr/wp-content/uploads/2023/10/pexels-basil-mk-247040-1024x683.jpg')] bg-cover bg-no-repeat bg-center h-24 flex justify-center items-center">
                                    <a href="https://www.youtube.com/watch?v=1ZqzVPVS8FI">
                                        <img src="https://livrenoir.fr/wp-content/uploads/elementor/thumbs/play-icon-qc3pjl2itaw8h186zk9h73cnszqnqm6tt7fgwp5kz8.png" alt="video title"/>
                                    </a>
                                </div>
                            </a>
                        </div>
                        <div className='w-1/2 pt-2'>
                            <p className='text-sm leading-4 font-bold'>Georges Fenech : « Les délinquants n'ont peur ni de la police ni de la justice ! »</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div className='flex flex-row gap-2 items-center'>
                        <NavLink to={'/'} className='uppercase font-semibold text-xl'>toutes les vidéos</NavLink>
                        <NavLink to={'/'} className='flex items-center'><MdOutlineKeyboardArrowRight className='h-6 w-6' /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Videos