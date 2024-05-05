import { FC, ReactNode } from 'react';

import Section from '@/atoms/Section';
import Heading from '@/atoms/Typography';
import ResponsiveImage from '@/molecules/ResponsiveImage';

interface SwitchbackProps {
  /* Image side */
  imageSide?: 'left' | 'right';
  /* Image info */
  imageInfo: {
    src: string;
    alt: string;
    position?: 'top' | 'center' | 'bottom';
  };
  /* Heading */
  heading: string;
  /* Body content */
  body: ReactNode;
}

const Switchback: FC<SwitchbackProps> = ({
  imageSide = 'left',
  imageInfo,
  heading,
  body
}) => {
  const isRightImg = imageSide === 'right';

  return (
    <Section className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
      {imageInfo && (
        <ResponsiveImage
          src={imageInfo.src}
          alt={imageInfo.alt}
          height='two-thirds'
          position={imageInfo.position || 'top'}
          className={`${isRightImg ? 'sm:hidden' : ''}`}
        />
      )}

      <div className='text-center flex flex-col gap-2'>
        {heading && <Heading>{heading}</Heading>}
        {body && body}
      </div>
      <ResponsiveImage
        src={imageInfo.src}
        alt={imageInfo.alt}
        height='two-thirds'
        position={imageInfo.position || 'top'}
        className={`hidden ${isRightImg ? 'sm:block' : ''}`}
      />
    </Section>
  );
};

export default Switchback;
