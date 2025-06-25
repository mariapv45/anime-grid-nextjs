'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import z from 'zod';

import { USER_COOKIE_KEY } from './constants';

export type State = {
  message?: string | null;
  errors?: {
    username?: string[];
    jobTitle?: string[];
  };
}

const UserFormSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  jobTitle: z.string().min(1, 'Job title is required'),
});

export async function setUserCookie(
  _prevState: State | undefined,
  formData: FormData,
) {
    // Validate fields using Zod
    const validatedFields = UserFormSchema.safeParse({
      username: formData.get('username'),
      jobTitle: formData.get('jobTitle'),
    });

    // If form validation fails, return error
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Please fill out all required fields.',
      }
    }

    // If form validation passes, set the cookie
    try {
      const cookieStore = await cookies();

      cookieStore.set({
        name: USER_COOKIE_KEY,
        value: JSON.stringify({
          username: validatedFields.data.username,
          jobTitle: validatedFields.data.jobTitle,
        }),
      });

    } catch (error: unknown) {
      // Log error
      console.error('Error setting user cookie:', error);
    }

    // Redirect to information page after setting the cookie
    redirect('/information');
  }