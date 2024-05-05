'use client';

import { ErrorMessage } from '@hookform/error-message';
import useWeb3Forms from '@web3forms/react';
import { useForm } from 'react-hook-form';

import Heading from '@/atoms/Typography';

const NewsletterForm = () => {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit
  } = useForm();

  const { submit: onSubmit } = useWeb3Forms({
    access_key: process.env.NEXT_PUBLIC_WEB_FORM as string,
    settings: {
      from_name: 'Grow and Glow Retreats',
      subject: 'New newsletter sign-up'
    },
    onSuccess: () => null,
    onError: (message, data) => {
      console.error(message, data);
    }
  });

  const fieldStyles =
    'w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm';

  return (
    <>
      <Heading as='h3' size='md' className='text-center'>
        Subscribe to our newsletter
      </Heading>

      {isSubmitSuccessful ? (
        <>
          <p className='text-center text-2xl font-medium font-serif'>
            Thanks for signing up!
          </p>
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col w-full gap-2 relative'>
            <input
              type='email'
              placeholder='Email address'
              className={fieldStyles}
              {...register('email', {
                required: 'Please enter your email',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Email field is required'
                }
              })}
            />

            <button
              type='submit'
              className='bg-gold text-white px-4 py-2 rounded-lg font-medium absolute end-1 top-1/2 -translate-y-1/2'
            >
              Subscribe
            </button>
          </div>
          <div className='text-center mt-2 text-red-300'>
            <ErrorMessage errors={errors} name='email' />
          </div>
        </form>
      )}
    </>
  );
};

export default NewsletterForm;
