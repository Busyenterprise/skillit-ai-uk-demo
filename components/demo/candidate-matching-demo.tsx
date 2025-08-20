"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Filter, Star, MapPin, Clock } from "lucide-react"

export default function CandidateMatchingDemo() {
  const [selectedCandidate, setSelectedCandidate] = useState(0)

  const jobRequirements = {
    title: "Senior React Developer",
    location: "London, UK",
    experience: "5+ years",
    skills: ["React", "TypeScript", "Next.js", "Node.js", "GraphQL"],
    salary: "£70,000 - £90,000",
  }

  const candidates = [
    {
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      location: "London, UK",
      experience: "6 years",
      matchScore: 95,
      avatar: "SC",
      skills: ["React", "TypeScript", "Next.js", "Redux", "GraphQL"],
      availability: "Available immediately",
      salary: "£85,000",
      highlights: [
        "Perfect skill match for React and TypeScript",
        "Strong Next.js experience with 3+ years",
        "Located in target area",
        "Salary expectations align perfectly",
      ],
    },
    {
      name: "Marcus Johnson",
      role: "Full Stack Engineer",
      location: "Manchester, UK",
      experience: "7 years",
      matchScore: 88,
      avatar: "MJ",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      availability: "2 weeks notice",
      salary: "£78,000",
      highlights: [
        "Strong React and Node.js background",
        "Excellent full-stack capabilities",
        "Willing to relocate to London",
        "Competitive salary expectations",
      ],
    },
    {
      name: "Elena Rodriguez",
      role: "Frontend Specialist",
      location: "Edinburgh, UK",
      experience: "5 years",
      matchScore: 82,
      avatar: "ER",
      skills: ["React", "JavaScript", "CSS", "Webpack", "Jest"],
      availability: "1 month notice",
      salary: "£72,000",
      highlights: [
        "Solid React foundation with 5 years",
        "Strong frontend specialization",
        "Open to remote work arrangement",
        "Within salary range",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {/* Job Requirements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-blue-500" />
            Job Requirements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2">{jobRequirements.title}</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {jobRequirements.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {jobRequirements.experience}
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Required Skills</h4>
              <div className="flex flex-wrap gap-1">
                {jobRequirements.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Salary Range</h4>
              <p className="text-sm text-gray-600">{jobRequirements.salary}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Candidate Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Candidate List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-green-500" />
                AI Matched Candidates
              </span>
              <Badge variant="secondary">{candidates.length} matches</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {candidates.map((candidate, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    selectedCandidate === index ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedCandidate(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{candidate.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{candidate.name}</h4>
                        <p className="text-sm text-gray-600">{candidate.role}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{candidate.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="font-bold text-green-600">{candidate.matchScore}%</span>
                      </div>
                      <p className="text-xs text-gray-500">Match Score</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Progress value={candidate.matchScore} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Candidate Details */}
        <Card>
          <CardHeader>
            <CardTitle>Candidate Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="text-center">
                <Avatar className="h-16 w-16 mx-auto mb-3">
                  <AvatarFallback className="text-lg">{candidates[selectedCandidate].avatar}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{candidates[selectedCandidate].name}</h3>
                <p className="text-gray-600">{candidates[selectedCandidate].role}</p>
                <div className="flex items-center justify-center gap-4 mt-2 text-sm text-gray-500">
                  <span>{candidates[selectedCandidate].location}</span>
                  <span>•</span>
                  <span>{candidates[selectedCandidate].experience}</span>
                </div>
              </div>

              {/* Match Score */}
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {candidates[selectedCandidate].matchScore}%
                </div>
                <p className="text-sm text-gray-600">AI Match Score</p>
                <Progress value={candidates[selectedCandidate].matchScore} className="mt-2" />
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-semibold mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {candidates[selectedCandidate].skills.map((skill, index) => (
                    <Badge key={index} variant={jobRequirements.skills.includes(skill) ? "default" : "secondary"}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="font-semibold mb-3">AI Analysis Highlights</h4>
                <ul className="space-y-2">
                  {candidates[selectedCandidate].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Availability & Salary */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <h5 className="font-medium text-sm text-gray-600">Availability</h5>
                  <p className="text-sm">{candidates[selectedCandidate].availability}</p>
                </div>
                <div>
                  <h5 className="font-medium text-sm text-gray-600">Salary Expectation</h5>
                  <p className="text-sm">{candidates[selectedCandidate].salary}</p>
                </div>
              </div>

              <Button className="w-full">Invite to Auction</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center text-sm text-gray-600">
        <p>
          This demo shows AI-powered candidate matching. Real matching includes cultural fit analysis and detailed skill
          assessments.
        </p>
      </div>
    </div>
  )
}
