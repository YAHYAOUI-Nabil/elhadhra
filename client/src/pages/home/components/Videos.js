import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import Title from "../../../utils/Title";

const Videos = ({videos}) => {
  return (
    <div className='flex flex-col gap-4 my-4'>
        <Title title="vidéos" color="black" />
        <div className='flex flex-row gap-3'>
            <div className='flex flex-col gap-2 w-2/3'>
                <a 
                    href={videos[0]?.videoUrl} 
                    target="_blank"
                    rel="noreferrer">
                    <div style={{ backgroundImage: `url(${videos[0]?.imageUrl})`}} className={`bg-cover bg-no-repeat bg-center h-96 flex justify-center items-center`}>
                        <img src="https://livrenoir.fr/wp-content/uploads/elementor/thumbs/play-icon-qc3pjl2itaw8h186zk9h73cnszqnqm6tt7fgwp5kz8.png" alt="video title"/>
                    </div>
                </a>
                <div>
                    <a 
                        href={videos[0]?.videoUrl} 
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg font-semibold">{videos[0]?.title}</a>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-1/3'>
                <div className='flex flex-col gap-3'>
                    {videos?.slice(1,4).map((video) => (
                        <div key={video?._id} className='flex flex-row gap-2'>
                            <div className='w-1/2'>
                                <a 
                                    href={video?.videoUrl}
                                    target="_blank"
                                    rel="noreferrer">
                                    <div style={{ backgroundImage: `url(${video?.imageUrl})`}} className="bg-cover bg-no-repeat bg-center h-24 flex justify-center items-center">
                                        <img src="https://livrenoir.fr/wp-content/uploads/elementor/thumbs/play-icon-qc3pjl2itaw8h186zk9h73cnszqnqm6tt7fgwp5kz8.png" alt={video?.title}/>
                                    </div>
                                </a>
                            </div>
                            <div className='w-1/2 pt-2'>
                                <a 
                                    href={video?.videoUrl}
                                    target="_blank"
                                    rel="noreferrer"         
                                    className='text-sm leading-4 font-bold'>{video?.title}</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-end'>
                    <div className='flex flex-row gap-2 items-center'>
                        <NavLink to={'/category/videos'} className='uppercase font-semibold text-xl'>toutes les vidéos</NavLink>
                        <NavLink to={'/category/videos'} className='flex items-center'><MdOutlineKeyboardArrowRight className='h-6 w-6' /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Videos