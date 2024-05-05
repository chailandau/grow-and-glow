import { FC } from 'react';

interface ButtonProps {
  href: string;
  children: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, href, className }) => (
  <div
    className={`flex flex-wrap justify-center ${className ? className : ''}`}
  >
    <a
      href={href}
      className='bg-gold text-white px-4 py-2 rounded-lg font-medium'
    >
      {children}
    </a>
  </div>
);

export default Button;
