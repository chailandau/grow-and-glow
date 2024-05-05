'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import MobileNav from './MobileNav';
import navItems from './navItems';

import Link from '@/molecules/Link';

const siteName = 'Grow and Glow';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const toggleSticky = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', toggleSticky, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleSticky);
    };
  }, []);

  return (
    <header className='sticky top-0 bg-offWhite border-b border-gray-200 shadow-sm z-50'>
      <div
        className={`flex items-center justify-between max-w-[1400px] m-auto px-4 ${isSticky ? 'py-2' : 'py-4'} transition-spacing`}
      >
        <Link href='/' aria-label={siteName}>
          <div className='flex items-center justify-between'>
            <div
              className={`mr-3 h-8 ${isSticky ? 'w-48' : 'w-60'} transition-size  relative`}
            >
              <Image
                src='/images/logo.svg'
                alt='Grow and Glow'
                fill={true}
                className='object-contain'
              />
            </div>
          </div>
        </Link>
        <div className='flex items-center space-x-4 leading-5 sm:space-x-6'>
          {navItems
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className='hidden font-medium sm:block'
              >
                {link.title}
              </Link>
            ))}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
