'use client';

import { ErrorMessage } from '@hookform/error-message';
import useWeb3Forms from '@web3forms/react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit
  } = useForm();

  const { submit: onSubmit } = useWeb3Forms({
    access_key: process.env.NEXT_PUBLIC_WEB_FORM as string,
    settings: {
      from_name: 'Grow and Glow Retreats',
      subject: 'New contact form submission'
    },
    onSuccess: () => null,
    onError: (message, data) => {
      console.error(message, data);
    }
  });

  const fieldStyles =
    'w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm';

  return isSubmitSuccessful ? (
    <>
      <p className='text-center text-2xl font-medium font-serif'>
        Thanks for reaching out!
      </p>
      <p className='text-center'>
        We&#39;ll get back to you as soon as possible.
      </p>
    </>
  ) : (
    <form
      className='flex flex-col w-full gap-2'
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type='text'
        placeholder='Full Name'
        className={fieldStyles}
        {...register('name', {
          required: 'Name field is required',
          maxLength: 80
        })}
      />
      <div className='text-red-600 pl-4'>
        <ErrorMessage errors={errors} name='name' />
      </div>

      <input
        type='email'
        placeholder='Email address'
        className={fieldStyles}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Email field is required'
          }
        })}
      />
      <div className='text-red-600 pl-4'>
        <ErrorMessage errors={errors} name='email' />
      </div>

      <textarea
        className={fieldStyles}
        placeholder='Message'
        {...register('message', {
          required: 'Message is required'
        })}
      />
      <div className='text-red-600 pl-4'>
        <ErrorMessage errors={errors} name='message' />
      </div>

      <button
        type='submit'
        className='bg-gold text-white px-4 py-2 rounded-lg font-medium'
      >
        Submit Form
      </button>
    </form>
  );
};

export default ContactForm;
