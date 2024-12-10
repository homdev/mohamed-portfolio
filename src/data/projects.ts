export type Project = {
  id: number
  title: string
  subtitle: string
  category: 'landing page' | 'website' | 'mobile app' | 'seo'
  image: string
}

export const projects: Project[] = [
    {
      id: 1,
      title: 'COBALT',
      subtitle: 'FINANCE LANDING PAGE',
      category: 'landing page',
      image: 'https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg'
    },
    {
      id: 2,
      title: 'HIPPORIUM',
      subtitle: 'NFT LANDING PAGE',
      category: 'landing page',
      image: 'https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg'
    },
    {
      id: 3,
      title: 'GRANDROYALE',
      subtitle: 'HOTEL WEBSITE',
      category: 'seo',
      image: 'https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg'
    },
    {
      id: 4,
      title: 'BEATCLUB',
      subtitle: 'MUSIC CREATORS',
      category: 'landing page',
      image: 'https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg'
    },
    // Nouveaux projets ajoutés
    // LANDING PAGE
    {
      id: 5,
      title: 'EDUCATELY',
      subtitle: 'EDUCATION PLATFORM LANDING PAGE',
      category: 'landing page',
      image: 'https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg'
    },

    // WEBSITE
    {
      id: 8,
      title: 'CLOUDNET',
      subtitle: 'CLOUD SERVICES WEBSITE',
      category: 'website',
      image: 'https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg'
    },
    {
      id: 9,
      title: 'FASHIONZILLA',
      subtitle: 'FASHION E-COMMERCE WEBSITE',
      category: 'website',
      image: 'https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg'
    },
    {
      id: 10,
      title: 'REALTYPRO',
      subtitle: 'REAL ESTATE WEBSITE',
      category: 'website',
      image: 'https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg'
    },
    // MOBILE APP
    {
      id: 11,
      title: 'FITTRACK',
      subtitle: 'FITNESS MOBILE APP',
      category: 'mobile app',
      image: 'https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg'
    },
    {
      id: 12,
      title: 'MEALIFY',
      subtitle: 'FOOD DELIVERY APP',
      category: 'mobile app',
      image: 'https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg'
    },
    {
      id: 13,
      title: 'STAYSAFE',
      subtitle: 'SAFETY MOBILE APP',
      category: 'mobile app',
      image: 'https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg'
    },
    // SEO
    {
      id: 14,
      title: 'SHOPZOOM',
      subtitle: 'E-COMMERCE SEO OPTIMIZATION',
      category: 'seo',
      image: 'https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg'
    },
    {
      id: 15,
      title: 'FOODIFY',
      subtitle: 'FOOD DELIVERY SEO OPTIMIZATION',
      category: 'seo',
      image: 'https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg'
    },
    {
      id: 16,
      title: 'HEALTHSMART',
      subtitle: 'HEALTHCARE SEO',
      category: 'seo',
      image: 'https://kzmq9dv5qxfvma5ktxte.lite.vusercontent.net/placeholder.svg'
    },
  ]
  

export const categories = ['landing page', 'website', 'mobile app', 'seo'] 