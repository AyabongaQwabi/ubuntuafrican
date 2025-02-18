'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const values = [
  {
    name: 'Integrity',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M33.3,-54.7C47.2,-49.7,65.1,-48.8,75.5,-40.4C85.9,-32,88.9,-16,89.3,0.3C89.8,16.5,87.8,33,77.4,41.4C66.9,49.9,48,50.2,33.7,55.2C19.4,60.2,9.7,70,-2.6,74.5C-15,79.1,-30,78.5,-42.7,72.6C-55.5,66.7,-65.9,55.4,-67.6,42.4C-69.3,29.4,-62.1,14.7,-60.4,1C-58.7,-12.8,-62.5,-25.5,-59,-35.2C-55.4,-44.9,-44.5,-51.6,-33.5,-58.2C-22.4,-64.8,-11.2,-71.4,-0.7,-70.1C9.7,-68.8,19.5,-59.7,33.3,-54.7Z" transform="translate(100 100)" />
    </svg>`,
  },
  {
    name: 'Sustainability',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M40.9,-74C51.1,-65.1,56.1,-50.1,56.4,-36.8C56.7,-23.5,52.4,-11.7,51.6,-0.5C50.8,10.8,53.5,21.6,48.7,27.1C43.8,32.7,31.5,32.9,22.1,44C12.7,55.1,6.4,77,-4.9,85.5C-16.2,94,-32.4,89.1,-43.3,78.9C-54.2,68.7,-59.9,53.3,-67.5,39.2C-75.1,25.2,-84.7,12.6,-85.3,-0.4C-85.9,-13.3,-77.6,-26.7,-69.4,-39.7C-61.2,-52.7,-53.1,-65.3,-41.6,-73.5C-30,-81.7,-15,-85.3,0.2,-85.6C15.4,-86,30.8,-83,40.9,-74Z" transform="translate(100 100)" />
    </svg>`,
  },
  {
    name: 'Innovation',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M40.8,-73.4C49.8,-65.4,52.1,-48.4,59.4,-34.6C66.8,-20.9,79.2,-10.5,84,2.8C88.8,16,86,32,76.3,41.8C66.7,51.5,50.2,55,36.4,62.7C22.5,70.4,11.3,82.4,0.4,81.7C-10.5,81.1,-21.1,67.9,-30.3,57.6C-39.6,47.2,-47.6,39.7,-54.9,30.5C-62.2,21.4,-68.7,10.7,-70.3,-0.9C-71.9,-12.6,-68.6,-25.2,-61.4,-34.3C-54.1,-43.4,-42.9,-49.1,-32,-56C-21.1,-63,-10.5,-71.3,2.7,-75.9C15.9,-80.5,31.7,-81.4,40.8,-73.4Z" transform="translate(100 100)" />
    </svg>`,
  },
  {
    name: 'Partnership',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M25.2,-36.7C32.5,-23.9,38.2,-15.8,40.3,-6.7C42.5,2.5,41.1,12.7,35.5,18.8C30,24.9,20.3,27,9.1,35.7C-2.1,44.5,-14.8,59.9,-22.8,58.7C-30.7,57.5,-34,39.5,-44.6,24.3C-55.1,9,-72.8,-3.5,-74.6,-16.7C-76.5,-29.9,-62.4,-43.8,-47.4,-55.2C-32.3,-66.6,-16.1,-75.5,-3.6,-71.3C9,-67,17.9,-49.5,25.2,-36.7Z" transform="translate(100 100)" />
    </svg>`,
  },
];

export default function About() {
  return (
    <section id='about' className='relative min-h-screen bg-gray-100 pt-20'>
      <Image
        src='/mining.jpeg'
        alt='Mining landscape'
        layout='fill'
        objectFit='cover'
        quality={100}
        className='absolute inset-0'
      />
      <div className='absolute inset-0 bg-emerald-950' />
      <div className='relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-white'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-8 text-center text-4xl font-bold md:text-5xl'
        >
          About Ubuntu African Resources
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mx-auto mb-12 max-w-3xl text-center text-lg md:text-xl'
        >
          Ubuntu African Resources is a leading commodity trading company
          specializing in minerals. Our mission is to facilitate global trade
          through responsible sourcing and efficient distribution of essential
          minerals, while prioritizing sustainability and ethical practices.
        </motion.p>
        <div className='flex flex-wrap justify-center gap-8'>
          {values.map((value, index) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              className='relative flex h-40 w-40 flex-col items-center justify-center text-white'
            >
              <div
                className='absolute inset-0 text-orange-500'
                dangerouslySetInnerHTML={{ __html: value.svg }}
              />
              <span className='relative z-10 text-lg font-semibold'>
                {value.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
