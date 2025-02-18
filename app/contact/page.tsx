'use client';

import type React from 'react';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { submitContactForm } from '../actions/contact';
import { useToast } from '@/components/ui/use-toast';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    setIsSubmitting(false);

    if (result.error) {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Success',
        description: 'Your message has been sent successfully!',
      });
      e.currentTarget.reset();
    }
  };

  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='flex-grow'>
        <section className='bg-gray-100 py-20'>
          <div className='container mx-auto px-4'>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='mb-8 text-center text-4xl font-bold text-gray-800'
            >
              Contact Us
            </motion.h1>
            <div className='grid gap-8 md:grid-cols-2'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className='mb-4 text-2xl font-semibold text-gray-800'>
                  Get in Touch
                </h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <Input
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    required
                  />
                  <Input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    required
                  />
                  <Textarea
                    name='message'
                    placeholder='Your Message'
                    required
                    className='min-h-[150px]'
                  />
                  <Button
                    type='submit'
                    className='w-full'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='space-y-6'
              >
                <h2 className='mb-4 text-2xl font-semibold text-gray-800'>
                  Our Location
                </h2>
                <div className='h-64 w-full overflow-hidden rounded-lg'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.3747876569184!2d28.0473383!3d-26.2041028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1655384415648!5m2!1sen!2sus'
                    width='100%'
                    height='100%'
                    style={{ border: 0 }}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  ></iframe>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-center space-x-4'>
                    <MapPin className='h-6 w-6 text-orange-600' />
                    <p className='mb-2'>
                      6606 Sikhululekile street
                      <br />
                      Ext 26
                      <br /> Olievenhoutbosch
                      <br />
                      Centurion
                      <br />
                      0175
                    </p>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <Phone className='h-6 w-6 text-orange-600' />
                    <a href='tel:0614038651'>0614038651</a>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <Mail className='h-6 w-6 text-orange-600' />
                    <a href='mailto:puleng.ramoba@ubuntuafricanresources.com'>
                      puleng.ramoba@ubuntuafricanresources.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
