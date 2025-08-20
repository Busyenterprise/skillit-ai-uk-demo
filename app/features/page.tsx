import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Zap, Target, Shield, BarChart3, Users, Clock, Award, CheckCircle, ArrowRight } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Candidate Matching",
      description:
        "Our advanced AI algorithms analyse skills, experience, and cultural fit to find the perfect candidates for your roles.",
      benefits: [
        "95% accuracy in skill matching",
        "Reduces time-to-hire by 60%",
        "Eliminates unconscious bias",
        "Continuous learning and improvement",
      ],
      category: "AI Technology",
    },
    {
      icon: Zap,
      title: "Live Skill Auctions",
      description:
        "Revolutionary auction system where candidates demonstrate their skills in real-time competitive environments.",
      benefits: [
        "See candidates in action",
        "Competitive salary negotiations",
        "Real-time skill demonstrations",
        "Transparent hiring process",
      ],
      category: "Innovation",
    },
    {
      icon: Target,
      title: "Precision Job Matching",
      description:
        "Advanced matching algorithms that consider technical skills, soft skills, location, and career aspirations.",
      benefits: [
        "Multi-dimensional matching",
        "Location-based preferences",
        "Salary expectation alignment",
        "Career progression mapping",
      ],
      category: "Matching",
    },
    {
      icon: Shield,
      title: "GDPR Compliant Platform",
      description:
        "Built with UK data protection regulations in mind, ensuring complete compliance and candidate privacy.",
      benefits: [
        "Full GDPR compliance",
        "Data encryption at rest",
        "Candidate consent management",
        "Right to be forgotten",
      ],
      category: "Compliance",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive insights into your hiring process with detailed analytics and performance metrics.",
      benefits: [
        "Real-time hiring metrics",
        "Candidate pipeline analysis",
        "ROI tracking and reporting",
        "Predictive hiring insights",
      ],
      category: "Analytics",
    },
    {
      icon: Users,
      title: "ATS Integration",
      description: "Seamlessly integrate with your existing Applicant Tracking System for a unified hiring workflow.",
      benefits: [
        "50+ ATS integrations",
        "Real-time data synchronisation",
        "Single sign-on support",
        "Custom API endpoints",
      ],
      category: "Integration",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Platform Features</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for Modern Recruitment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how SKILLIT-AI's cutting-edge features transform the way you find, assess, and hire top talent in
              the UK market.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white">Featured Innovation</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Skill Auctions</h2>
                <p className="text-xl text-blue-100 mb-6">
                  Watch candidates demonstrate their skills in real-time competitive environments. Our revolutionary
                  auction system transforms traditional interviews into dynamic skill showcases.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-200" />
                    <span>Real-time skill demonstrations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-blue-200" />
                    <span>Competitive bidding process</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-200" />
                    <span>Multiple candidates, one session</span>
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
                  <h3 className="text-xl font-semibold">Senior React Developer</h3>
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

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Hiring Process?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of UK companies already using SKILLIT-AI to find and hire the best talent faster than ever
              before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
