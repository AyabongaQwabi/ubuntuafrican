'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const commodities = [
  {
    name: 'Ferro Chrome',
    image: '/fero.jpg',
    description: 'Essential for stainless steel production',
  },
  {
    name: 'Coal',
    image: '/coal.jpeg',
    description: 'Powering industries and energy production',
  },
  {
    name: 'Manganese',
    image: '/manganese.webp',
    description: 'Critical for steel manufacturing',
  },
  {
    name: 'Mining Materials',
    image: '/materials.jpg',
    description: 'Supporting the mining industry',
  },
];

export default function Commodities() {
  return (
    <section className='bg-white py-24'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl'
        >
          Commodities We Trade & Supply
        </motion.h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {commodities.map((commodity, index) => (
            <motion.div
              key={commodity.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className='overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105'
            >
              <Image
                src={commodity.image || '/placeholder.svg'}
                alt={commodity.name}
                width={400}
                height={300}
                objectFit='cover'
                className='h-48 w-full'
              />
              <div className='p-4'>
                <h3 className='mb-2 text-xl font-semibold'>{commodity.name}</h3>
                <p className='text-gray-600'>{commodity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
