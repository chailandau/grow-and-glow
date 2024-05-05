import Image from 'next/image';
import { FC } from 'react';

interface ResponsiveImageProps {
  /* Height of responsive image, in percentage */
  height?: 'half' | 'two-thirds' | 'full';
  /* Image source */
  src: string;
  /* Image alt text */
  alt: string;
  /* Image object-position */
  position?: 'top' | 'center' | 'bottom';
  /* Additional classes */
  className?: string;
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({
  height = 'half',
  src,
  alt,
  position = 'center',
  className
}) => {
  const getHeight = () => {
    switch (height) {
      case 'two-thirds':
        return 'pb-[67%]';
      case 'full':
        return 'pb-[100%]';
      case 'half':
      default:
        return 'pb-[50%]';
    }
  };

  const paddingBottom = getHeight();

  return (
    <div
      className={`relative w-full ${paddingBottom} ${className ? className : ''}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`rounded-lg object-cover object-${position}`}
      />
    </div>
  );
};

export default ResponsiveImage;
