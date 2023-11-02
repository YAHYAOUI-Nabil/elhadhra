import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import Title from '../../../utils/Title';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Tribunes = () => {
  return (
    <div className='flex flex-col gap-2 my-4 -ml-24 pl-24 py-3 pr-3 bg-[#F8EEE2]'>
        <Title title="Tribunes" color="black" />
        <div className='mt-4'>
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
                        <p className='text-center text-sm font-bold mb-2'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel, Nabil.Y: let's live in peaceful world without israel</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className='flex flex-col items-center justify-center gap-2 p-2'>
                        <p className='text-center text-sm font-bold mb-2'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel, Nabil.Y: let's live in peaceful world without israel</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className='flex flex-col items-center justify-center gap-2 p-2'>
                        <p className='text-center text-sm font-bold mb-2'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel, Nabil.Y: let's live in peaceful world without israel</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className='flex flex-col items-center justify-center gap-2 p-2'>
                        <p className='text-center text-sm font-bold mb-2'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel, Nabil.Y: let's live in peaceful world without israel</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className='flex flex-col items-center justify-center gap-2 p-2'>
                        <p className='text-center text-sm font-bold mb-2'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel, Nabil.Y: let's live in peaceful world without israel</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className='flex flex-col items-center justify-center gap-2 p-2'>
                        <p className='text-center text-sm font-bold mb-2'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel, Nabil.Y: let's live in peaceful world without israel</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className='flex flex-col items-center justify-center gap-2 p-2'>
                        <p className='text-center text-sm font-bold mb-2'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel, Nabil.Y: let's live in peaceful world without israel</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-10">
                    <div className='flex flex-col items-center justify-center gap-2 p-2'>
                        <p className='text-center text-sm font-bold mb-2'>Nabil.Y: let's live in peaceful world without israel</p>
                        <div className='border-b-[2px] border-black w-16'></div>
                        <p className='text-center text-sm'>Nabil.Y: let's live in peaceful world without israel, Nabil.Y: let's live in peaceful world without israel</p>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
        <div className='flex justify-end -mt-2'>
            <div className='flex flex-row gap-2 items-center'>
            <NavLink to={'/'} className='uppercase font-semibold text-xl'>toutes les tribunes</NavLink>
            <NavLink to={'/'} className='flex items-center'><MdOutlineKeyboardArrowRight className='h-6 w-6' /></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Tribunes