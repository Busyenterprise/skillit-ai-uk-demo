import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Globe, ArrowRight, Linkedin, Twitter, Mail } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "People First",
      description:
        "We believe that great companies are built by great people. Our platform puts human potential at the center of every hiring decision.",
    },
    {
      icon: Target,
      title: "Precision Matching",
      description:
        "We're obsessed with finding the perfect fit. Our AI doesn't just match skills—it understands culture, aspirations, and potential.",
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description:
        "We set the highest standards for ourselves and our platform. Every feature is designed to deliver exceptional results.",
    },
    {
      icon: Globe,
      title: "UK Focused",
      description:
        "Built specifically for the UK market, understanding local regulations, culture, and business practices.",
    },
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Engineering at Deliveroo with 15 years in tech recruitment. Led hiring for 500+ engineers across Europe.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
      email: "sarah@skillit-ai.com",
    },
    {
      name: "Marcus Thompson",
      role: "CTO & Co-Founder",
      bio: "Ex-Google AI researcher specializing in machine learning and natural language processing. PhD from Cambridge.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
      email: "marcus@skillit-ai.com",
    },
    {
      name: "Priya Patel",
      role: "Head of Product",
      bio: "Former Product Director at Monzo. Expert in building user-centric fintech and HR tech products.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
      email: "priya@skillit-ai.com",
    },
    {
      name: "James Wilson",
      role: "Head of Sales",
      bio: "20+ years in enterprise software sales. Previously led UK sales teams at Salesforce and HubSpot.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
      email: "james@skillit-ai.com",
    },
  ]

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "SKILLIT-AI was founded by Sarah Chen and Marcus Thompson in London.",
    },
    {
      year: "2023",
      title: "Seed Funding",
      description: "Raised £2.5M seed round led by Balderton Capital to build our AI platform.",
    },
    {
      year: "2023",
      title: "Beta Launch",
      description: "Launched beta with 50 UK companies, achieving 95% customer satisfaction.",
    },
    {
      year: "2024",
      title: "Series A",
      description: "Closed £12M Series A to expand across Europe and enhance AI capabilities.",
    },
    {
      year: "2024",
      title: "1000+ Companies",
      description: "Reached 1000+ companies using our platform across the UK and Ireland.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">About SKILLIT-AI</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Revolutionizing Recruitment with AI</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to transform how companies find, assess, and hire the best talent. Our AI-powered
              platform makes recruitment faster, fairer, and more effective.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                To democratize access to top talent by creating the world's most intelligent and fair recruitment
                platform. We believe every company deserves access to the best candidates, and every candidate deserves
                to be evaluated fairly based on their true potential.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and every decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experienced leaders from top tech companies, united by a passion for transforming recruitment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.twitter} className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From startup to scale-up, here are the key milestones in our growth story.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow hidden md:block"></div>
                    <div className="md:ml-16 w-full">
                      <Card className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <Badge className="mb-2 bg-blue-100 text-blue-800">{milestone.year}</Badge>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                            <p className="text-gray-600">{milestone.description}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're looking to hire top talent or find your next opportunity, we'd love to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Hiring Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
