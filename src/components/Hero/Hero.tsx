import Button from '@/atoms/Button';
import Section from '@/atoms/Section';
import Heading from '@/atoms/Typography';
import ResponsiveImage from '@/molecules/ResponsiveImage';

const Hero = () => (
  <Section className='pt-8 pb-0'>
    <ResponsiveImage src='/images/pool.webp' alt='relaxing pool' />
    <div className='px-4 mx-auto text-center pt-4 flex flex-col gap-4'>
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
