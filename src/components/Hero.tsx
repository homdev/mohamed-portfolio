/* eslint-disable react/no-unescaped-entities */

import Safari from "./ui/safari"
import HyperText from "./ui/hyper-text"

export default function Hero() {
  return (
    <section className="container mx-auto px-8 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter relative">
            <span className="font-protest text-[#8364FF] block -mb-5 relative z-10">MOHAMED</span>
            <HyperText 
              text="DÉVELOPPEUR"
              className="font-archivo text-[#C1FF00] font-black block relative z-0"
              duration={1000}
              framerProps={{
                initial: { opacity: 0, y: 0 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 0 },
              }}
            />
            <HyperText 
              text="WEB & MOBILE"
              className="font-archivo text-[#C1FF00] font-black block relative z-0"
              duration={1000}
              framerProps={{
                initial: { opacity: 0, y: 0 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 0 },
              }}
            />
          </h1>
          <p className="text-lg text-gray-300">Transformez vos idées en applications innovantes</p>
        </div>

        <ul className="space-y-6">
          <li className="flex items-start gap-3">
            <span className="text-[#C1FF00] text-xl">✓</span>
            <p>
              <span className="font-protest font-bold">5+ ans d'expérience en développement</span>
              <br />
              <span className="text-gray-400">Expertise en React, React Native et Node.js</span>
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#C1FF00] text-xl">✓</span>
            <p>
              <span className="font-protest font-bold">Solutions sur mesure et évolutives</span>
              <br />
              <span className="text-gray-400">Architectures robustes pour startups et grandes entreprises</span>
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#C1FF00] text-xl">✓</span>
            <p>
              <span className="font-protest font-bold">Approche axée sur les résultats</span>
              <br />
              <span className="text-gray-400">Optimisation des performances et de l'expérience utilisateur</span>
            </p>
          </li>
        </ul>
      </div>

      <div className="relative">
        <Safari 
          url="mohameddev.com"
          src="https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg"
          className="w-full h-auto"
        />

        {/* Circular CTA Button */}
        <div className="absolute -right-4 top-1/2 -translate-y-1/2">
          <button className="relative group">
            <div className="absolute inset-0 rounded-full bg-[#FF8656] transition-transform group-hover:scale-110" />
            <div className="relative flex flex-col items-center justify-center w-32 h-32 rounded-full border-2 border-[#FF8656] bg-black text-[#FF8656] transition-colors group-hover:text-white">
              <span className="font-medium">CONTACTEZ</span>
              <span className="font-medium">MOI</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
} 