'use server';

import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'All fields are required' };
  }

  const contactRequest = {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };

  try {
    const blob = await put(
      `contact-requests/${Date.now()}.json`,
      JSON.stringify(contactRequest),
      {
        contentType: 'application/json',
      }
    );

    console.log('Contact request saved:', blob.url);
    revalidatePath('/contact');
    return { success: true };
  } catch (error) {
    console.error('Error saving contact request:', error);
    return { error: 'Failed to submit contact request. Please try again.' };
  }
}
