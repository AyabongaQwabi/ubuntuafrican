'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const reasons = [
  {
    title: 'Proven Track Record',
    description: 'Years of successful mineral trading and satisfied clients.',
  },
  {
    title: 'Forward-Thinking Approach',
    description: 'Embracing innovation and sustainable practices.',
  },
  {
    title: 'Trusted Partnerships',
    description: 'Strong relationships with suppliers and customers worldwide.',
  },
  {
    title: 'Ethical & Sustainable Trade',
    description:
      'Commitment to responsible sourcing and environmental stewardship.',
  },
  {
    title: 'Risk Management & Compliance',
    description: 'Adhering to international standards and regulations.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className='relative py-24'>
      <Image
        src='/mining.jpeg'
        alt='Mining landscape'
        layout='fill'
        objectFit='cover'
        quality={100}
        className='absolute inset-0'
      />
      <div className='absolute inset-0 bg-gradient-to-b from-emerald-950 to-black/90' />
      <div className='container relative z-10 mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-12 text-center text-3xl font-bold text-white md:text-4xl'
        >
          Why Choose Us
        </motion.h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className='rounded-lg bg-white/10 p-6 backdrop-blur-sm'
            >
              <h3 className='mb-2 text-xl font-semibold text-white'>
                {reason.title}
              </h3>
              <p className='text-gray-300'>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
