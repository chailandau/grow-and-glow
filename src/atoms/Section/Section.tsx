import { FC } from 'react';

interface SectionProps {
  /** Section content */
  children: React.ReactNode;
  /** Additional classes */
  className?: string;
  /** Color theme */
  theme?: 'light' | 'dark';
  /** Is this the first section on the page? */
  isFirst?: boolean;
}

const Section: FC<SectionProps> = ({
  children,
  className,
  theme = 'light',
  isFirst
}) => {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-darkGray' : '';
  const textColor = theme === 'dark' ? 'text-white' : '';

  return (
    <section
      className={`w-full  ${textColor} ${bgColor} ${isFirst ? 'mt-8' : ''} ${isDark ? 'py-10 lg:py-16' : ''} `}
    >
      <div
        className={`w-full max-w-7xl m-auto px-4 flex flex-col gap-3 text-center lg:text-left md:px-10 transition-spacing ${className ? className : ''}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
