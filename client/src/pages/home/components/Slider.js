import React from 'react';
import Title from '../../../utils/Title';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';



const Slider = ({title, articles}) => {
  const Swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 10
      }
    }
  })
  return (
    <div className='flex flex-col gap-2 my-4 bg-red-900 -mx-24 px-24 py-8'>
      <Title title={title} color="white" />
      <div>
        <Swiper
          slidesPerView={3.5}
          spaceBetween={10}
          
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
        {articles.slice(0,8).map((item) => (
          <SwiperSlide key={item._id} className="mb-10">
              <div className='flex flex-col items-center justify-center'>
                  <NavLink to={`/category/article/${item._id}`}>
                    <img 
                      className='md:w-96 w-full h-48 object-cover' 
                      src={item.imageUrl}
                      alt={item.title} />
                  </NavLink>
                  <div className='flex flex-col gap-1 items-center justify-center bg-white p-3'>
                    <NavLink to={`/category/article/${item._id}`}>
                      <p className='text-center text-sm font-bold leading-4'>{item.title}</p>
                    </NavLink>
                    <div className='border-b-[2px] border-black w-16'></div>
                    <p className='text-center text-sm text-gray-400'>{item.author}</p>
                  </div>
              </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Slider