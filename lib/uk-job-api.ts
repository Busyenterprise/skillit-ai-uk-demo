export interface UKJobListing {
  id: string
  title: string
  description: string
  shortDescription: string
  location: string
  city: string
  region: string
  salaryMin?: number
  salaryMax?: number
  salaryType: "annual" | "daily" | "hourly"
  currency: "GBP"
  remoteType: "onsite" | "remote" | "hybrid"
  employmentType: "permanent" | "contract" | "temporary" | "internship"
  experienceLevel: "entry" | "mid" | "senior" | "lead" | "executive"
  createdAt: string
  updatedAt: string
  expiresAt: string
  isActive: boolean
  isFeatured: boolean
  visaSponsorshipAvailable: boolean
  rightToWorkRequired: boolean
  employer: {
    id: string
    companyName: string
    industry: string
    companySize: "startup" | "small" | "medium" | "large" | "enterprise"
    website?: string
    description: string
    logo?: string
    benefits: string[]
    workingArrangements: string[]
  }
  skillRequirements: Array<{
    skill: {
      id: string
      name: string
      category: string
    }
    required: boolean
    experienceYears?: number
  }>
  benefits: string[]
  applicationDeadline?: string
  startDate?: string
  workingHours: string
  applicationCount: number
  viewCount: number
  tags: string[]
}

export interface JobSearchFilters {
  query?: string
  location?: string
  city?: string
  region?: string
  salaryMin?: number
  salaryMax?: number
  remoteType?: string
  employmentType?: string
  experienceLevel?: string
  industry?: string
  companySize?: string
  visaSponsorshipAvailable?: boolean
  skills?: string[]
  postedWithin?: number // days
  sortBy?: "relevance" | "date" | "salary" | "company"
  sortOrder?: "asc" | "desc"
  page?: number
  limit?: number
}

export interface JobSearchResponse {
  jobs: UKJobListing[]
  totalCount: number
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  filters: JobSearchFilters
  facets: {
    locations: Array<{ name: string; count: number }>
    industries: Array<{ name: string; count: number }>
    salaryRanges: Array<{ range: string; count: number }>
    remoteTypes: Array<{ type: string; count: number }>
    experienceLevels: Array<{ level: string; count: number }>
  }
}

