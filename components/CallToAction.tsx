'use client';

import type React from 'react';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { submitServiceInquiry } from '@/app/actions/service-inquiry';

export default function CallToAction() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formData = new FormData(e.currentTarget);
      const result = await submitServiceInquiry(formData);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message:
            result.message ||
            'Thank you! Your inquiry has been sent successfully.',
        });

        // Show toast notification
        toast({
          title: 'Success!',
          description:
            "Your inquiry has been sent successfully. We'll get back to you soon!",
          duration: 5000,
        });

        // Clear success message after 10 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' });
        }, 10000);
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.',
        });

        // Show error toast
        toast({
          title: 'Error',
          description:
            result.error || 'Failed to send inquiry. Please try again.',
          variant: 'destructive',
          duration: 5000,
        });
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        'Network error. Please check your connection and try again.';
      setSubmitStatus({
        type: 'error',
        message: errorMessage,
      });

      toast({
        title: 'Network Error',
        description: errorMessage,
        variant: 'destructive',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+27614038651';
  };

  return (
    <section id='contact' className='bg-primary py-24'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-12 text-center'
        >
          <h2 className='mb-6 text-3xl font-bold text-white md:text-4xl'>
            Ready to Partner with Ubuntu African Resources?
          </h2>
          <p className='mb-8 text-lg text-white/80'>
            Join us in shaping the future of sustainable mineral trade.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mx-auto max-w-4xl'
        >
          <div className='grid gap-8 md:grid-cols-2'>
            {/* Contact Form */}
            <Card className='bg-white/95 backdrop-blur'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Mail className='h-5 w-5' />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Status Messages */}
                {submitStatus.type && (
                  <Alert
                    className={`mb-4 ${
                      submitStatus.type === 'success'
                        ? 'border-green-200 bg-green-50'
                        : 'border-red-200 bg-red-50'
                    }`}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className='h-4 w-4 text-green-600' />
                    ) : (
                      <AlertCircle className='h-4 w-4 text-red-600' />
                    )}
                    <AlertDescription
                      className={
                        submitStatus.type === 'success'
                          ? 'text-green-800'
                          : 'text-red-800'
                      }
                    >
                      {submitStatus.message}
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='grid gap-4 md:grid-cols-2'>
                    <Input
                      type='text'
                      name='name'
                      placeholder='Your Name'
                      required
                      disabled={isSubmitting}
                    />
                    <Input
                      type='email'
                      name='email'
                      placeholder='Your Email'
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Input
                    type='tel'
                    name='phone'
                    placeholder='Your Phone Number'
                    required
                    disabled={isSubmitting}
                  />
                  <Select name='service' required disabled={isSubmitting}>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a service' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='mining-operations'>
                        Mining Operations
                      </SelectItem>
                      <SelectItem value='rehabilitation'>
                        Rehabilitation and Environmental Management
                      </SelectItem>
                      <SelectItem value='supply-materials'>
                        Supply of Mining Materials
                      </SelectItem>
                      <SelectItem value='general'>General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    name='message'
                    placeholder='Tell us about your project or requirements...'
                    required
                    className='min-h-[120px]'
                    disabled={isSubmitting}
                  />
                  <Button
                    type='submit'
                    className='w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-50'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className='mr-2 h-4 w-4' />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className='bg-white/95 backdrop-blur'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Phone className='h-5 w-5' />
                  Call Us Directly
                </CardTitle>
                <CardDescription>
                  Prefer to speak with us directly? Give us a call for immediate
                  assistance.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='text-center'>
                  <div className='mb-4'>
                    <Phone className='mx-auto h-12 w-12 text-orange-600' />
                  </div>
                  <h4 className='mb-2 text-lg font-semibold'>Call Now</h4>
                  <p className='mb-4 text-2xl font-bold text-orange-600'>
                    +27 61 403 8651
                  </p>
                  <Button
                    onClick={handleCallClick}
                    size='lg'
                    className='w-full bg-orange-600 hover:bg-orange-700'
                  >
                    <Phone className='mr-2 h-4 w-4' />
                    Call Now
                  </Button>
                </div>

                <div className='border-t pt-6'>
                  <h5 className='mb-2 font-semibold'>Business Hours</h5>
                  <div className='space-y-1 text-sm text-gray-600'>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div className='border-t pt-6'>
                  <h5 className='mb-2 font-semibold'>Email</h5>
                  <p className='text-sm text-gray-600'>
                    puleng@ubutuafrican.co.za
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
