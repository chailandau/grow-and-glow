'use client';

import Image from 'next/image';
import { useState } from 'react';

import navItems from './navItems';

import Link from '@/molecules/Link';

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden';
      }

      return !status;
    });
  };

  return (
    <>
      <button
        aria-label='Toggle Menu'
        onClick={onToggleNav}
        className='sm:hidden'
      >
        <Image
          src='/images/menu-toggle.svg'
          alt='Menu'
          height={20}
          width={28}
        />
      </button>
      <div
        className={`!ml-0 fixed left-0 top-0 z-10 h-full w-full transform bg-offWhite duration-300 ease-in-out ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-end'>
          <button
            className='m-4 h-6 w-6'
            aria-label='Toggle Menu'
            onClick={onToggleNav}
          >
            <Image
              src='/images/x.svg'
              alt='Close menu'
              height={22}
              width={22}
            />
          </button>
        </div>
        <nav className='fixed h-full'>
          {navItems.map((link) => (
            <div key={link.title} className='px-4 py-4'>
              <Link
                href={link.href}
                className='text-2xl font-medium '
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
