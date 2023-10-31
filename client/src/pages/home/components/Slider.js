import React from 'react';
import Title from '../../../components/Title';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Slider = ({title}) => {
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
          <SwiperSlide className="mb-10">
              <div className='flex flex-col items-center justify-center'>
                  <img className='w-96 h-60 object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/10/von-der-leyen.jpg" alt='Nabil' />
                  <div className='flex flex-col gap-1 items-center justify-center bg-white p-3'>
                    <p className='text-center text-sm font-bold leading-4'>Nabil.Y: let's live in peaceful world without israel</p>
                    <div className='border-b-[2px] border-black w-16'></div>
                    <p className='text-center text-sm text-gray-400'>Nabil Yahyaoui</p>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10">
              <div className='flex flex-col items-center justify-center'>
                  <img className='w-96 h-60 object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/florence-bergeaud-blackler-grand-entretien-islamisme-menace-freriste-1024x576.jpg" alt='Nabil' />
                  <div className='flex flex-col gap-1 items-center justify-center bg-white p-3'>
                    <p className='text-center text-sm font-bold leading-4'>Nabil.Y: let's live in peaceful world without israel</p>
                    <div className='border-b-[2px] border-black w-16'></div>
                    <p className='text-center text-sm text-gray-400'>Nabil Yahyaoui</p>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10">
              <div className='flex flex-col items-center justify-center'>
                  <img className='w-96 h-60 object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/10/photo1697102159-1-1024x682.jpeg" alt='Nabil' />
                  <div className='flex flex-col gap-1 items-center justify-center bg-white p-3'>
                    <p className='text-center text-sm font-bold leading-4'>Nabil.Y: let's live in peaceful world without israel</p>
                    <div className='border-b-[2px] border-black w-16'></div>
                    <p className='text-center text-sm text-gray-400'>Nabil Yahyaoui</p>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10">
              <div className='flex flex-col items-center justify-center'>
                  <img className='w-96 h-60 object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/10/israel-palestine-gaza-guerre-blesses-bilan-1024x1024.jpg" alt='Nabil' />
                  <div className='flex flex-col gap-1 items-center justify-center bg-white p-3'>
                    <p className='text-center text-sm font-bold leading-4'>Nabil.Y: let's live in peaceful world without israel</p>
                    <div className='border-b-[2px] border-black w-16'></div>
                    <p className='text-center text-sm text-gray-400'>Nabil Yahyaoui</p>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10">
              <div className='flex flex-col items-center justify-center'>
                  <img className='w-96 h-60 object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/10/von-der-leyen.jpg" alt='Nabil' />
                  <div className='flex flex-col gap-1 items-center justify-center bg-white p-3'>
                    <p className='text-center text-sm font-bold leading-4'>Nabil.Y: let's live in peaceful world without israel</p>
                    <div className='border-b-[2px] border-black w-16'></div>
                    <p className='text-center text-sm text-gray-400'>Nabil Yahyaoui</p>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10">
              <div className='flex flex-col items-center justify-center'>
                  <img className='w-96 h-60 object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/09/florence-bergeaud-blackler-grand-entretien-islamisme-menace-freriste-1024x576.jpg" alt='Nabil' />
                  <div className='flex flex-col gap-1 items-center justify-center bg-white p-3'>
                    <p className='text-center text-sm font-bold leading-4'>Nabil.Y: let's live in peaceful world without israel</p>
                    <div className='border-b-[2px] border-black w-16'></div>
                    <p className='text-center text-sm text-gray-400'>Nabil Yahyaoui</p>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10">
              <div className='flex flex-col items-center justify-center'>
                  <img className='w-96 h-60 object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/10/photo1697102159-1-1024x682.jpeg" alt='Nabil' />
                  <div className='flex flex-col gap-1 items-center justify-center bg-white p-3'>
                    <p className='text-center text-sm font-bold leading-4'>Nabil.Y: let's live in peaceful world without israel</p>
                    <div className='border-b-[2px] border-black w-16'></div>
                    <p className='text-center text-sm text-gray-400'>Nabil Yahyaoui</p>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10">
              <div className='flex flex-col items-center justify-center'>
                  <img className='w-96 h-60 object-cover' src="https://livrenoir.fr/wp-content/uploads/2023/10/israel-palestine-gaza-guerre-blesses-bilan-1024x1024.jpg" alt='Nabil' />
                  <div className='flex flex-col gap-1 items-center justify-center bg-white p-3'>
                    <p className='text-center text-sm font-bold leading-4'>Nabil.Y: let's live in peaceful world without israel</p>
                    <div className='border-b-[2px] border-black w-16'></div>
                    <p className='text-center text-sm text-gray-400'>Nabil Yahyaoui</p>
                  </div>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Slider