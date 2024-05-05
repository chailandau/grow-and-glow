import Button from '@/atoms/Button';
import Section from '@/atoms/Section';
import Heading from '@/atoms/Typography';
import ResponsiveImage from '@/molecules/ResponsiveImage';

const Hero = () => (
  <Section
    isFirst
    className='relative md:py-[15%] lg:py-[10%] transition-spacing'
  >
    <ResponsiveImage
      src='/images/pool.webp'
      alt='relaxing pool'
      className='md:absolute md:object-cover md:pb-0 md:top-0 md:left-10 md:h-full md:w-[calc(100%-5rem)]'
    />
    <div className='px-4 mx-auto text-center pt-4 flex flex-col gap-4 z-10 md:max-w-2xl md:bg-white md:rounded-lg md:pb-5'>
      <Heading as='h1' size='xl' className='flex flex-col'>
        Do you want to be happy?
      </Heading>
      <p>
        Join us on a journey of transformation, where you can grow into the best
        version of yourself and glow with confidence, joy, and peace.
      </p>
      <Button href='/about'>Learn more</Button>
    </div>
  </Section>
);

export default Hero;
