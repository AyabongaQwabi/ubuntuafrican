'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Search, CheckCircle, Truck, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    title: 'Sourcing',
    description: 'We identify and secure high-quality mineral resources.',
    icon: Search,
  },
  {
    title: 'Quality Control',
    description:
      'Rigorous testing ensures our products meet industry standards.',
    icon: CheckCircle,
  },
  {
    title: 'Logistics',
    description: 'Efficient transportation and delivery to our global clients.',
    icon: Truck,
  },
  {
    title: 'Customer Support',
    description: 'Ongoing assistance and communication throughout the process.',
    icon: HeadphonesIcon,
  },
];

export default function HowWeWork() {
  return (
    <section id='how-we-work' className='relative py-24'>
      <Image
        src='/work.jpeg'
        alt='Mining operations'
        layout='fill'
        objectFit='cover'
        quality={100}
        className='absolute inset-0'
      />
      <div className='absolute inset-0 bg-emerald-950' />
      <div className='container relative z-10 mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-12 text-center text-3xl font-bold text-white md:text-4xl'
        >
          How We Work
        </motion.h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className='relative rounded-lg bg-white/10 p-6 backdrop-blur-sm'
            >
              <div className='mb-4 text-4xl text-white'>
                <step.icon size={48} />
              </div>
              <h3 className='mb-2 text-xl font-semibold text-white'>
                {step.title}
              </h3>
              <p className='text-gray-300'>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
