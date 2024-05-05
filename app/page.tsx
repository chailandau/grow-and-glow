import Button from '@/atoms/Button';
import Section from '@/atoms/Section';
import Heading from '@/atoms/Typography';
import Hero from '@/components/Hero';
import Switchback from '@/components/Switchback';

export default function Home() {
  return (
    <>
      <Hero />
      <Switchback
        imageInfo={{
          src: '/images/beach.jpg',
          alt: 'woman on beach',
          position: 'top'
        }}
        heading='Dedicated to empowering women'
        body={
          <p>
            Welcome to Grow and Glow, a sacred space where transformation begins
            and joy becomes an integral part of your journey. At our retreats,
            we invite women to embark on a profound exploration of
            self-discovery, releasing the fears and anxieties that may be
            holding them back from following dreams and living joyously.
          </p>
        }
      />
      <Section theme='dark' className='max-w-3xl lg:text-center'>
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
      <Switchback
        imageInfo={{
          src: '/images/greece-2.jpg',
          alt: 'woman in front of greek architecture',
          position: 'center'
        }}
        imageSide='right'
        heading='Start your journey'
        body={
          <>
            <p>
              Join us on this transformative adventure, where fear dissipates,
              joy flourishes, and empowerment takes center stage. Your journey
              towards a more joyous and fulfilling life begins here. Welcome to
              a community of empowered women supporting each other on the path
              to joyous living!
            </p>
            <Button href='/retreat' className='mr-auto'>
              Book your spot
            </Button>
          </>
        }
      />
    </>
  );
}
