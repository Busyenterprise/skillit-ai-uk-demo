export interface UKCity {
  name: string
  region: string
  population: number
  techJobs: number
  averageSalary: number
  topIndustries: string[]
  coordinates: [number, number]
  description: string
}

export const UK_CITIES: UKCity[] = [
  // England - London & South East
  {
    name: "London",
    region: "Greater London",
    population: 9648110,
    techJobs: 45000,
    averageSalary: 85000,
    topIndustries: ["FinTech", "AI/ML", "E-commerce", "Cybersecurity"],
    coordinates: [51.5074, -0.1278],
    description: "Europe's largest tech hub with thriving startup ecosystem",
  },
  {
    name: "Cambridge",
    region: "East of England",
    population: 145818,
    techJobs: 8500,
    averageSalary: 78000,
    topIndustries: ["Biotech", "AI Research", "Hardware", "Software"],
    coordinates: [52.2053, 0.1218],
    description: "Silicon Fen - world-renowned for tech innovation and research",
  },
  {
    name: "Oxford",
    region: "South East England",
    population: 162100,
    techJobs: 6200,
    averageSalary: 72000,
    topIndustries: ["Research", "Biotech", "Software", "Publishing Tech"],
    coordinates: [51.752, -1.2577],
    description: "Historic city with cutting-edge tech and research facilities",
  },
  {
    name: "Reading",
    region: "South East England",
    population: 318014,
    techJobs: 12000,
    averageSalary: 68000,
    topIndustries: ["Software", "Telecommunications", "Gaming", "Consulting"],
    coordinates: [51.4543, -0.9781],
    description: "Thames Valley tech corridor with major corporate presence",
  },
  {
    name: "Brighton",
    region: "South East England",
    population: 290885,
    techJobs: 7800,
    averageSalary: 58000,
    topIndustries: ["Digital Media", "Gaming", "Creative Tech", "E-commerce"],
    coordinates: [50.8225, -0.1372],
    description: "Creative tech hub by the sea with vibrant startup scene",
  },

  // England - North
  {
    name: "Manchester",
    region: "North West England",
    population: 2720000,
    techJobs: 18500,
    averageSalary: 52000,
    topIndustries: ["FinTech", "HealthTech", "E-commerce", "Digital Marketing"],
    coordinates: [53.4808, -2.2426],
    description: "Northern tech powerhouse with growing digital economy",
  },
  {
    name: "Leeds",
    region: "Yorkshire",
    population: 1901934,
    techJobs: 14200,
    averageSalary: 48000,
    topIndustries: ["FinTech", "HealthTech", "Software", "Digital Services"],
    coordinates: [53.8008, -1.5491],
    description: "Major financial and tech center in Northern England",
  },
  {
    name: "Liverpool",
    region: "North West England",
    population: 1420000,
    techJobs: 8900,
    averageSalary: 45000,
    topIndustries: ["Digital Media", "E-commerce", "Software", "Creative Tech"],
    coordinates: [53.4084, -2.9916],
    description: "Growing tech scene with strong digital creative industries",
  },
  {
    name: "Newcastle",
    region: "North East England",
    population: 1650000,
    techJobs: 7200,
    averageSalary: 44000,
    topIndustries: ["Software", "Gaming", "Digital Health", "Renewable Tech"],
    coordinates: [54.9783, -1.6178],
    description: "Emerging tech hub with focus on innovation and sustainability",
  },
  {
    name: "Sheffield",
    region: "Yorkshire",
    population: 1569000,
    techJobs: 6800,
    averageSalary: 43000,
    topIndustries: ["Advanced Manufacturing", "Software", "Gaming", "HealthTech"],
    coordinates: [53.3811, -1.4701],
    description: "Steel city transformed into digital innovation center",
  },

  // England - Midlands
  {
    name: "Birmingham",
    region: "West Midlands",
    population: 2919000,
    techJobs: 16500,
    averageSalary: 50000,
    topIndustries: ["FinTech", "Automotive Tech", "Software", "Digital Services"],
    coordinates: [52.4862, -1.8904],
    description: "UK's second city with rapidly growing tech ecosystem",
  },
  {
    name: "Nottingham",
    region: "East Midlands",
    population: 1200000,
    techJobs: 8100,
    averageSalary: 46000,
    topIndustries: ["Gaming", "Software", "HealthTech", "E-commerce"],
    coordinates: [52.9548, -1.1581],
    description: "Robin Hood's city now home to thriving tech companies",
  },
  {
    name: "Leicester",
    region: "East Midlands",
    population: 1100000,
    techJobs: 5900,
    averageSalary: 44000,
    topIndustries: ["Software", "Digital Services", "E-commerce", "HealthTech"],
    coordinates: [52.6369, -1.1398],
    description: "Diverse tech scene with growing startup community",
  },

  // England - South West
  {
    name: "Bristol",
    region: "South West England",
    population: 1006000,
    techJobs: 12800,
    averageSalary: 55000,
    topIndustries: ["Aerospace Tech", "Software", "Creative Tech", "CleanTech"],
    coordinates: [51.4545, -2.5879],
    description: "Tech hub with strong aerospace and creative industries",
  },
  {
    name: "Bath",
    region: "South West England",
    population: 196000,
    techJobs: 4200,
    averageSalary: 58000,
    topIndustries: ["Software", "Gaming", "Digital Services", "Creative Tech"],
    coordinates: [51.3758, -2.3599],
    description: "Historic spa city with modern tech innovation",
  },
  {
    name: "Exeter",
    region: "South West England",
    population: 465000,
    techJobs: 3800,
    averageSalary: 48000,
    topIndustries: ["Software", "Digital Services", "HealthTech", "AgriTech"],
    coordinates: [50.7184, -3.5339],
    description: "Growing tech center in the South West",
  },

  // Scotland
  {
    name: "Edinburgh",
    region: "Scotland",
    population: 1339000,
    techJobs: 15200,
    averageSalary: 54000,
    topIndustries: ["FinTech", "Software", "Gaming", "AI/ML"],
    coordinates: [55.9533, -3.1883],
    description: "Scotland's capital with thriving fintech and AI sectors",
  },
  {
    name: "Glasgow",
    region: "Scotland",
    population: 1890000,
    techJobs: 11800,
    averageSalary: 48000,
    topIndustries: ["Software", "Gaming", "Digital Media", "HealthTech"],
    coordinates: [55.8642, -4.2518],
    description: "Scotland's largest city with growing tech ecosystem",
  },
  {
    name: "Dundee",
    region: "Scotland",
    population: 415000,
    techJobs: 3200,
    averageSalary: 42000,
    topIndustries: ["Gaming", "Software", "Digital Media", "Life Sciences"],
    coordinates: [56.462, -2.9707],
    description: "UNESCO City of Design with strong gaming industry",
  },
  {
    name: "Aberdeen",
    region: "Scotland",
    population: 490000,
    techJobs: 4100,
    averageSalary: 52000,
    topIndustries: ["Energy Tech", "Software", "Oil & Gas Tech", "Renewable Tech"],
    coordinates: [57.1497, -2.0943],
    description: "Energy capital transitioning to renewable tech hub",
  },

  // Wales
  {
    name: "Cardiff",
    region: "Wales",
    population: 1680000,
    techJobs: 9200,
    averageSalary: 46000,
    topIndustries: ["Software", "Digital Media", "FinTech", "Creative Tech"],
    coordinates: [51.4816, -3.1791],
    description: "Welsh capital with growing tech and creative industries",
  },
  {
    name: "Swansea",
    region: "Wales",
    population: 630000,
    techJobs: 3800,
    averageSalary: 42000,
    topIndustries: ["Software", "Digital Services", "HealthTech", "CleanTech"],
    coordinates: [51.6214, -3.9436],
    description: "Coastal city with emerging tech sector",
  },

  // Northern Ireland
  {
    name: "Belfast",
    region: "Northern Ireland",
    population: 1685000,
    techJobs: 8900,
    averageSalary: 44000,
    topIndustries: ["Software", "Cybersecurity", "FinTech", "Digital Services"],
    coordinates: [54.5973, -5.9301],
    description: "Growing tech hub with strong cybersecurity focus",
  },

  // Additional English Cities
  {
    name: "York",
    region: "Yorkshire",
    population: 825000,
    techJobs: 4500,
    averageSalary: 45000,
    topIndustries: ["Software", "Digital Services", "Tourism Tech", "HealthTech"],
    coordinates: [53.96, -1.0873],
    description: "Historic city with modern tech innovation",
  },
  {
    name: "Canterbury",
    region: "South East England",
    population: 170000,
    techJobs: 2100,
    averageSalary: 48000,
    topIndustries: ["Software", "Digital Services", "EdTech", "Creative Tech"],
    coordinates: [51.2802, 1.0789],
    description: "Cathedral city with growing tech presence",
  },
  {
    name: "Coventry",
    region: "West Midlands",
    population: 435000,
    techJobs: 5200,
    averageSalary: 47000,
    topIndustries: ["Automotive Tech", "Software", "Gaming", "Manufacturing Tech"],
    coordinates: [52.4068, -1.5197],
    description: "City of Culture with strong automotive tech sector",
  },
  {
    name: "Preston",
    region: "North West England",
    population: 550000,
    techJobs: 3400,
    averageSalary: 43000,
    topIndustries: ["Software", "Digital Services", "Manufacturing Tech", "HealthTech"],
    coordinates: [53.7632, -2.7031],
    description: "Growing tech center in Lancashire",
  },
  {
    name: "Bournemouth",
    region: "South West England",
    population: 395000,
    techJobs: 4800,
    averageSalary: 48000,
    topIndustries: ["Software", "Gaming", "Digital Media", "E-commerce"],
    coordinates: [50.7192, -1.8808],
    description: "Coastal tech hub with strong digital creative sector",
  },
  {
    name: "Milton Keynes",
    region: "South East England",
    population: 290000,
    techJobs: 6200,
    averageSalary: 58000,
    topIndustries: ["Software", "Automotive Tech", "Logistics Tech", "AI/ML"],
    coordinates: [52.0406, -0.7594],
    description: "New town with modern tech infrastructure",
  },
  {
    name: "Warwick",
    region: "West Midlands",
    population: 140000,
    techJobs: 2800,
    averageSalary: 52000,
    topIndustries: ["Software", "Gaming", "Digital Services", "Research Tech"],
    coordinates: [52.2819, -1.5849],
    description: "Historic town with university-driven tech innovation",
  },
]

