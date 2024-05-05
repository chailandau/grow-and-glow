import { FC } from 'react';

interface SectionProps {
  /** Section content */
  children: React.ReactNode;
  /** Additional classes */
  className?: string;
  /** Color theme */
  theme?: 'light' | 'dark';
}

const Section: FC<SectionProps> = ({
  children,
  className,
  theme = 'light'
}) => {
  const bgColor = theme === 'dark' ? 'bg-darkGray' : '';
  const textColor = theme === 'dark' ? 'text-white' : '';

  return (
    <section
      className={`w-full max-w-6xl m-auto px-4 py-12 flex flex-col gap-3 ${textColor} ${bgColor} ${className ? className : ''}`}
    >
      {children}
    </section>
  );
};

export default Section;
