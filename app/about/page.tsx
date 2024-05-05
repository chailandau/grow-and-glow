import Section from '@/atoms/Section';
import Heading from '@/atoms/Typography';
import Switchback from '@/components/Switchback';

export default function Page() {
  return (
    <>
      <Section isFirst className='-mb-8 lg:mb-4'>
        <Heading as='h1' size='xl' className='text-center'>
          About me
        </Heading>
      </Section>
      <Switchback
        imageInfo={{
          src: '/images/brick-wall.jpg',
          alt: 'woman in front of brick wall'
        }}
        heading='Hello! Nice to meet you'
        body={
          <p>
            I&#39;m Chav, the founder of this space, and my mission is rooted in
            personal experience. After navigating through the challenging
            terrain of a marriage that led to self-abandonment, I realized the
            need for a sanctuary where women can find solace, support, and
            inspiration.
          </p>
        }
        className='lg:-mb-6'
      />
      <Switchback
        imageSide='right'
        imageInfo={{
          src: '/images/bamboo.jpg',
          alt: 'woman standing in bamboo forest'
        }}
        heading='Travel changed my life'
        body={
          <p>
            My path to healing was paved with determination and a commitment to
            growth, and one of the transformative tools I embraced was travel.
            Exploring new landscapes and immersing myself in diverse cultures
            became the catalyst for my personal metamorphosis.
          </p>
        }
        className='lg:-mb-6'
      />
      <Switchback
        imageInfo={{
          src: '/images/greece.jpg',
          alt: 'woman looking over shoulder, laughing',
          position: 'center'
        }}
        heading='Let&#39;s empower each other'
        body={
          <p>
            Through the highs and lows of my journey, I discovered the strength
            within and reclaimed my identity. This platform is not just about my
            story but a collective space for women to share, uplift, and empower
            one another. Together, let&#39;s embark on a journey of resilience,
            self-love, and empowerment.
          </p>
        }
      />
    </>
  );
}
