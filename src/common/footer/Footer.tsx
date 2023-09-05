import * as React from 'react';
import Input from '../component/Input';
import Button from '../component/Button';
import { Logo } from '@/app/assets';
import Icon from '../component/Icon';
import {
  faInstagram,
  faFacebookF,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
export interface IFooterProps {}

export default function Footer() {
  return (
    <footer className="w-full h-full bg-[#0C1011]">
      <div className="container mx-auto py-[63px]">
        <div className="grid grid-cols-5 text-white">
          <ul className="">
            <span className="text-[#C5FBD8] font-bold text-big mb-5">About us</span>
            <li>
              <a href="#">
                <p>Our story</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Why us</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>How it works</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>FAQ</p>
              </a>
            </li>
          </ul>
          <ul className="">
            <span className="text-[#C5FBD8] font-bold text-big">Our cabins</span>
            <li>
              <a href="#">
                <p>North of London</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Golden Hideaway</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Oak Treehouse</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Acacia Retreat</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Blue Lagoon</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>South of London</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Lavender Retreat</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Butterfly Treehouse</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Mahogany Hideaway</p>
              </a>
            </li>
          </ul>
          <div className="grid grid-cols-2 col-span-2">
            <span className="text-[#C5FBD8] font-bold text-big block">Get inspired</span>
            <div className="grid grid-cols-2 col-span-2">
              <ul className="">
                <li>
                  <a href="#">
                    <p>Explore nature</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Hiking trails</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Swimming</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Fishing</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Boating</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Cycling</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Rest, relax and re-set</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Spa treatments</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Hot tubs</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Nature Trails</p>
                  </a>
                </li>
              </ul>
              <ul className="">
                <li>
                  <a href="#">
                    <p>Great food and drink</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Pubs</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Resturants</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Food markets</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Picnics</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>For you and yours</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Solo or a couple</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Pet friendly</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Accessible cabins</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="">
            <span className="text-[#C5FBD8] font-bold text-big">Support</span>
            <li>
              <a href="#">
                <p>Help</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Contact us</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Privacy Policy</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Terms of Service</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Complaints Policy</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-[30px] text-white items-end justify-between py-[60px] border-b border-[#346769]">
          <div className="w-full">
            <p className="text-[#C5FBD8] font-bold text-big mb-5">Sign up to our Newsletter</p>
            <p>
              For a weekly curated collection of 3 things you can watch, read or listen to switch
              off from the busy everyday.
            </p>
          </div>
          <div className="w-full">
            <form action="">
              <div className="flex gap-3 justify-between items-center">
                <Input
                  className="w-full"
                  height="54px"
                  rounded={6}
                  placeholder="Enter your email address here"
                  classNameInput=" pl-5 py-5"
                  type="email"
                />
                <Button
                  text="Join the mailing list"
                  className="rounded-md bg-primary-yellow text-title-color w-[45%] h-[54px] font-medium"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-between items-center text-white pt-[50px]">
          <Logo />
          <div className="">© 2023 UnwindCabins</div>
          <div className="flex justify-between gap-x-2.5">
            <Link href="#">
              <Icon icon={faInstagram} className="text-white w-5 h-5" />
            </Link>
            <Link href="#">
              <Icon icon={faFacebookF} className="text-white w-5 h-5" />
            </Link>
            <Link href="#">
              <Icon icon={faXTwitter} className="text-white w-5 h-5" />
            </Link>
            <Link href="#">
              <Icon icon={faYoutube} className="text-white w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
