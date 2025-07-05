'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const commodities = [
  {
    name: 'Chrome (UG2)',
    image: '/fero.jpg',
    description:
      'We trade processed UG2 chrome concentrate, primarily sourced from platinum-bearing reefs in the Bushveld Complex and processed through wash plants. This product is used in stainless steel production and ferrochrome smelting.',
    specifications: [
      'Cr₂O₃ Content: 38–42%',
      'SiO₂: < 5%',
      'Al₂O₃: < 14%',
      'FeO: 17–20%',
      'Moisture: < 9%',
    ],
  },
  {
    name: 'Coal',
    image: '/coal.jpeg',
    description:
      'We supply a wide range of South African coal grades tailored for both local and international thermal and metallurgical use.',
    specifications: [
      'RB1 Coal: NCV 6,000 kcal/kg, ash content 12–15%, sulphur < 1%, moisture ≤ 12%',
      'RB2 Coal: NCV ~5,700 kcal/kg, ash content 14–17%',
      'RB3 Coal: NCV ~5,500 kcal/kg, ash content 20–23%',
      'Washed export grades (A-C Grade) with NCV up to 28.5 MJ/kg and ash below 14%',
    ],
  },
  {
    name: 'Manganese',
    image: '/manganese.webp',
    description:
      'Our manganese ores are sourced from high-grade deposits across South Africa and Southern Africa. All products are tested in compliance with ISO 4296 and ISO 4293 standards.',
    specifications: [
      'Mn Content: 40–48%',
      'Fe: ≤ 5%',
      'Moisture: < 8%',
      'Form: Lump, fines, or concentrate',
    ],
  },
  {
    name: 'Petroleum Products',
    image: '/materials.jpg',
    description:
      'We offer a selection of upstream and downstream petroleum products, including crude oil and refined fuels.',
    specifications: [
      'Crude Oil: Light sweet, heavy, and condensates',
      'Refined Fuels: Diesel (EN 590 / ASTM D975), Gasoline (EN 228)',
      'Jet Fuel, Naphtha, and LPG',
      'Low sulphur diesel (<50 ppm), high API gravity crude',
    ],
  },
];

export default function Commodities() {
  return (
    <section id='commodities' className='bg-white py-24'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-12 text-center'
        >
          <h2 className='text-3xl font-bold text-gray-800 md:text-4xl mb-4'>
            Commodities We Trade
          </h2>
          <p className='text-lg text-gray-600 max-w-4xl mx-auto'>
            At Ubuntu African Resources, we specialize in the responsible
            sourcing and trading of key commodities that drive industrial and
            economic growth. We align with global and African benchmarks to
            ensure our clients receive high-quality products with dependable
            specifications.
          </p>
        </motion.div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-2'>
          {commodities.map((commodity, index) => (
            <motion.div
              key={commodity.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className='overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 bg-white'
            >
              <Image
                src={commodity.image || '/placeholder.svg'}
                alt={commodity.name}
                width={400}
                height={300}
                className='h-48 w-full object-cover'
              />
              <div className='p-6'>
                <h3 className='mb-3 text-xl font-semibold text-gray-800'>
                  {commodity.name}
                </h3>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  {commodity.description}
                </p>
                <div className='space-y-2'>
                  <h4 className='font-semibold text-gray-800 text-sm'>
                    Key Specifications:
                  </h4>
                  <ul className='text-sm text-gray-600 space-y-1'>
                    {commodity.specifications.map((spec, specIndex) => (
                      <li key={specIndex} className='flex items-start'>
                        <span className='text-green-600 mr-2'>•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='mt-12 bg-gray-50 rounded-lg p-6'
        >
          <h3 className='text-xl font-semibold text-gray-800 mb-4'>
            Waste Oil
          </h3>
          <p className='text-gray-600 mb-4'>
            Ubuntu African Resources is expanding into responsible waste oil
            trading and regeneration. We handle:
          </p>
          <ul className='text-gray-600 space-y-2'>
            <li className='flex items-start'>
              <span className='text-green-600 mr-2'>•</span>
              <span>Used Engine and Transmission Oil</span>
            </li>
            <li className='flex items-start'>
              <span className='text-green-600 mr-2'>•</span>
              <span>Blended Industrial Waste Oils</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
