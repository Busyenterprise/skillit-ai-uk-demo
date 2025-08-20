"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import {
  MapPin,
  Building,
  Clock,
  PoundSterling,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Users,
  Eye,
  Heart,
  Share2,
  ExternalLink,
} from "lucide-react"
import { UK_CITIES, UK_INDUSTRIES } from "@/lib/uk-cities-data"
import { searchUKJobs, formatJobSalary, getTimeAgo, type JobSearchFilters, type UKJobListing } from "@/lib/uk-job-api"

export default function UKJobSearch() {
  const [jobs, setJobs] = useState<UKJobListing[]>([])
  const [loading, setLoading] = useState(false)
  const [totalCount, setTotalCount] = useState(0)
  const [showFilters, setShowFilters] = useState(false)
  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set())

  const [filters, setFilters] = useState<JobSearchFilters>({
    query: "",
    location: "all",
    industry: "all",
    salaryMin: undefined,
    salaryMax: undefined,
    remoteType: "all",
    employmentType: "all",
    experienceLevel: "all",
    sortBy: "date",
    sortOrder: "desc",
    page: 1,
    limit: 10,
  })

  const fetchJobs = async () => {
    setLoading(true)
    try {
      const response = await searchUKJobs(filters)
      setJobs(response.jobs)
      setTotalCount(response.totalCount)
    } catch (error) {
      console.error("Error fetching jobs:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  const handleFilterChange = (key: keyof JobSearchFilters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value, page: 1 }))
  }

  const handleSearch = () => {
    fetchJobs()
  }

  const handleSaveJob = (jobId: string) => {
    setSavedJobs((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(jobId)) {
        newSet.delete(jobId)
      } else {
        newSet.add(jobId)
      }
      return newSet
    })
  }

  const clearFilters = () => {
    setFilters({
      query: "",
      location: "all",
      industry: "all",
      salaryMin: undefined,
      salaryMax: undefined,
      remoteType: "all",
      employmentType: "all",
      experienceLevel: "all",
      sortBy: "date",
      sortOrder: "desc",
      page: 1,
      limit: 10,
    })
  }

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-center">Find Your Dream Job in the UK</CardTitle>
          <CardDescription className="text-center text-lg">
            Search thousands of opportunities across {UK_CITIES.length}+ UK cities
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Main Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Job title, company, or keywords..."
                value={filters.query}
                onChange={(e) => handleFilterChange("query", e.target.value)}
                className="pl-10 h-12 text-lg"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSearch} disabled={loading} className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
                {loading ? "Searching..." : "Search Jobs"}
              </Button>
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="h-12 px-4 md:hidden">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Filters - Always visible on desktop */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <Select value={filters.location} onValueChange={(value) => handleFilterChange("location", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {UK_CITIES.map((city) => (
                  <SelectItem key={city.name} value={city.name.toLowerCase()}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.industry} onValueChange={(value) => handleFilterChange("industry", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {UK_INDUSTRIES.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.remoteType} onValueChange={(value) => handleFilterChange("remoteType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Work Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="onsite">On-site</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.experienceLevel}
              onValueChange={(value) => handleFilterChange("experienceLevel", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
                <SelectItem value="lead">Lead/Principal</SelectItem>
                <SelectItem value="executive">Executive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Advanced Filters - Collapsible */}
          {(showFilters || window.innerWidth >= 768) && (
            <div className="border-t pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Advanced Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-blue-600 hover:text-blue-700">
                  Clear All
                </Button>
              </div>

              {/* Mobile Filters */}
              <div className="md:hidden space-y-4">
                <Select value={filters.location} onValueChange={(value) => handleFilterChange("location", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {UK_CITIES.map((city) => (
                      <SelectItem key={city.name} value={city.name.toLowerCase()}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={filters.industry} onValueChange={(value) => handleFilterChange("industry", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    {UK_INDUSTRIES.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Salary Range */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Min Salary (£)</label>
                  <Input
                    type="number"
                    placeholder="e.g. 40000"
                    value={filters.salaryMin || ""}
                    onChange={(e) =>
                      handleFilterChange("salaryMin", e.target.value ? Number.parseInt(e.target.value) : undefined)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Salary (£)</label>
                  <Input
                    type="number"
                    placeholder="e.g. 80000"
                    value={filters.salaryMax || ""}
                    onChange={(e) =>
                      handleFilterChange("salaryMax", e.target.value ? Number.parseInt(e.target.value) : undefined)
                    }
                  />
                </div>
              </div>

              {/* Additional Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  value={filters.employmentType}
                  onValueChange={(value) => handleFilterChange("employmentType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Employment Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="permanent">Permanent</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="temporary">Temporary</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filters.sortBy} onValueChange={(value) => handleFilterChange("sortBy", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Date Posted</SelectItem>
                    <SelectItem value="salary">Salary</SelectItem>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="company">Company</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Results Summary */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4 border-t">
            <div className="text-sm text-gray-600 mb-2 md:mb-0">
              {loading ? "Searching..." : `${totalCount.toLocaleString()} jobs found`}
            </div>
            <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)} className="md:hidden">
              {showFilters ? (
                <>
                  Hide Filters <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  Show Filters <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Job Results */}
      <div className="space-y-4">
        {loading ? (
          // Loading Skeletons
          Array.from({ length: 5 }).map((_, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <div className="flex space-x-4">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    </div>
                    <Skeleton className="h-10 w-24" />
                  </div>
                  <Skeleton className="h-16 w-full" />
                  <div className="flex space-x-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : jobs.length > 0 ? (
          jobs.map((job) => (
            <Card
              key={job.id}
              className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-blue-500"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                  {/* Job Info */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                            {job.title}
                          </h3>
                          <div className="flex items-center space-x-2 ml-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleSaveJob(job.id)}
                              className={`p-2 ${savedJobs.has(job.id) ? "text-red-500" : "text-gray-400"}`}
                            >
                              <Heart className={`h-4 w-4 ${savedJobs.has(job.id) ? "fill-current" : ""}`} />
                            </Button>
                            <Button variant="ghost" size="sm" className="p-2 text-gray-400">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <Building className="h-4 w-4 mr-1" />
                            <span className="font-medium">{job.employer.companyName}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <PoundSterling className="h-4 w-4 mr-1" />
                            <span className="font-medium text-green-600">{formatJobSalary(job)}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{getTimeAgo(job.createdAt)}</span>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="capitalize">
                            {job.remoteType}
                          </Badge>
                          <Badge variant="secondary" className="capitalize">
                            {job.employmentType}
                          </Badge>
                          <Badge variant="outline" className="capitalize">
                            {job.experienceLevel}
                          </Badge>
                          <Badge variant="outline">{job.employer.industry}</Badge>
                          {job.visaSponsorshipAvailable && (
                            <Badge className="bg-green-100 text-green-800">Visa Sponsorship</Badge>
                          )}
                          {job.isFeatured && <Badge className="bg-yellow-100 text-yellow-800">Featured</Badge>}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed line-clamp-3">{job.shortDescription}</p>

                    {/* Skills */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {job.skillRequirements.slice(0, 6).map((req, index) => (
                          <Badge key={index} variant={req.required ? "default" : "outline"} className="text-xs">
                            {req.skill.name}
                            {req.experienceYears && ` (${req.experienceYears}y)`}
                          </Badge>
                        ))}
                        {job.skillRequirements.length > 6 && (
                          <Badge variant="outline" className="text-xs">
                            +{job.skillRequirements.length - 6} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Footer Info */}
                    <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 pt-2 border-t">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          <span>{job.viewCount} views</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          <span>{job.applicationCount} applications</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-3 w-3 mr-1" />
                          <span>{job.employer.companySize}</span>
                        </div>
                      </div>
                      {job.applicationDeadline && (
                        <div className="text-orange-600">
                          Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-2 lg:w-auto w-full">
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full lg:w-auto">Apply Now</Button>
                    <Button variant="outline" className="w-full lg:w-auto bg-transparent">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="pt-6 text-center py-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or browse all available positions.
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Pagination */}
      {!loading && jobs.length > 0 && (
        <div className="flex justify-center">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              disabled={filters.page === 1}
              onClick={() => handleFilterChange("page", (filters.page || 1) - 1)}
            >
              Previous
            </Button>
            <span className="text-sm text-gray-600 px-4">
              Page {filters.page || 1} of {Math.ceil(totalCount / (filters.limit || 10))}
            </span>
            <Button
              variant="outline"
              disabled={!jobs.length || jobs.length < (filters.limit || 10)}
              onClick={() => handleFilterChange("page", (filters.page || 1) + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