// Mock job data generator for demonstration
export function generateMockUKJobs(): UKJobListing[] {
  const mockJobs: UKJobListing[] = [
    {
      id: "job-001",
      title: "Senior React Developer",
      description:
        "We are seeking an experienced React Developer to join our growing team in London. You will be responsible for building scalable web applications using modern React patterns, TypeScript, and cloud technologies. The ideal candidate will have 4+ years of experience with React, strong knowledge of state management, and experience with testing frameworks.",
      shortDescription: "Senior React Developer role with competitive salary and excellent benefits in central London.",
      location: "London, UK",
      city: "London",
      region: "Greater London",
      salaryMin: 70000,
      salaryMax: 90000,
      salaryType: "annual",
      currency: "GBP",
      remoteType: "hybrid",
      employmentType: "permanent",
      experienceLevel: "senior",
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      isActive: true,
      isFeatured: true,
      visaSponsorshipAvailable: true,
      rightToWorkRequired: true,
      employer: {
        id: "emp-001",
        companyName: "TechFlow Solutions",
        industry: "FinTech",
        companySize: "medium",
        website: "https://techflow.co.uk",
        description: "Leading FinTech company revolutionizing digital payments",
        benefits: ["Private Healthcare", "Pension Scheme", "Flexible Working", "Learning Budget"],
        workingArrangements: ["Hybrid Working", "Flexible Hours", "Home Office Setup"],
      },
      skillRequirements: [
        { skill: { id: "skill-001", name: "React", category: "Frontend" }, required: true, experienceYears: 4 },
        { skill: { id: "skill-002", name: "TypeScript", category: "Programming" }, required: true, experienceYears: 3 },
        { skill: { id: "skill-003", name: "Node.js", category: "Backend" }, required: false, experienceYears: 2 },
        { skill: { id: "skill-004", name: "AWS", category: "Cloud" }, required: false, experienceYears: 2 },
      ],
      benefits: ["Private Healthcare", "25 Days Holiday", "Pension Scheme", "Stock Options"],
      workingHours: "37.5 hours per week",
      applicationCount: 47,
      viewCount: 234,
      tags: ["React", "TypeScript", "FinTech", "Hybrid"],
    },
    {
      id: "job-002",
      title: "DevOps Engineer",
      description:
        "Join our platform team as a DevOps Engineer in Manchester. You'll work with cutting-edge cloud technologies, implement CI/CD pipelines, and ensure our infrastructure scales efficiently. We're looking for someone with strong experience in Kubernetes, Docker, and cloud platforms.",
      shortDescription: "DevOps Engineer opportunity in Manchester with focus on cloud infrastructure and automation.",
      location: "Manchester, UK",
      city: "Manchester",
      region: "North West England",
      salaryMin: 55000,
      salaryMax: 75000,
      salaryType: "annual",
      currency: "GBP",
      remoteType: "hybrid",
      employmentType: "permanent",
      experienceLevel: "mid",
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      expiresAt: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000).toISOString(),
      isActive: true,
      isFeatured: false,
      visaSponsorshipAvailable: false,
      rightToWorkRequired: true,
      employer: {
        id: "emp-002",
        companyName: "CloudTech Innovations",
        industry: "Software Development",
        companySize: "large",
        website: "https://cloudtech.co.uk",
        description: "Cloud-first software company building next-generation platforms",
        benefits: ["Health Insurance", "Pension", "Remote Work", "Training Budget"],
        workingArrangements: ["Hybrid", "Flexible Hours", "Remote First"],
      },
      skillRequirements: [
        { skill: { id: "skill-005", name: "Kubernetes", category: "DevOps" }, required: true, experienceYears: 3 },
        { skill: { id: "skill-006", name: "Docker", category: "DevOps" }, required: true, experienceYears: 3 },
        { skill: { id: "skill-007", name: "AWS", category: "Cloud" }, required: true, experienceYears: 2 },
        { skill: { id: "skill-008", name: "Python", category: "Programming" }, required: false, experienceYears: 2 },
      ],
      benefits: ["Health Insurance", "22 Days Holiday", "Pension", "Learning Budget"],
      workingHours: "40 hours per week",
      applicationCount: 23,
      viewCount: 156,
      tags: ["DevOps", "Kubernetes", "AWS", "Manchester"],
    },
    {
      id: "job-003",
      title: "Data Scientist",
      description:
        "Exciting opportunity for a Data Scientist to join our AI team in Edinburgh. You'll work on machine learning models, analyze large datasets, and contribute to our AI-driven products. We're looking for someone with strong Python skills, experience with ML frameworks, and a passion for data-driven insights.",
      shortDescription: "Data Scientist role in Edinburgh focusing on machine learning and AI product development.",
      location: "Edinburgh, UK",
      city: "Edinburgh",
      region: "Scotland",
      salaryMin: 50000,
      salaryMax: 70000,
      salaryType: "annual",
      currency: "GBP",
      remoteType: "onsite",
      employmentType: "permanent",
      experienceLevel: "mid",
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      expiresAt: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString(),
      isActive: true,
      isFeatured: true,
      visaSponsorshipAvailable: true,
      rightToWorkRequired: true,
      employer: {
        id: "emp-003",
        companyName: "AI Research Labs",
        industry: "AI/Machine Learning",
        companySize: "medium",
        website: "https://airesearch.co.uk",
        description: "Cutting-edge AI research company developing next-generation ML solutions",
        benefits: ["Private Healthcare", "Research Time", "Conference Budget", "Equity"],
        workingArrangements: ["On-site", "Flexible Hours", "Research Days"],
      },
      skillRequirements: [
        { skill: { id: "skill-009", name: "Python", category: "Programming" }, required: true, experienceYears: 3 },
        { skill: { id: "skill-010", name: "Machine Learning", category: "AI/ML" }, required: true, experienceYears: 2 },
        { skill: { id: "skill-011", name: "TensorFlow", category: "AI/ML" }, required: false, experienceYears: 1 },
        { skill: { id: "skill-012", name: "SQL", category: "Database" }, required: true, experienceYears: 2 },
      ],
      benefits: ["Private Healthcare", "25 Days Holiday", "Research Budget", "Stock Options"],
      workingHours: "37 hours per week",
      applicationCount: 31,
      viewCount: 189,
      tags: ["Data Science", "Python", "AI", "Edinburgh"],
    },
  ]

  return mockJobs
}

