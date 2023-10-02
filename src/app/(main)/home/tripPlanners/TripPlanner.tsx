'use client';
import Button from '@/common/component/Button';
import { products } from '@/common/data/product';
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import * as React from 'react';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './tripplanner.css';

export interface ITripPlannerProps {}

export default function TripPlanner() {
  return (
    <>
      <div className="py-[140px] trip-planner">
        <div className="ml-[174px]">
          <div className="flex justify-between items-end gap-[100px]">
            <div className="flex flex-1 justify-start items-start flex-col gap-y-8 max-w-[395px]">
              <h1 className="text-[45px] inline-block border-b-[3px] border-[#FF7757]">
                Trip Planners
              </h1>
              <span className="text-[18px] text-[#767E86]">
                20 years from now you will be more disappointed by the things that you didn’t do.
                Stop regretting and start travelling, start throwing off the bowlines.
              </span>
              <Button
                text="View all trip plans"
                className={`rounded-xl ml-5 bg-[#FF7757] relative p-5 text-white before:content-[''] before:absolute before:-top-2.5 before:-left-2.5 before:w-[43px] before:h-[43px] before:bg-[#172432] before:-z-10 after:content-[''] after:absolute after:-bottom-2.5 after:-right-2.5 after:w-[43px] after:h-[43px] after:bg-[#767E86] after:-z-10`}
              />
            </div>
            <Swiper
             
              style={{
                width: '100%',
                height: '100%',
              }}
              slidesPerView={3.75}
              speed={1000}
              spaceBetween={32}
              className="flex-1"
              
            >
              {products.map((plans, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full image_tripplane">
                      <div className="relative w-full h-full text-white flex items-end flex-col justify-end gap-y-5 ">
                        <Image
                          src={plans.img}
                          alt={plans.place}
                          className=" placeholder w-full h-full max-h-[400px] rounded-3xl object-cover z-10"
                        />
                        <div className="hidden image_tripplane--content absolute top-0 left-0 w-full mt-5">
                          <div className="w-full text-black flex flex-col gap-y-3">
                            <div className="flex justify-between items-center">
                              <div className="uppercase">Guided Tour</div>
                              <p>${plans.price}/Day</p>
                            </div>
                            <p className="text-[28px]">{plans.place}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex justify-between items-center gap-1">
                                <FontAwesomeIcon icon={faStar} className="text-[#FFC107]" />
                                <FontAwesomeIcon icon={faStar} className="text-[#FFC107]" />
                                <FontAwesomeIcon icon={faStar} className="text-[#FFC107]" />
                                <FontAwesomeIcon icon={faStar} className="text-[#FFC107]" />
                                <FontAwesomeIcon icon={faStar} className="text-[#FFC107]" />
                              </div>
                              <p>7 Days tour</p>
                            </div>
                          </div>
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
