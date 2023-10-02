import { BgTopFooter } from '@/app/assets';
import * as React from 'react';
import Button from '../component/Button';

export interface ITopFooterProps {}

export default function TopFooter(props: ITopFooterProps) {
  return (
    <div
      style={{ backgroundImage: `url("${BgTopFooter.src}")` }}
      className="w-full h-full relative bg-center bg-no-repeat bg-cover"
    >
      <div className="container mx-auto">
        <div className="w-1/2 py-[210px]">
          <span className="block text-[45px] font-bold text-white mb-5">
            Escape from endless Zoom calls
          </span>
          <span className="block text-white mb-10 text-big">
            Discover the wonders of spending time offline and away from the office with our 3 day
            weekend getaway cabin retreats.
          </span>
          <Button
            text="Find the perfect getaway"
            className="rounded-md bg-white text-title-color px-4 py-2"
          />
        </div>
      </div>
    </div>
  );
}