export async function searchUKJobs(filters: JobSearchFilters): Promise<JobSearchResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  const allJobs = generateMockUKJobs()
  let filteredJobs = [...allJobs]

  // Apply filters
  if (filters.query) {
    const query = filters.query.toLowerCase()
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.employer.companyName.toLowerCase().includes(query),
    )
  }

  if (filters.location && filters.location !== "all") {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.city.toLowerCase().includes(filters.location!.toLowerCase()) ||
        job.region.toLowerCase().includes(filters.location!.toLowerCase()),
    )
  }

  if (filters.salaryMin) {
    filteredJobs = filteredJobs.filter((job) => job.salaryMax && job.salaryMax >= filters.salaryMin!)
  }

  if (filters.salaryMax) {
    filteredJobs = filteredJobs.filter((job) => job.salaryMin && job.salaryMin <= filters.salaryMax!)
  }

  if (filters.remoteType && filters.remoteType !== "all") {
    filteredJobs = filteredJobs.filter((job) => job.remoteType === filters.remoteType)
  }

  if (filters.employmentType && filters.employmentType !== "all") {
    filteredJobs = filteredJobs.filter((job) => job.employmentType === filters.employmentType)
  }

  if (filters.industry && filters.industry !== "all") {
    filteredJobs = filteredJobs.filter((job) => job.employer.industry === filters.industry)
  }

  // Sorting
  if (filters.sortBy) {
    filteredJobs.sort((a, b) => {
      let comparison = 0
      switch (filters.sortBy) {
        case "date":
          comparison = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          break
        case "salary":
          const aSalary = a.salaryMax || a.salaryMin || 0
          const bSalary = b.salaryMax || b.salaryMin || 0
          comparison = bSalary - aSalary
          break
        case "company":
          comparison = a.employer.companyName.localeCompare(b.employer.companyName)
          break
        default:
          comparison = 0
      }
      return filters.sortOrder === "asc" ? comparison : -comparison
    })
  }

  // Pagination
  const page = filters.page || 1
  const limit = filters.limit || 10
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedJobs = filteredJobs.slice(startIndex, endIndex)

  // Generate facets
  const facets = {
    locations: Array.from(new Set(allJobs.map((job) => job.city)))
      .map((city) => ({ name: city, count: allJobs.filter((job) => job.city === city).length }))
      .sort((a, b) => b.count - a.count),
    industries: Array.from(new Set(allJobs.map((job) => job.employer.industry)))
      .map((industry) => ({
        name: industry,
        count: allJobs.filter((job) => job.employer.industry === industry).length,
      }))
      .sort((a, b) => b.count - a.count),
    salaryRanges: [
      { range: "£30k-£50k", count: allJobs.filter((job) => (job.salaryMax || 0) <= 50000).length },
      {
        range: "£50k-£70k",
        count: allJobs.filter((job) => (job.salaryMin || 0) >= 50000 && (job.salaryMax || 0) <= 70000).length,
      },
      { range: "£70k+", count: allJobs.filter((job) => (job.salaryMin || 0) >= 70000).length },
    ],
    remoteTypes: Array.from(new Set(allJobs.map((job) => job.remoteType))).map((type) => ({
      type,
      count: allJobs.filter((job) => job.remoteType === type).length,
    })),
    experienceLevels: Array.from(new Set(allJobs.map((job) => job.experienceLevel))).map((level) => ({
      level,
      count: allJobs.filter((job) => job.experienceLevel === level).length,
    })),
  }

  return {
    jobs: paginatedJobs,
    totalCount: filteredJobs.length,
    currentPage: page,
    totalPages: Math.ceil(filteredJobs.length / limit),
    hasNextPage: endIndex < filteredJobs.length,
    hasPreviousPage: page > 1,
    filters,
    facets,
  }
}

export function formatJobSalary(job: UKJobListing): string {
  if (!job.salaryMin && !job.salaryMax) return "Salary not specified"

  const formatAmount = (amount: number) => {
    if (job.salaryType === "annual") {
      return amount >= 1000 ? `£${(amount / 1000).toFixed(0)}k` : `£${amount.toLocaleString()}`
    }
    return `£${amount.toLocaleString()}`
  }

  if (job.salaryMin && job.salaryMax) {
    return `${formatAmount(job.salaryMin)} - ${formatAmount(job.salaryMax)} ${job.salaryType === "annual" ? "per year" : job.salaryType === "daily" ? "per day" : "per hour"}`
  }

  if (job.salaryMin) {
    return `From ${formatAmount(job.salaryMin)} ${job.salaryType === "annual" ? "per year" : job.salaryType === "daily" ? "per day" : "per hour"}`
  }

  if (job.salaryMax) {
    return `Up to ${formatAmount(job.salaryMax)} ${job.salaryType === "annual" ? "per year" : job.salaryType === "daily" ? "per day" : "per hour"}`
  }

  return "Salary not specified"
}

export function getTimeAgo(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

  if (diffInHours < 1) return "Just now"
  if (diffInHours < 24) return `${diffInHours}h ago`

  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) return `${diffInDays}d ago`

  const diffInWeeks = Math.floor(diffInDays / 7)
  if (diffInWeeks < 4) return `${diffInWeeks}w ago`

  const diffInMonths = Math.floor(diffInDays / 30)
  return `${diffInMonths}mo ago`
}
