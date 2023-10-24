import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Img from "../../../assets/logo_elhadhira.png";

const Recents = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl' src={Img} alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl' src={Img} alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl' src={Img} alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl' src={Img} alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl' src={Img} alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl' src={Img} alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl' src={Img} alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl' src={Img} alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl' src={Img} alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl' src={Img} alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default Recents