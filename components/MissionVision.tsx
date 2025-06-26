"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function MissionVision() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Global business partnership and trade"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to connect producers and consumers of these essential commodities through transparent
                low-risk trade transactions. By de-risking commodity trade, we enable the reliable flow of materials
                that power industries and communities worldwide. We prioritize the safety and environmental
                responsibility of our operations, and strive to create lasting value for our stakeholders.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be preeminent global leader in the trading and supply of essential energy and industrial minerals,
                advancing sustainable economic progress through reliable, transparent commodity trade.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Global leadership in sustainable mining"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Investors & Partnerships Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-8 lg:p-12 shadow-lg"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Business collaboration and partnership"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Investors & Partnerships</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Ubuntu African Resources, we believe that growth is best achieved through unity, collaboration, and
                shared purpose. Guided by the African philosophy of <em>ubuntu</em> – a belief in a shared, essential
                humanism – our business is built on forming strategic partnerships and creating value for all
                stakeholders.
              </p>
            </div>
          </div>

          {/* Quote 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-green-50 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg"
          >
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "Ubuntu holds that unity is strength — that when we work together, we craft a better future. This is
              fundamentally true. By collaborating, we can shape outcomes for the betterment of all stakeholders – and
              the environment."
            </blockquote>
            <cite className="text-green-700 font-semibold">
              – Frans Baleni, Chairman of the Mining Indaba Executive Advisory Board
            </cite>
          </motion.div>

          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              We welcome investors, development partners, and joint venture collaborators who share our vision of
              inclusive, sustainable, and transformative growth in the mining and commodities sector. Whether through
              capital investment, operational partnerships, or community-based initiatives, we believe in building
              relationships that are founded on trust, transparency, and long-term impact.
            </p>
          </div>

          {/* Quote 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-green-50 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg"
          >
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "Our strength lies in building partnerships that recognise the mutual value of investment... we are
              equally committed to ensuring that the benefits of growth and development are shared with workers,
              communities, and the country at large. Progress is only meaningful when it lifts all stakeholders."
            </blockquote>
            <cite className="text-green-700 font-semibold">
              – Gwede Mantashe, Minister of Mineral and Petroleum Resources, South Africa
            </cite>
          </motion.div>

          <div className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ubuntu African Resources is actively seeking to collaborate with aligned investors and enterprises who are
              passionate about driving inclusive growth in Africa's resource-rich economy.{" "}
              <strong>Join us in creating lasting impact and shared prosperity.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
