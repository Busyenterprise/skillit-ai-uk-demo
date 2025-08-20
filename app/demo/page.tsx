"use client"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LiveAuctionDemo from "@/components/demo/live-auction-demo"
import AIInterviewDemo from "@/components/demo/ai-interview-demo"
import CandidateMatchingDemo from "@/components/demo/candidate-matching-demo"
import ATSDemo from "@/components/demo/ats-demo"
import { Play, Zap, Brain, Users, Database, ArrowRight } from "lucide-react"

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState("matching")

  const demos = [
    {
      id: "matching",
      title: "AI Candidate Matching",
      description: "See how our AI finds perfect candidates",
      icon: Brain,
      component: CandidateMatchingDemo,
    },
    {
      id: "auction",
      title: "Live Skill Auctions",
      description: "Experience real-time talent bidding",
      icon: Zap,
      component: LiveAuctionDemo,
    },
    {
      id: "interview",
      title: "AI Interviews",
      description: "Watch AI conduct smart interviews",
      icon: Users,
      component: AIInterviewDemo,
    },
    {
      id: "ats",
      title: "ATS Integration",
      description: "Seamless system integration",
      icon: Database,
      component: ATSDemo,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Interactive Demo</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience SKILLIT-AI in Action</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our platform's key features through interactive demonstrations. See how AI transforms recruitment.
            </p>
          </div>

          {/* Demo Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {demos.map((demo) => (
              <Card
                key={demo.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeDemo === demo.id ? "ring-2 ring-blue-500 shadow-lg" : ""
                }`}
                onClick={() => setActiveDemo(demo.id)}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <demo.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{demo.title}</CardTitle>
                  <CardDescription>{demo.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Demo Content */}
          <div className="mb-16">
            <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                {demos.map((demo) => (
                  <TabsTrigger key={demo.id} value={demo.id} className="flex items-center gap-2">
                    <demo.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{demo.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {demos.map((demo) => (
                <TabsContent key={demo.id} value={demo.id}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <demo.icon className="h-6 w-6 text-blue-600" />
                          <div>
                            <CardTitle className="text-2xl">{demo.title}</CardTitle>
                            <CardDescription className="text-lg">{demo.description}</CardDescription>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          <Play className="h-3 w-3 mr-1" />
                          Live Demo
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <demo.component />
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Feature Highlights */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SKILLIT-AI?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our platform delivers measurable results that transform your hiring process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Faster Hiring</div>
                <p className="text-gray-600">Reduce time-to-hire from weeks to days</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Match Accuracy</div>
                <p className="text-gray-600">AI ensures perfect candidate-role fit</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Cost Reduction</div>
                <p className="text-gray-600">Lower cost-per-hire with better outcomes</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the power of AI-driven recruitment. Start your free trial today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Schedule Personal Demo
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
