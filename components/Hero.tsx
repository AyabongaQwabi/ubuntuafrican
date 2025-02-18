'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='relative h-screen w-full pt-16'>
      <Image
        src='./hero.png'
        alt='Raw minerals in an open mine'
        layout='fill'
        objectFit='cover'
        quality={100}
        priority
      />
      <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black/30' />
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-4 text-4xl font-bold leading-tight md:text-6xl'
        >
          Ubuntu African Resources
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-8 text-xl md:text-2xl'
        >
          Powering Global Trade with Sustainable Minerals
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb-8 max-w-2xl text-lg'
        >
          We connect industries with essential energy and industrial minerals
          through responsible and efficient trade.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='rounded bg-orange-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-700'
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
}
