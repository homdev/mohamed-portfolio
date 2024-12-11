'use client'

import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'
import { Button3D } from './ui/Button3D'
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from './ui/accordion'

const faqs = [
  {
    question: "QUE POUVEZ-VOUS FAIRE GRATUITEMENT ?",
    answer: [
      "• Je peux réaliser un audit vidéo de 3-5 minutes de votre contenu écrit",
      "• Je peux réécrire le titre de votre site web/landing page"
    ]
  },
  {
    question: "COMBIEN DE RÉVISIONS PROPOSEZ-VOUS ?",
    answer: [
      "• Jusqu'à 3 révisions majeures sont incluses dans chaque projet",
      "• Les ajustements mineurs sont illimités",
      "• Des révisions supplémentaires peuvent être négociées si nécessaire"
    ]
  },
  {
    question: "COMBIEN DE TEMPS POUR CRÉER UNE LANDING PAGE ?",
    answer: [
      "• Une landing page simple peut être livrée en 5-7 jours ouvrables",
      "• Les projets plus complexes peuvent prendre 2-3 semaines",
      "• Le délai exact dépend de la complexité et des fonctionnalités requises"
    ]
  }
]

export default function FAQSection() {
  return (
    <section className="relative bg-black py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-16 text-center"
        >
          <span className="font-protest text-[#8364FF] text-4xl block -mb-5 relative z-10">VOICI LA</span>
          <span className="font-archivo text-[#C1FF00] text-5xl font-black relative z-0">FAQ</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-lg border border-[#8364FF]/20 bg-[#0A0A0A] overflow-hidden backdrop-blur-sm"
              >
                <AccordionTrigger 
                  className="px-6 py-4 text-[#FF8656] hover:text-[#FF8656]/80 font-archivo flex items-center justify-between"
                >
                  <span className="text-2xl">{faq.question}</span>
                  <div className="rounded-full p-2 bg-[#FF8656]/10 transform transition-transform duration-300">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="transform transition-transform duration-300 [&[data-state=open]>svg]:rotate-180"
                    >
                      <path 
                        d="M12 15L17 10H7L12 15Z" 
                        fill="#FF8656"
                      />
                    </svg>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white">
                  {faq.answer.map((line, i) => (
                    <p key={i} className="mb-2">{line}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bouton CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mt-16 flex justify-center"
        >
          <Button3D>
            <span className="flex items-center gap-2 font-protest">
              ENVOYER UN MESSAGE
              <MessageSquare size={20} className="inline-block" />
            </span>
          </Button3D>
        </motion.div>
      </div>

      {/* Effets de lumière */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#8364FF]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[#C1FF00]/5 blur-[120px] rounded-full" />
      </div> */}
    </section>
  )
} 