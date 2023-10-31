import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import Title from '../../../components/Title';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Chroniques = () => {
  return (
    <div className='flex flex-col gap-2 my-4'>
        <Title title="chroniques" color="black" />
        <div>
            <Swiper
                slidesPerView={3.5}
                spaceBetween={30}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable:true
                }}
                modules={[Pagination, Autoplay]}
            >
                <SwiperSlide className="mb-10">
                    <div className='flex flex-col items-center justify-center gap-2 p-2'>
                        <img className='w-40 h-40 rounded-full object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/Thibault-de-Montbrial-1024x576.jpg" alt='Nabil' />
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil Yahyaoui</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className='flex flex-col items-center justify-center gap-2 p-2'>
                        <img className='w-40 h-40 rounded-full object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/Erik-Tegner.jpg.webp" alt='Nabil' />
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil Yahyaoui</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className='flex flex-col items-center justify-center gap-2 p-2'>
                        <img className='w-40 h-40 rounded-full object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/XD.jpg.webp" alt='Nabil' />
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil Yahyaoui</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className='flex flex-col items-center justify-center gap-2 p-2'>
                        <img className='w-40 h-40 rounded-full object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/Jules-Laurens-1-1024x1024.jpg" alt='Nabil' />
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil Yahyaoui</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className='flex flex-col items-center justify-center gap-2 p-2'>
                        <img className='w-40 h-40 rounded-full object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/Thibault-de-Montbrial-1024x576.jpg" alt='Nabil' />
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil Yahyaoui</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className='flex flex-col items-center justify-center gap-2 p-2'>
                        <img className='w-40 h-40 rounded-full object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/Erik-Tegner.jpg.webp" alt='Nabil' />
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil Yahyaoui</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className='flex flex-col items-center justify-center gap-2 p-2'>
                        <img className='w-40 h-40 rounded-full object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/XD.jpg.webp" alt='Nabil' />
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil Yahyaoui</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className='flex flex-col items-center justify-center gap-2 p-2'>
                        <img className='w-40 h-40 rounded-full object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/Jules-Laurens-1-1024x1024.jpg" alt='Nabil' />
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil Yahyaoui</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div className='flex justify-end -mt-2'>
            <div className='flex flex-row gap-2 items-center'>
            <NavLink to={'/'} className='uppercase font-semibold text-xl'>toutes les chroniques</NavLink>
            <NavLink to={'/'} className='flex items-center'><MdOutlineKeyboardArrowRight className='h-6 w-6' /></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Chroniques