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

const Tribunes = ({title, articles}) => {
    const data= articles.filter((item) => item.category === "politique")

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
                {data.slice(0,8).map((item) => (
                    <SwiperSlide key={item._id} className="mb-10">
                        <div className='flex flex-col items-center justify-center gap-2 p-2'>
                            <NavLink to={`/category/article/${item._id}`}>
                                <p className='text-center text-sm font-bold mb-2'>{item.title}</p>
                            </NavLink>
                            <div className='border-b-[2px] border-black w-16'></div>
                            <p className='text-center text-sm'>{item.description.slice(0,130)}...</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        <div className='flex justify-end -mt-2'>
            <div className='flex flex-row gap-2 items-center'>
            <NavLink to={`/category/politique`} className='uppercase font-semibold text-xl'>toutes les tribunes</NavLink>
            <NavLink to={`/category/politique`} className='flex items-center'><MdOutlineKeyboardArrowRight className='h-6 w-6' /></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Tribunes