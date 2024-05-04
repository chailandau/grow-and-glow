import Image from 'next/image';

import Button from '@/atoms/Button';
import Section from '@/atoms/Section';
import Heading from '@/atoms/Typography';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <Section className='text-center'>
        <div className='relative w-full pb-[50%]'>
          <Image
            src='/images/beach.jpg'
            alt='woman on beach'
            fill
            className='object-cover object-top'
          />
        </div>
        <Heading>Dedicated to empowering women</Heading>
        <p>
          Welcome to Grow and Glow, a sacred space where transformation begins
          and joy becomes an integral part of your journey. At our retreats, we
          invite women to embark on a profound exploration of self-discovery,
          releasing the fears and anxieties that may be holding them back from
          following dreams and living joyously.
        </p>
      </Section>
      <Section theme='dark' className='text-center'>
        <Heading>Let&#39;s work together</Heading>
        <p>
          Our thoughtfully curated programs are designed to provide a nurturing
          environment where you can connect with like-minded souls, share your
          stories, and find the strength to overcome obstacles. Together,
          we&#39;ll delve into the depths of your inner world, unlocking the
          power within to live a life that resonates with joy and purpose.
        </p>
        <Button href='/contact'>Get in touch</Button>
      </Section>
      <Section className='text-center'>
        <Heading>Start your journey</Heading>
        <p>
          Join us on this transformative adventure, where fear dissipates, joy
          flourishes, and empowerment takes center stage. Your journey towards a
          more joyous and fulfilling life begins here. Welcome to a community of
          empowered women supporting each other on the path to joyous living!
        </p>
        <Button href='/retreat'>Book your spot</Button>
      </Section>
    </>
  );
}
