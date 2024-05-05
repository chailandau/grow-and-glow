import { FC } from 'react';

interface ListProps {
  /** List items */
  listItems: string[];
  /** Additional classes */
  className?: string;
}

const List: FC<ListProps> = ({ listItems, className }) => (
  <ul className={`space-y-4 text-left ${className ? className : ''}`}>
    {listItems?.map((item, i) => (
      <li key={i} className='flex items-center space-x-3'>
        <svg
          className='flex-shrink-0 w-3.5 h-3.5 text-green-500'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 16 12'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M1 5.917 5.724 10.5 15 1.5'
          />
        </svg>
        <p>{item}</p>
      </li>
    ))}
  </ul>
);

export default List;
