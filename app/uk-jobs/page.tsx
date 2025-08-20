"use client"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Clock, PoundSterlingIcon as Pound, Users, Building, ArrowRight, Filter } from "lucide-react"

export default function UKJobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("All Types")
  const [salaryRange, setSalaryRange] = useState("All Salaries")

  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp London",
      location: "London, UK",
      type: "Full-time",
      salary: "£70,000 - £90,000",
      posted: "2 days ago",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      description: "Join our innovative team building next-generation web applications...",
      applicants: 23,
      featured: true,
    },
    {
      id: 2,
      title: "Product Manager",
      company: "FinTech Innovations",
      location: "Manchester, UK",
      type: "Full-time",
      salary: "£60,000 - £80,000",
      posted: "1 day ago",
      skills: ["Product Strategy", "Agile", "Analytics", "Leadership"],
      description: "Lead product development for our cutting-edge financial platform...",
      applicants: 31,
      featured: false,
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudScale Ltd",
      location: "Edinburgh, UK",
      type: "Full-time",
      salary: "£55,000 - £75,000",
      posted: "3 days ago",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
      description: "Build and maintain scalable cloud infrastructure...",
      applicants: 18,
      featured: false,
    },
    {
      id: 4,
      title: "UX Designer",
      company: "Design Studio",
      location: "Bristol, UK",
      type: "Contract",
      salary: "£400 - £500/day",
      posted: "1 week ago",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      description: "Create beautiful and intuitive user experiences...",
      applicants: 12,
      featured: true,
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "AI Research Lab",
      location: "Cambridge, UK",
      type: "Full-time",
      salary: "£65,000 - £85,000",
      posted: "4 days ago",
      skills: ["Python", "Machine Learning", "SQL", "Statistics"],
      description: "Apply machine learning to solve complex business problems...",
      applicants: 27,
      featured: false,
    },
    {
      id: 6,
      title: "Frontend Developer",
      company: "E-commerce Giant",
      location: "Birmingham, UK",
      type: "Full-time",
      salary: "£45,000 - £65,000",
      posted: "5 days ago",
      skills: ["Vue.js", "JavaScript", "CSS", "HTML"],
      description: "Build responsive and performant web applications...",
      applicants: 19,
      featured: false,
    },
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase())
    const matchesType = !jobType || job.type === jobType
    return matchesSearch && matchesLocation && matchesType
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">UK Job Market</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Discover Your Next Opportunity</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore thousands of tech jobs across the UK. Find roles that match your skills and career aspirations.
            </p>
          </div>

          {/* Search Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Search & Filter Jobs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Job title, company, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Location..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Types">All Types</SelectItem>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={salaryRange} onValueChange={setSalaryRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Salary Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Salaries">All Salaries</SelectItem>
                    <SelectItem value="30-50k">£30k - £50k</SelectItem>
                    <SelectItem value="50-70k">£50k - £70k</SelectItem>
                    <SelectItem value="70-90k">£70k - £90k</SelectItem>
                    <SelectItem value="90k+">£90k+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{filteredJobs.length} Jobs Found</h2>
              <p className="text-gray-600">Showing the best matches for your search criteria</p>
            </div>
            <Button variant="outline">
              <ArrowRight className="h-4 w-4 mr-2" />
              Set Job Alert
            </Button>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card
                key={job.id}
                className={`hover:shadow-lg transition-shadow ${job.featured ? "ring-2 ring-blue-200" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        {job.featured && <Badge className="bg-blue-100 text-blue-800">Featured</Badge>}
                      </div>
                      <div className="flex items-center gap-4 text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.posted}</span>
                        </div>
                      </div>
                      <CardDescription className="mb-4">{job.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right ml-6">
                      <div className="flex items-center gap-1 text-green-600 font-semibold mb-2">
                        <Pound className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                        <Users className="h-4 w-4" />
                        <span>{job.applicants} applicants</span>
                      </div>
                      <Button className="w-full">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Jobs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find the Perfect Role?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our AI find opportunities for you. Upload your CV and get matched with roles that fit your skills and
              aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Upload Your CV
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Create Job Alert
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
