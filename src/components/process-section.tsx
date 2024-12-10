'use client'

import { motion } from 'framer-motion'
import { Button3D } from './ui/Button3D'
import { MessageSquare } from 'lucide-react'
import HyperText from './ui/hyper-text'

const steps = [
  {
    id: 1,
    title: 'TALK',
    description: 'Nous identifions vos besoins et objectifs',
  },
  {
    id: 2,
    title: 'PROOF',
    description: 'Je vous montre des exemples de mon travail',
  },
  {
    id: 3,
    title: 'DEAL',
    description: 'Je vous propose une offre attractive',
  },
  {
    id: 4,
    title: 'WORK',
    description: 'Je crée votre site ou application',
  },
  {
    id: 5,
    title: 'SELL',
    description: 'Vous générez des revenus !',
  },
]

const ProcessStep = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative mb-4">
        {/* Circular step indicator with rotating text */}
        <div className="relative">
          <svg className="w-32 h-32">
            {/* Cercle de base */}
            <circle
              cx="64"
              cy="64"
              r="52"
              className="fill-transparent stroke-[#8364FF] stroke-[0.5]"
            />
            {/* Cercle de progression */}
            <motion.circle
              initial={{ strokeDashoffset: 327 }}
              whileInView={{ strokeDashoffset: 327 - (327 * ((index + 1) * 20)) / 100 }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.3,
                ease: "easeInOut"
              }}
              cx="64"
              cy="64"
              r="52"
              className="fill-transparent stroke-[#C1FF00] stroke-2"
              strokeDasharray={327}
            />
            {/* Texte circulaire - rayon plus grand (r=60) */}
            <path
              id={`textPath-${step.id}`}
              d="M 64 4 A 60 60 0 1 1 63.999 4"
              fill="none"
              className="text-[#8364FF]"
            />
            <text className="text-[15px] uppercase fill-[#8364FF]">
              <textPath
                href={`#textPath-${step.id}`}
                startOffset="0%"
                className="font-protest tracking-[0.25em]"
              >
                • STEP {step.id} • STEP {step.id} • STEP {step.id} • STEP {step.id} •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-sm text-[#C1FF00] font-protest relative group">
              <HyperText
                text={step.title}
                duration={1000}
                className="text-[#C1FF00] font-protest"
                animateOnLoad={false}
              />
              <span className="absolute left-0 -bottom-0.5 w-full h-[1px] bg-[#C1FF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </div>
          </div>
        </div>
        
        {/* Step title */}
        {/* <div className="mt-2 text-xl font-bold text-[#C1FF00]">{step.title}</div> */}
      </div>
      
      {/* Step description */}
      <p className="text-sm text-gray-400">{step.description}</p>
    </motion.div>
  )
}

export default function ProcessSection() {
  return (
    <section className="relative bg-black py-24">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-16 text-center text-4xl font-bold"
        >
          <span className="font-protest text-[#8364FF] text-4xl block -mb-5 relative z-10">VOICI MON</span>
          <span className="font-archivo text-[#C1FF00] text-5xl font-black relative z-0">PROCESS</span>
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="mb-16 grid gap-8 md:grid-cols-2 text-center md:text-left"
        >
          <p className="text-gray-400">
            J'ai trouvé la formule parfaite qui se démarque dans l'océan de la monotonie
            et transforme les visiteurs de votre site web en clients fidèles.
          </p>
          <p className="text-gray-400">
            Mon approche intelligente et mon attention aux détails me distinguent des autres
            développeurs freelance, offrant une qualité premium à chaque projet.
          </p>
        </motion.div>

        {/* Onboarding Process Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="mb-12 text-center"
        >
          <h3 className="font-archivo text-2xl font-bold text-[#C1FF00]">MON PROCESSUS D'ONBOARDING</h3>
          <p className="font-protest mt-2 text-white">Voici mon processus en 5 étapes :</p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 mb-16">
          {steps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <p className="mb-6 text-gray-400">
            Si cela vous intéresse, envoyez-moi un message et discutons de notre collaboration.
          </p>
          <Button3D>
            <span className="flex items-center gap-2 font-protest">
              ENVOYER UN MESSAGE
              <MessageSquare size={20} className="inline-block" />
            </span>
          </Button3D>
        </motion.div>
      </div>
    </section>
  )
}

