import Image from 'next/image';

import Button from '@/atoms/Button';
import Section from '@/atoms/Section';
import Heading from '@/atoms/Typography';

const Hero = () => (
  <Section className='!py-0'>
    <div className='mx-auto'>
      <div className='w-full pb-[50%] relative'>
        <Image
          src='/images/pool.webp'
          alt='Relaxing pool'
          fill
          className='object-cover object-center'
        />
      </div>
      <div className='px-4 mx-auto text-center pt-9 flex flex-col gap-4'>
        <Heading as='h1' size='xl' className='flex flex-col'>
          Do you want to be happy?
        </Heading>
        <p>
          Join us on a journey of transformation, where you can grow into the
          best version of yourself and glow with confidence, joy, and peace.
        </p>
        <Button href='/about'>Learn more</Button>
      </div>
    </div>
  </Section>
);

export default Hero;
