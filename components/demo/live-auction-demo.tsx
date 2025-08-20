"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Clock, Users, Zap, TrendingUp } from "lucide-react"

export default function LiveAuctionDemo() {
  const [timeLeft, setTimeLeft] = useState(180) // 3 minutes
  const [currentBid, setCurrentBid] = useState(85000)
  const [bidders, setBidders] = useState(7)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 180))

      // Simulate bid updates
      if (Math.random() > 0.7) {
        setCurrentBid((prev) => prev + Math.floor(Math.random() * 2000) + 500)
        setBidders((prev) => Math.min(prev + (Math.random() > 0.5 ? 1 : 0), 12))
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const candidates = [
    { name: "Sarah Chen", role: "Senior React Developer", bid: currentBid, avatar: "SC" },
    { name: "Marcus Johnson", role: "Full Stack Engineer", bid: currentBid - 3000, avatar: "MJ" },
    { name: "Elena Rodriguez", role: "Frontend Specialist", bid: currentBid - 5500, avatar: "ER" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            Live Skill Auction: Senior React Developer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Auction Status */}
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  <Clock className="h-6 w-6 inline mr-2" />
                  {formatTime(timeLeft)}
                </div>
                <p className="text-sm text-gray-600">Time Remaining</p>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">£{currentBid.toLocaleString()}</div>
                <p className="text-sm text-gray-600">Current Highest Bid</p>
              </div>

              <div className="text-center">
                <div className="text-xl font-bold text-blue-600 mb-2">
                  <Users className="h-5 w-5 inline mr-2" />
                  {bidders}
                </div>
                <p className="text-sm text-gray-600">Active Bidders</p>
              </div>
            </div>

            {/* Candidate Profile */}
            <div className="space-y-4">
              <div className="text-center">
                <Avatar className="h-16 w-16 mx-auto mb-3">
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold">Sarah Chen</h3>
                <p className="text-sm text-gray-600">Senior React Developer</p>
              </div>

              <div className="space-y-2">
                <Badge variant="secondary">5+ Years Experience</Badge>
                <Badge variant="secondary">React Expert</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Next.js</Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Skills Match</span>
                  <span>95%</span>
                </div>
                <Progress value={95} />
              </div>
            </div>

            {/* Live Bidding */}
            <div className="space-y-4">
              <h4 className="font-semibold">Live Bidding Activity</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {candidates.map((candidate, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">{candidate.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{candidate.name}</p>
                        <p className="text-xs text-gray-600">{candidate.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">£{candidate.bid.toLocaleString()}</p>
                      {index === 0 && (
                        <Badge variant="default" className="text-xs">
                          Leading
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full">
                <TrendingUp className="h-4 w-4 mr-2" />
                Place Bid
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-gray-600">
        <p>This is a simulated demo. Real auctions feature live video interviews and skill demonstrations.</p>
      </div>
    </div>
  )
}
