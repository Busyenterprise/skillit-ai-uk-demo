import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Upload, Brain, Users, Zap, CheckCircle, ArrowRight, Clock, Target, Award, TrendingUp } from "lucide-react"

export default function HowItWorksPage() {
  const steps = [
    {
      step: 1,
      icon: Upload,
      title: "Post Your Job",
      description:
        "Create detailed job postings with specific skill requirements, salary ranges, and company culture preferences.",
      details: [
        "AI-powered job description optimisation",
        "Automatic skill extraction and tagging",
        "Bias detection and removal",
        "Market salary benchmarking",
      ],
      time: "5 minutes",
    },
    {
      step: 2,
      icon: Brain,
      title: "AI Candidate Matching",
      description:
        "Our advanced AI algorithms analyse thousands of candidate profiles to find the perfect matches for your role.",
      details: [
        "Multi-dimensional skill matching",
        "Cultural fit assessment",
        "Location and availability filtering",
        "Salary expectation alignment",
      ],
      time: "Instant",
    },
    {
      step: 3,
      icon: Users,
      title: "Candidate Shortlisting",
      description:
        "Review AI-matched candidates with detailed compatibility scores and comprehensive profile insights.",
      details: [
        "Detailed match explanations",
        "Candidate availability status",
        "Portfolio and work samples",
        "Reference and background checks",
      ],
      time: "30 minutes",
    },
    {
      step: 4,
      icon: Zap,
      title: "Live Skill Auction",
      description:
        "Invite top candidates to participate in live skill auctions where they demonstrate their abilities in real-time.",
      details: [
        "Real-time skill demonstrations",
        "Interactive coding challenges",
        "Live Q&A sessions",
        "Competitive bidding environment",
      ],
      time: "1-2 hours",
    },
    {
      step: 5,
      icon: CheckCircle,
      title: "Make Your Decision",
      description:
        "Review auction results, candidate performance metrics, and make informed hiring decisions with confidence.",
      details: [
        "Comprehensive performance analytics",
        "Peer comparison metrics",
        "Interview feedback compilation",
        "Salary negotiation support",
      ],
      time: "1 day",
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: "60% Faster Hiring",
      description: "Reduce your time-to-hire from weeks to days with our streamlined process.",
    },
    {
      icon: Target,
      title: "95% Match Accuracy",
      description: "Our AI ensures you only see candidates who truly fit your requirements.",
    },
    {
      icon: Award,
      title: "Higher Quality Hires",
      description: "See candidates in action before making decisions, ensuring better outcomes.",
    },
    {
      icon: TrendingUp,
      title: "Improved Retention",
      description: "Better matches lead to happier employees and reduced turnover rates.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">How It Works</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Job Posting to Perfect Hire in 5 Simple Steps
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how SKILLIT-AI transforms traditional recruitment into an efficient, AI-powered process that
              delivers exceptional results.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-12 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-24 bg-blue-200 hidden md:block"></div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Step Number and Icon */}
                  <div className="md:col-span-2 flex flex-col items-center md:items-start">
                    <div className="relative">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-600">{step.step}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {step.time}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-10">
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                        <CardDescription className="text-lg text-gray-600">{step.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SKILLIT-AI?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our innovative approach delivers measurable results that transform your hiring process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Demo Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See It in Action</h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Experience our live skill auction platform with an interactive demo featuring real candidate scenarios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Watch Live Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Schedule Personal Demo
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of UK companies already transforming their hiring process with SKILLIT-AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
