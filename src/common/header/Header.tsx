'use client';
import { Logo } from '@/app/assets';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import Button from '../component/Button';

export interface IHeader {}

export default function Header() {
  return (
    <header className="w-full h-auto fixed z-50 top-0 bg-transparent">
      <div className="container mx-auto mt-5">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Logo className="object-cover" />
          </div>
          <div className="flex justify-between items-center gap-x-10 text-white text-[16px]">
            <Link href="/" className="font-bold">
              <span>Home</span>
            </Link>
            <Link href="/discover">
              <span>Discover</span>
            </Link>
            <Link href="/services">
              <span>Services</span>
            </Link>
            <Link href="/news">
              <span>News</span>
            </Link>
            <Link href="/about-us">
              <span>About Us</span>
            </Link>
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </div>
          <div className="flex gap-x-2.5">
            <Link href="/login" className="block">
              <Button className="bg-title-color rounded-md py-2 px-3 text-white" text="Login" />
            </Link>
            <Link href="/register" className="block">
              <Button
                className="bg-primary-yellow rounded-md py-2 px-3 text-white"
                text="Register"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
