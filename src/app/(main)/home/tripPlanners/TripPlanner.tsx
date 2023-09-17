'use client'
import Button from '@/common/component/Button';
import { products } from '@/common/data/product';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import * as React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface ITripPlannerProps {
}

export default function TripPlanner () {
  return (
    <>
      <div className="py-[140px]">
        <div className="ml-[174px]">
          <div className="flex justify-between items-center gap-[100px]">
            <div className="flex flex-1 justify-start items-start flex-col gap-y-8 max-w-[395px]">
              <h1 className="text-[45px] inline-block border-b-[3px] border-[#FF7757]">Trip Planners</h1>
              <span className="text-[18px] text-[#767E86]">
              20 years from now you will be more disappointed by the things that you didn’t do. 
              Stop regretting and start travelling, start throwing off the bowlines.
              </span>
              <Button text='View all trip plans' className={`rounded-xl ml-5 bg-[#FF7757] relative p-5 text-white before:content-[''] before:absolute before:-top-2.5 before:-left-2.5 before:w-[43px] before:h-[43px] before:bg-[#172432] before:-z-10 after:content-[''] after:absolute after:-bottom-2.5 after:-right-2.5 after:w-[43px] after:h-[43px] after:bg-[#767E86] after:-z-10`}/>
            </div>
            <Swiper
            modules={[Autoplay, Navigation]}
            navigation={true}
            style={{
              width: '100%',
              height: '100%',
            }}
            slidesPerView={3.75}
            speed={1000}
            spaceBetween={32}
            // autoplay={{
            //   delay: 4000,
            // }}
            scrollbar={{
              draggable: true,
            }}
            className='flex-1'
           
          >
            {products.map((plans, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full object-cover ">
                    <div className="relative w-full h-full text-white">
                      <Image
                        src={plans.img}
                        alt={plans.place}
                        className=" placeholder w-full h-[400px] max-h-[400px] rounded-3xl object-cover"
                      />
                      <div className="absolute bottom-0 mb-10 ml-6">
                        <h1 className="text-[28px]"></h1>
                        <h2 className="text-big line-clamp-4 flex items-center gap-4">
                          
                        </h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