export const UK_REGIONS = [
  "Greater London",
  "South East England",
  "South West England",
  "West Midlands",
  "East Midlands",
  "East of England",
  "Yorkshire",
  "North West England",
  "North East England",
  "Scotland",
  "Wales",
  "Northern Ireland",
]

export const UK_INDUSTRIES = [
  "FinTech",
  "Software Development",
  "AI/Machine Learning",
  "Cybersecurity",
  "E-commerce",
  "Gaming",
  "Digital Media",
  "HealthTech",
  "CleanTech",
  "Automotive Tech",
  "Aerospace Tech",
  "EdTech",
  "Creative Tech",
  "Biotech",
  "Energy Tech",
]

export function formatUKSalary(amount: number): string {
  if (amount >= 1000000) {
    return `£${(amount / 1000000).toFixed(1)}M`
  }
  if (amount >= 1000) {
    return `£${(amount / 1000).toFixed(0)}k`
  }
  return `£${amount.toLocaleString()}`
}

export function getCityByName(name: string): UKCity | undefined {
  return UK_CITIES.find((city) => city.name.toLowerCase() === name.toLowerCase())
}

export function getCitiesByRegion(region: string): UKCity[] {
  return UK_CITIES.filter((city) => city.region === region)
}

export function getTopTechCities(limit = 10): UKCity[] {
  return UK_CITIES.sort((a, b) => b.techJobs - a.techJobs).slice(0, limit)
}
