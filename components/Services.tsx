'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    name: 'Mining Operations',
    image: '/mining-operations.jpeg',
    description:
      'Comprehensive mining operations with state-of-the-art equipment and experienced professionals',
  },
  {
    name: 'Rehabilitation and Environmental Management',
    image: '/rehabilitation.jpg',
    description:
      'Sustainable mining practices with focus on environmental restoration and land rehabilitation',
  },
  {
    name: 'Supply of Mining Materials',
    image: '/mining-materials.jpg',
    description:
      'Reliable supply chain management for all your mining material requirements',
  },
];

export default function Services() {
  return (
    <section className='bg-gray-50 py-24'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl'
        >
          Our Services
        </motion.h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className='overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105'
            >
              <Image
                src={service.image || '/placeholder.svg'}
                alt={service.name}
                width={400}
                height={300}
                className='h-48 w-full object-cover'
              />
              <div className='p-6'>
                <h3 className='mb-3 text-xl font-semibold text-gray-800'>
                  {service.name}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
