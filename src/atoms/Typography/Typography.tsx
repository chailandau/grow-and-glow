import { FC, ReactNode } from 'react';

export const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export const headingSizes = ['sm', 'md', 'lg', 'xl'] as const;

interface HeadingProps {
  /** Semantic tag heading is wrapped in */
  as?: (typeof headingTags)[number];
  /** Heading size */
  size?: (typeof headingSizes)[number];
  /** Heading content */
  children: string | ReactNode;
  /** Additional classes */
  className?: string;
}

const Heading: FC<HeadingProps> = ({
  as: HeadingTag = 'h2',
  size = 'lg',
  children,
  className
}) => {
  const fontSizeMap = {
    mobile: {
      sm: 'text-md',
      md: 'text-xl',
      lg: 'text-3xl',
      xl: 'text-5xl'
    },
    tablet: {
      sm: 'sm:text-lg',
      md: 'sm:text-xl',
      lg: 'sm:text-2xl',
      xl: 'sm:text-4xl'
    },
    desktop: {
      sm: 'md:text-xl',
      md: 'md:text-2xl',
      lg: 'md:text-3xl',
      xl: 'md:text-5xl'
    }
  };

  return (
    <HeadingTag
      className={`${fontSizeMap.mobile[size]} ${fontSizeMap.tablet[size]} ${fontSizeMap.desktop[size]} font-semibold font-serif font-wide ${className ? className : ''}`}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
