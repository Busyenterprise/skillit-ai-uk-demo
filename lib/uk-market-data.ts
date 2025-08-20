// UK-specific market data and utilities
export const UK_REGIONS = [
  "London",
  "Manchester",
  "Birmingham",
  "Leeds",
  "Glasgow",
  "Edinburgh",
  "Bristol",
  "Liverpool",
  "Newcastle",
  "Nottingham",
  "Sheffield",
  "Cardiff",
  "Belfast",
] as const

export const UK_INDUSTRIES = [
  "Financial Services",
  "Technology",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Education",
  "Government",
  "Media & Entertainment",
  "Energy",
  "Construction",
  "Professional Services",
  "Telecommunications",
] as const

export const UK_EMPLOYMENT_TYPES = [
  "Permanent",
  "Contract",
  "Temporary",
  "Apprenticeship",
  "Graduate Scheme",
  "Internship",
] as const

export const UK_VISA_STATUSES = [
  "British Citizen",
  "EU Settled Status",
  "EU Pre-Settled Status",
  "Skilled Worker Visa",
  "Global Talent Visa",
  "Graduate Visa",
  "Student Visa",
  "Spouse/Partner Visa",
  "Other",
] as const

export const UK_NOTICE_PERIODS = [
  "Immediate",
  "1 week",
  "2 weeks",
  "1 month",
  "2 months",
  "3 months",
  "6 months",
] as const

// UK salary bands (annual GBP)
export const UK_SALARY_BANDS = {
  "Graduate/Entry Level": { min: 18000, max: 25000 },
  "Junior (1-2 years)": { min: 25000, max: 35000 },
  "Mid-level (3-5 years)": { min: 35000, max: 55000 },
  "Senior (5-8 years)": { min: 55000, max: 80000 },
  "Lead/Principal (8+ years)": { min: 80000, max: 120000 },
  "Director/VP": { min: 120000, max: 200000 },
} as const

// UK tech hubs with average salary multipliers
export const UK_TECH_HUBS = {
  London: { multiplier: 1.3, averageRent: 2000 },
  Manchester: { multiplier: 0.85, averageRent: 800 },
  Edinburgh: { multiplier: 0.9, averageRent: 900 },
  Bristol: { multiplier: 0.95, averageRent: 1100 },
  Birmingham: { multiplier: 0.8, averageRent: 700 },
  Leeds: { multiplier: 0.8, averageRent: 650 },
  Cambridge: { multiplier: 1.1, averageRent: 1300 },
} as const

export function calculateUKSalaryRange(
  baseSalary: number,
  location: string,
  experienceLevel: string,
): { min: number; max: number } {
  const locationMultiplier = UK_TECH_HUBS[location as keyof typeof UK_TECH_HUBS]?.multiplier || 1
  const adjustedSalary = baseSalary * locationMultiplier

  return {
    min: Math.round(adjustedSalary * 0.9),
    max: Math.round(adjustedSalary * 1.1),
  }
}

export function formatUKSalary(amount: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}
