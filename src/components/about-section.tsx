import { FC } from 'react'
import Image from 'next/image'


const TimelineItem: FC<{
  year: string
  title: string
  description: string
  isLast?: boolean
}> = ({ year, title, description, isLast }) => (
  // Ajout de flex-1 et min-w-0 pour garantir une taille égale
  <div className="relative flex-1 min-w-0">
    {!isLast && (
      <div className="absolute hidden xl:block top-4 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px border-t-2 border-dashed border-[#8364FF]/30" />
    )}
    {!isLast && (
      <div className="absolute xl:hidden left-4 top-4 h-[calc(100%+2rem)] w-px border-l-2 border-dashed border-[#8364FF]/30" />
    )}
    <div className="relative z-10 flex items-center gap-3 xl:flex-col xl:items-start">
      <div className="h-8 w-8 rounded bg-[#8364FF] p-2 xl:mx-auto">
        <div className="h-full w-full rounded-sm bg-[#C1FF00]" />
      </div>
      {/* Ajout de h-full pour que la boîte prenne toute la hauteur disponible */}
      <div className="rounded-lg border-2 border-dashed border-[#8364FF] bg-black/50 p-4 xl:w-full xl:mt-4 h-full">
        <div className="font-archivo text-xl font-bold text-[#C1FF00]">{year}</div>
        <div className="font-protest font-medium text-white">{title}</div>
        <div className="text-sm text-gray-400">{description}</div>
      </div>
    </div>
  </div>
)

export default function AboutSection() {
  return (
    <section className="relative bg-black py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center relative">
          <span className="font-protest text-[#8364FF] text-6xl block -mb-5 relative z-10">Somthing</span>
          <span className="font-archivo text-[#C1FF00] text-5xl font-black relative z-0">ABOUT ME</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
          {/* Colonne gauche */}
          <div className="space-y-4">
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
          </div>

          {/* Image centrale */}
          <div className="relative aspect-square">
            <Image
              src="https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg" // Assurez-vous d'avoir une image appropriée
              alt="Mohamed - Web Developer"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute right-4 top-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF8656]">
              <div className="h-0 w-0 border-l-[12px] border-t-[8px] border-b-[8px] border-l-white border-t-transparent border-b-transparent" />
            </div>
          </div>

          {/* Colonne droite */}
          <div className="space-y-4 text-gray-400">
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
          </div>
        </div>

        {/* Timeline en bas */}
        <div className="flex flex-col xl:flex-row gap-8">
          <TimelineItem
            year="2018"
            title="Web Développement"
            description="J'ai commencé avec HTML, CSS et JavaScript, créant mes premiers sites web statiques."
          />
          <TimelineItem
            year="2019"
            title="Frontend Development"
            description="Maîtrise de React.js et découverte des frameworks modernes."
          />
          <TimelineItem
            year="2020"
            title="Full Stack Development"
            description="Apprentissage de Node.js et des BDD, développement d'applications complètes."
          />
          <TimelineItem
            year="2021"
            title="Mobile Development"
            description="Spécialisation en React Native pour le développement d'applications mobiles."
          />
          <TimelineItem
            year="2022"
            title="Architecture & DevOps"
            description="Maîtrise des architectures cloud et des pratiques DevOps modernes."
          />
          <TimelineItem
            year="2023"
            title="Leadership Technique"
            description="Direction d'équipes de développement et gestion de projets complexes."
            isLast
          />
        </div>
      </div>
    </section>
  )
}

