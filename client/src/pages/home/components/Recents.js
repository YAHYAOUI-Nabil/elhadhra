import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

const Recents = ({articles}) => {
  return (
    <div className='md:flex hidden'>
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
        {articles.slice(0,10).map((item) => (
            <SwiperSlide key={item._id} className="">
                <div className='flex flex-col items-center justify-center gap-4 p-2'>
                    <NavLink to={`/category/article/${item._id}`}>
                      <img 
                        className='lg:w-20 lg:h-20 w-12 h-12 rounded-2xl object-cover' 
                        src={item.imageUrl} 
                        alt={item.title} />
                    </NavLink>
                    <NavLink to={`/category/article/${item._id}`}>
                      <p className='text-center text-xs'>{item.title}</p>
                    </NavLink>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


export default Recents