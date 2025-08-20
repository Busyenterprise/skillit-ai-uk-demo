"use client"

import { TrendingUp, Users, Clock, Award } from "lucide-react"

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "UK Companies",
      description: "Trust SKILLIT-AI for their recruitment needs",
      color: "text-blue-600",
    },
    {
      icon: TrendingUp,
      value: "50,000+",
      label: "Successful Hires",
      description: "Placed through our AI-powered platform",
      color: "text-green-600",
    },
    {
      icon: Clock,
      value: "60%",
      label: "Faster Hiring",
      description: "Average reduction in time-to-hire",
      color: "text-purple-600",
    },
    {
      icon: Award,
      value: "95%",
      label: "Match Accuracy",
      description: "AI-powered candidate compatibility score",
      color: "text-orange-600",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Leading UK Companies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of forward-thinking organisations already transforming their hiring process with SKILLIT-AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6 ${stat.color}`}
                >
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 mb-8">Trusted by leading UK companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for company logos */}
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm font-medium">
              TechCorp
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm font-medium">
              InnovateLtd
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm font-medium">
              FutureWorks
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm font-medium">
              DigitalFirst
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm font-medium">
              ScaleUp
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
