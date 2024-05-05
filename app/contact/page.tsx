import Section from '@/atoms/Section';
import Heading from '@/atoms/Typography';
import ContactForm from '@/components/Forms/ContactForm';
import ResponsiveImage from '@/molecules/ResponsiveImage';

export default function Page() {
  return (
    <>
      <Section isFirst className='max-w-3xl lg:text-center'>
        <Heading as='h1' size='xl' className='text-center lg:mb-8'>
          Get in touch
        </Heading>
        <ContactForm />
      </Section>
      <Section className='max-w-3xl lg:text-center lg:mt-8'>
        <Heading as='h2' size='lg' className='text-center'>
          Let&#39;s do it together &#60;3
        </Heading>
        <ResponsiveImage
          src='/images/we-can-do-it.jpg'
          alt='woman using Rosie the Riveter photo stand-in'
          height='two-thirds'
          position='top'
        />

        <p className='text-center'>I can&#39;t wait to hear from you!</p>
      </Section>
    </>
  );
}
