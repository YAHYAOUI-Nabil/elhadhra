import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

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
                <img className='w-16 h-16 rounded-2xl object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/10/livre-noir-a-infiltre-utopia-56-lasso-pro-migrants-300x169.jpg" alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/utopia-1-300x169.jpg" alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/03_LivreNoir_SiteWeb_Plan-de-travail-1-copie-29-300x169.jpg" alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/guyane-departement-enquete-traffic-richesses-300x169.jpg" alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/10/georges-fenech-les-delinquants-n-ont-peur-ni-de-la-police-ni-de-la-justice-300x169.jpg" alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/10/livre-noir-a-infiltre-utopia-56-lasso-pro-migrants-300x169.jpg" alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/utopia-1-300x169.jpg" alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/03_LivreNoir_SiteWeb_Plan-de-travail-1-copie-29-300x169.jpg" alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/guyane-departement-enquete-traffic-richesses-300x169.jpg" alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className='flex flex-col items-center justify-center gap-4 p-2'>
                <img className='w-16 h-16 rounded-2xl object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/10/georges-fenech-les-delinquants-n-ont-peur-ni-de-la-police-ni-de-la-justice-300x169.jpg" alt='Nabil' />
                <p className='text-center text-xs'>Nabil.Y: let's live in peaceful world without israel</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default Recents