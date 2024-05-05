import Button from '@/atoms/Button';
import Section from '@/atoms/Section';
import Heading from '@/atoms/Typography';
import List from '@/molecules/List';
import ResponsiveImage from '@/molecules/ResponsiveImage';

export default function Page() {
  return (
    <>
      <Section isFirst className='max-w-3xl lg:text-center'>
        <Heading as='h1' size='xl' className='text-center'>
          Escape to the Catskills
        </Heading>
        <p className='uppercase tracking-widest font-bold'>June 10-13,2024</p>
        <p>
          I invite you to a rejuvenating retreat in the Catskill Mountains, New
          York. As your host I am honored to support you on a journey of self
          discovery and empowerment.
        </p>
        <Button href='/contact'>Start your journey</Button>
      </Section>
      <Section className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        <ResponsiveImage
          src='/images/yoga-forest.jpg'
          alt='group of people heading to do yoga in forest'
          height='two-thirds'
          className='lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1'
        />
        <ResponsiveImage
          src='/images/hemlock.jpg'
          alt='beautiful house in greenery'
          height='two-thirds'
        />
        <ResponsiveImage
          src='/images/cozy-interior.jpg'
          alt='cozy cabin interior'
          height='two-thirds'
        />
      </Section>
      <Section theme='dark' className='max-w-lg lg:text-center'>
        <Heading>All inclusive</Heading>
        <div className='border border-gray-500 rounded p-6 flex flex-col items-center'>
          <List
            listItems={[
              'Private room + ensuite',
              'Delicious meals',
              'Fun activities'
            ]}
            className='m-auto'
          />
        </div>
      </Section>
      <Section className='max-w-3xl lg:text-center'>
        <Heading className='lg:max-w-xl m-auto'>
          Find your inner peace surrounded by nature
        </Heading>
        <p>
          Are you ready to step into your power? Find your inner calm and
          confidence? Surround yourself in nature and dive deep into self
          discovery workshops. Form beautiful connections With like-minded
          Women. It is time to prioritize your well being. Honor your journey
          and bask in the beauty of Sisterhood. Secure your spot today and let
          the transformation begin!
        </p>
        <Button href='/contact'>Secure your spot</Button>
      </Section>
      <Section className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        <ResponsiveImage
          src='/images/goats.jpg'
          alt='Goats'
          height='two-thirds'
          className='lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1'
        />
        <ResponsiveImage
          src='/images/food.jpg'
          alt='Overhead view of food on table'
          height='two-thirds'
        />
        <ResponsiveImage
          src='/images/hot-tub.jpg'
          alt='Hot tub'
          height='two-thirds'
        />
      </Section>
    </>
  );
}
