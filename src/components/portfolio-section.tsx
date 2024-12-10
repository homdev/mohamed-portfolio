'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, categories } from '@/data/projects'
import { 
  Layout, 
  Smartphone, 
  Globe, 
  Search, 
} from 'lucide-react'
import { Button3D } from './ui/Button3D'

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects

  const displayedProjects = showAll 
    ? filteredProjects 
    : filteredProjects.slice(0, 4)

  const categoryIcons = {
    'landing page': <Layout className="w-4 h-4" />,
    'website': <Globe className="w-4 h-4" />,
    'mobile app': <Smartphone className="w-4 h-4" />,
    'seo': <Search className="w-4 h-4" />
  }

  return (
    <section className="relative bg-black py-24">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-4xl"
        >
          <span className="font-protest text-[#8364FF] text-5xl block -mb-5 relative z-10">VOICI MON</span>
          <span className="font-archivo text-[#C1FF00] text-5xl font-black relative z-0">PORTFOLIO</span>
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 relative"
        >
          <div className="overflow-x-auto pb-4 flex justify-start md:justify-center gap-3 px-4 custom-scrollbar">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                className={`rounded-full px-4 py-2 font-protest text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                  category === selectedCategory
                    ? 'bg-[#C1FF00] text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {categoryIcons[category as keyof typeof categoryIcons]}
                {category}
              </motion.button>
            ))}
          </div>
          {/* Effet néon pour la barre de défilement */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8364FF] to-transparent opacity-50 blur-sm" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8364FF] to-transparent" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group relative perspective"
              >
                {/* 3D Platform Effect */}
                <motion.div
                  className="relative transform-gpu transition-all duration-500 ease-out"
                  whileHover={{ rotateX: 12, rotateY: 12, z: 50 }}
                >
                  {/* Shadow and Reflection */}
                  <div className="absolute -bottom-8 left-1/2 h-[10px] w-[80%] -translate-x-1/2 rounded-full bg-[#8364FF] blur-lg transition-all duration-300 group-hover:w-[90%] group-hover:bg-[#C1FF00]/30" />
                  
                  {/* Project Card */}
                  <div className="relative overflow-hidden rounded-lg bg-black bg-opacity-50 backdrop-blur-md transition-all duration-300 group-hover:bg-opacity-70">
                    {/* Project Image */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                    </div>

                    {/* Project Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 group-hover:translate-y-0">
                      <h3 className="font-archivo text-2xl font-bold text-[#C1FF00]">{project.title}</h3>
                      <p className="font-protest text-2 text-sm text-gray-300">{project.subtitle}</p>
                    </div>

                    {/* View Project Button */}
                    <motion.div 
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C1FF00] text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {filteredProjects.length > 4 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button3D onClick={() => setShowAll(!showAll)}>
              <span className="font-protest">
                {showAll ? 'VOIR MOINS' : 'VOIR PLUS'}
              </span>
            </Button3D>
          </motion.div>
        )}
      </div>
    </section>
  )
}

