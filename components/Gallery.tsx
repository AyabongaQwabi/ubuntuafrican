'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  {
    src: '/openpit.jpg',
    alt: 'Open pit mine',
  },
  {
    src: '/rawminerals.jpg',
    alt: 'Raw minerals',
  },
  {
    src: '/processing.jpeg',
    alt: 'Mineral processing',
  },
  {
    src: '/transport.jpeg',
    alt: 'Logistics and transportation',
  },
];

export default function Gallery() {
  return (
    <section className='relative min-h-screen bg-gray-100'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='absolute left-1/2 top-8 z-10 -translate-x-1/2 text-center text-3xl font-bold text-white md:text-4xl'
      >
        Visual Showcase
      </motion.h2>
      <div className='grid h-screen grid-cols-2 grid-rows-2'>
        {images.map((image, index) => (
          <motion.div
            key={image.alt}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 * index }}
            className='relative overflow-hidden'
          >
            <Image
              src={image.src || '/placeholder.svg'}
              alt={image.alt}
              layout='fill'
              objectFit='cover'
            />
            <div className='absolute inset-0 bg-black/30 transition-opacity hover:opacity-0' />
            <p className='absolute bottom-4 left-4 text-lg font-semibold text-white'>
              {image.alt}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
