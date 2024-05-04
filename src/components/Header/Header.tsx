import Image from 'next/image';

import MobileNav from './MobileNav';
import navItems from './navItems';

import Link from '@/molecules/Link';

const siteName = 'Grow and Glow';

const Header = () => (
  <header>
    <div className='flex items-center justify-between max-w-6xl m-auto px-4 py-4'>
      <Link href='/' aria-label={siteName}>
        <div className='flex items-center justify-between'>
          <div className='mr-3 h-8 w-60 relative'>
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

export default Header;
