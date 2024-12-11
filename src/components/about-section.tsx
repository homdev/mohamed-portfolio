'use client'

/* eslint-disable react/no-unescaped-entities */

import { FC } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Code2, Laptop, Database, Smartphone, Cloud, Users } from 'lucide-react'

// Type pour les icônes
type TimelineItemProps = {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  isLast?: boolean
}

const TimelineItem: FC<TimelineItemProps> = ({ year, title, description, icon, isLast }) => (
  <div className="relative flex-1 min-w-0">
    {!isLast && (
      <div className="absolute hidden xl:block top-4 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px border-t-2 border-dashed border-[#8364FF]/30" />
    )}
    {!isLast && (
      <div className="absolute xl:hidden left-4 top-4 h-[calc(100%+2rem)] w-px border-l-2 border-dashed border-[#8364FF]/30" />
    )}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="relative z-10 flex items-center gap-3 xl:flex-col xl:items-start"
    >
      <div className="relative h-8 w-8 xl:mx-auto">
        {/* Carré violet externe */}
        <div className="absolute inset-0 rounded bg-[#8364FF]" />
        {/* Carré jaune interne avec l'icône */}
        <div className="absolute inset-[4px] rounded-sm bg-[#C1FF00] flex items-center justify-center">
          <div className="text-[#8364FF]">
            {icon}
          </div>
        </div>
      </div>
      <div className="rounded-lg border-2 border-dashed border-[#8364FF] bg-black/50 p-4 xl:w-full xl:mt-4 h-full">
        <div className="font-archivo text-xl font-bold text-[#C1FF00]">{year}</div>
        <div className="font-protest font-medium text-white">{title}</div>
        <div className="text-sm text-gray-400">{description}</div>
      </div>
    </motion.div>
  </div>
)

export default function AboutSection() {
  return (
    <section className="relative bg-black py-12">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center relative"
        >
          <span className="font-protest text-[#8364FF] text-6xl block -mb-5 relative z-10">Somthing</span>
          <span className="font-archivo text-[#C1FF00] text-5xl font-black relative z-0">ABOUT ME</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16"
        >
          {/* Colonne gauche */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-protest text-2xl font-bold text-[#C1FF00]">
              JE M'APPELLE MOHAMED.
            </h3>
            <div className="flex gap-4">
              <div>
                <div className="font-protest text-4xl font-bold text-[#8364FF]">15</div>
                <div className="font-protest text-xl font-bold text-[#C1FF00]">ANNÉES</div>
              </div>
              <div>
                <div className="font-protest text-4xl font-bold text-[#8364FF]">+100</div>
                <div className="font-protest text-xl font-bold text-[#C1FF00]">SITES WEB</div>
              </div>
            </div>
            <p className="text-gray-400">
              Au cours des 15 dernières années, j'ai développé plus de 1000 sites web et pages d'atterrissage
              pour les entreprises et les entrepreneurs du monde entier.

            </p>
            <div>
              <div className="font-protest text-4xl font-bold text-[#8364FF]">1M€</div>
              <div className="font-protest text-xl font-bold text-[#C1FF00]">BUDGET MAX.</div>
            </div>
          </motion.div>

          {/* Image centrale */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative aspect-square"
          >
            <Image
              src="https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg" // Assurez-vous d'avoir une image appropriée
              alt="Mohamed - Web Developer"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute right-4 top-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF8656]">
              <div className="h-0 w-0 border-l-[12px] border-t-[8px] border-b-[8px] border-l-white border-t-transparent border-b-transparent" />
            </div>
          </motion.div>

          {/* Colonne droite */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4 text-gray-400"
          >
            <div className="bg-black/50 p-4 rounded-lg border border-[#8364FF]/30">
              <p>
                Mon parcours professionnel inclut un poste de leader de l'équipe web
                chez Accenture LLC (Fortune 500).
              </p>
              <p className="mt-4">
                De 2016 à 2018, où j'ai dirigé une équipe de 10 designers et développeurs web.
                Nous avons travaillé sur des projets de grande envergure avec un budget de 500k - 1M.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col xl:flex-row gap-8"
        >
          <TimelineItem
            year="2018"
            title="Web Développement"
            description="J'ai commencé avec HTML, CSS et JavaScript, créant mes premiers sites web statiques."
            icon={<Code2 size={14} />}
          />
          <TimelineItem
            year="2019"
            title="Frontend Development"
            description="Maîtrise de React.js et découverte des frameworks modernes."
            icon={<Laptop size={14} />}
          />
          <TimelineItem
            year="2020"
            title="Full Stack Development"
            description="Apprentissage de Node.js et des BDD, développement d'applications complètes."
            icon={<Database size={14} />}
          />
          <TimelineItem
            year="2021"
            title="Mobile Development"
            description="Spécialisation en React Native pour le développement d'applications mobiles."
            icon={<Smartphone size={14} />}
          />
          <TimelineItem
            year="2022"
            title="Architecture & DevOps"
            description="Maîtrise des architectures cloud et des pratiques DevOps modernes."
            icon={<Cloud size={16} />}
          />
          <TimelineItem
            year="2023"
            title="Leadership Technique"
            description="Direction d'équipes de développement et gestion de projets complexes."
            icon={<Users size={16} />}
            isLast
          />
        </motion.div>
      </div>
    </section>
  )
}

