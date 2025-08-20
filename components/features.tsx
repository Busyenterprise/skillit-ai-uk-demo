"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Zap, Target, Shield, BarChart3, Users, ArrowRight, CheckCircle } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Advanced algorithms analyse skills, experience, and cultural fit to find perfect candidates.",
      benefits: ["95% accuracy rate", "Eliminates bias", "Continuous learning"],
      category: "AI Technology",
    },
    {
      icon: Zap,
      title: "Live Skill Auctions",
      description: "Revolutionary system where candidates demonstrate abilities in real-time competitive environments.",
      benefits: ["See skills in action", "Competitive pricing", "Transparent process"],
      category: "Innovation",
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Multi-dimensional analysis considering technical skills, location, salary, and career goals.",
      benefits: ["Location-based", "Salary alignment", "Career mapping"],
      category: "Matching",
    },
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Built for UK regulations with complete data protection and candidate privacy controls.",
      benefits: ["Full compliance", "Data encryption", "Consent management"],
      category: "Compliance",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights into your hiring process with detailed performance metrics.",
      benefits: ["Real-time metrics", "Pipeline analysis", "ROI tracking"],
      category: "Analytics",
    },
    {
      icon: Users,
      title: "ATS Integration",
      description: "Seamlessly connect with your existing systems for unified workflow management.",
      benefits: ["50+ integrations", "Real-time sync", "Single sign-on"],
      category: "Integration",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Platform Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Everything You Need to Transform Hiring</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to streamline your recruitment process and deliver exceptional results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="secondary">{feature.category}</Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Spotlight */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white">Featured Innovation</Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Live Skill Auctions</h3>
              <p className="text-xl text-blue-100 mb-6">
                Revolutionary approach to candidate assessment. Watch candidates demonstrate their skills in real-time
                competitive environments.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <span>Real-time skill demonstrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <span>Competitive bidding process</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <span>Transparent evaluation metrics</span>
                </li>
              </ul>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Experience Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Active Auction</span>
                  <Badge className="bg-green-500 text-white">Live</Badge>
                </div>
                <h4 className="text-xl font-semibold">Senior React Developer</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-blue-200">Current Bid</span>
                    <div className="text-2xl font-bold">£85,000</div>
                  </div>
                  <div>
                    <span className="text-blue-200">Time Left</span>
                    <div className="text-2xl font-bold">2:45</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-blue-200">7 active bidders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
