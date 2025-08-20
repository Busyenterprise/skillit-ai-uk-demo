import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, X, ArrowRight, Star, Users, Building, Crown } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      icon: Users,
      price: "£299",
      period: "per month",
      description: "Perfect for small businesses and startups looking to streamline their hiring process.",
      features: [
        "Up to 10 job postings per month",
        "AI candidate matching",
        "Basic analytics dashboard",
        "Email support",
        "Standard ATS integration",
        "Up to 3 team members",
      ],
      limitations: ["No live skill auctions", "Limited to 50 candidates per month", "Basic reporting only"],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      icon: Building,
      price: "£799",
      period: "per month",
      description: "Ideal for growing companies that need advanced features and higher volume recruiting.",
      features: [
        "Unlimited job postings",
        "AI candidate matching with advanced filters",
        "Live skill auctions (up to 20 per month)",
        "Advanced analytics and reporting",
        "Priority support with dedicated account manager",
        "Premium ATS integrations",
        "Up to 15 team members",
        "Custom branding",
        "GDPR compliance tools",
      ],
      limitations: ["Limited to 500 candidates per month", "Standard auction duration (2 hours)"],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "pricing",
      description: "Comprehensive solution for large enterprises with complex hiring needs and high volume.",
      features: [
        "Everything in Professional",
        "Unlimited candidates and auctions",
        "Extended auction durations (up to 8 hours)",
        "White-label solution available",
        "Custom AI model training",
        "Advanced security and compliance",
        "Unlimited team members",
        "24/7 phone support",
        "Custom integrations and API access",
        "Dedicated customer success manager",
        "On-premise deployment option",
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  const addOns = [
    {
      name: "Extended Skill Auctions",
      description: "Increase auction duration to 4-8 hours for complex technical roles",
      price: "£99/month",
    },
    {
      name: "Advanced AI Training",
      description: "Custom AI model training on your specific industry and requirements",
      price: "£499/month",
    },
    {
      name: "White-Label Solution",
      description: "Fully branded platform with your company's look and feel",
      price: "£299/month",
    },
    {
      name: "Premium Support",
      description: "24/7 phone support with dedicated account manager",
      price: "£199/month",
    },
  ]

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
    },
    {
      question: "What's included in the free trial?",
      answer:
        "Our 14-day free trial includes full access to all Professional plan features, including live skill auctions, advanced analytics, and priority support.",
    },
    {
      question: "Do you offer custom pricing for large enterprises?",
      answer:
        "Yes, we offer custom pricing for enterprises with specific needs. Contact our sales team to discuss volume discounts and custom features.",
    },
    {
      question: "What ATS systems do you integrate with?",
      answer:
        "We integrate with 50+ ATS systems including Workday, BambooHR, Greenhouse, Lever, and many more. Custom integrations are available for Enterprise customers.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fees for Starter and Professional plans. Enterprise customers may have implementation fees depending on customization requirements.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer:
        "You can export all your data at any time. We retain your data for 90 days after cancellation, then permanently delete it in compliance with GDPR.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Pricing Plans</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose the Perfect Plan for Your Hiring Needs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Start with a 14-day free trial on any plan.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative h-full ${
                  plan.popular ? "border-blue-500 border-2 shadow-lg scale-105" : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <li key={limitationIndex} className="flex items-start gap-2">
                            <X className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Optional Add-ons</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Enhance your plan with additional features tailored to your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addOn, index) => (
                <Card key={index} className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{addOn.name}</h3>
                      <p className="text-gray-600 text-sm">{addOn.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-lg font-bold text-gray-900">{addOn.price}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Got questions? We've got answers. Contact us if you need more information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of UK companies already using SKILLIT-AI to find and hire the best talent faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
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
