"use client"

import { motion } from "framer-motion"
import { Upload, Brain, Gavel, UserCheck } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload Job Requirements",
    description:
      "Simply upload your job description and requirements. Our AI analyses and optimises it for better matches.",
  },
  {
    icon: Brain,
    title: "AI Candidate Matching",
    description: "Our advanced algorithms scan thousands of UK profiles to find the perfect candidates for your role.",
  },
  {
    icon: Gavel,
    title: "Live Talent Auction",
    description: "Top candidates participate in live auctions, allowing you to see their true market value.",
  },
  {
    icon: UserCheck,
    title: "Smart Hiring Decision",
    description: "Make informed decisions with AI insights, salary benchmarks, and comprehensive candidate profiles.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How SKILLIT-AI Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our revolutionary 4-step process transforms how you find and hire the best talent in the UK.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="relative z-10 bg-white">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
