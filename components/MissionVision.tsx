'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MissionVision() {
  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-20'
        >
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='order-2 lg:order-1'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                Our Mission
              </h2>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Our mission is to connect producers and consumers of these
                essential commodities through transparent low-risk trade
                transactions, by de-risking commodity trade we enable the
                reliable flow of materials that power industries and communities
                worldwide. We prioritize the safety and the environmental
                responsibility of our operations, and strive to create lasting
                value for our stakeholders.
              </p>
            </div>
            <div className='order-1 lg:order-2'>
              <Image
                src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
                alt='Global business connections representing our mission'
                width={600}
                height={400}
                className='rounded-lg shadow-lg w-full h-80 object-cover'
              />
            </div>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-20'
        >
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <Image
                src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
                alt='Modern city skyline representing our vision for leadership'
                width={600}
                height={400}
                className='rounded-lg shadow-lg w-full h-80 object-cover'
              />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                Our Vision
              </h2>
              <p className='text-lg text-gray-600 leading-relaxed'>
                To be preeminent global leader in the trading and supply of
                essential energy and industrial minerals, advancing sustainable
                economic progress through reliable, transparent commodity trade.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Investors & Partnerships Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='bg-gray-50 rounded-2xl p-8 md:p-12'
        >
          <div className='text-center mb-12'>
            <Image
              src='https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop'
              alt='Business handshake representing partnerships and collaboration'
              width={800}
              height={400}
              className='rounded-lg shadow-lg w-full h-64 object-cover mb-8'
            />
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
              Investors & Partnerships
            </h2>
          </div>

          <div className='max-w-4xl mx-auto space-y-8'>
            <p className='text-lg text-gray-600 leading-relaxed'>
              At Ubuntu African Resources, we believe that growth is best
              achieved through unity, collaboration, and shared purpose. Guided
              by the African philosophy of <em>ubuntu</em> – a belief in a
              shared, essential humanism – our business is built on forming
              strategic partnerships and creating value for all stakeholders.
            </p>

            <blockquote className='bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600'>
              <p className='text-gray-700 italic mb-4'>
                "Ubuntu holds that unity is strength — that when we work
                together, we craft a better future. This is fundamentally true.
                By collaborating, we can shape outcomes for the betterment of
                all stakeholders – and the environment."
              </p>
              <cite className='text-sm font-semibold text-gray-800'>
                – Frans Baleni, Chairman of the Mining Indaba Executive Advisory
                Board
              </cite>
            </blockquote>

            <p className='text-lg text-gray-600 leading-relaxed'>
              We welcome investors, development partners, and joint venture
              collaborators who share our vision of inclusive, sustainable, and
              transformative growth in the mining and commodities sector.
              Whether through capital investment, operational partnerships, or
              community-based initiatives, we believe in building relationships
              that are founded on trust, transparency, and long-term impact.
            </p>

            <blockquote className='bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600'>
              <p className='text-gray-700 italic mb-4'>
                "Our strength lies in building partnerships that recognise the
                mutual value of investment... we are equally committed to
                ensuring that the benefits of growth and development are shared
                with workers, communities, and the country at large. Progress is
                only meaningful when it lifts all stakeholders."
              </p>
              <cite className='text-sm font-semibold text-gray-800'>
                – Gwede Mantashe, Minister of Mineral and Petroleum Resources,
                South Africa
              </cite>
            </blockquote>

            <p className='text-lg text-gray-600 leading-relaxed'>
              Ubuntu African Resources is actively seeking to collaborate with
              aligned investors and enterprises who are passionate about driving
              inclusive growth in Africa's resource-rich economy. Join us in
              creating lasting impact and shared prosperity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
