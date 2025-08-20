"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MessageSquare, Mic, Video, Brain, CheckCircle } from "lucide-react"

export default function AIInterviewDemo() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isRecording, setIsRecording] = useState(false)

  const questions = [
    {
      question: "Can you walk me through your experience with React and how you've used it in previous projects?",
      type: "Technical Experience",
      timeLimit: 120,
    },
    {
      question: "How would you optimize a React application that's experiencing performance issues?",
      type: "Problem Solving",
      timeLimit: 180,
    },
    {
      question: "Describe a challenging project you worked on and how you overcame the obstacles.",
      type: "Behavioral",
      timeLimit: 150,
    },
  ]

  const analysisResults = {
    technicalScore: 87,
    communicationScore: 92,
    problemSolvingScore: 85,
    overallScore: 88,
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-500" />
            AI-Powered Interview Session
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Interview Interface */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4 aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <Video className="h-12 w-12 mx-auto mb-2" />
                  <p>Candidate Video Feed</p>
                  <p className="text-sm text-gray-400">Sarah Chen - Senior React Developer</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Button
                  variant={isRecording ? "destructive" : "default"}
                  onClick={() => setIsRecording(!isRecording)}
                  className="flex items-center gap-2"
                >
                  <Mic className="h-4 w-4" />
                  {isRecording ? "Stop Recording" : "Start Recording"}
                </Button>
                <Button variant="outline">
                  <Video className="h-4 w-4 mr-2" />
                  Toggle Video
                </Button>
              </div>
            </div>

            {/* Question Panel */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">
                  Question {currentQuestion + 1} of {questions.length}
                </h3>
                <Badge variant="secondary">{questions[currentQuestion].type}</Badge>
              </div>

              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium mb-2">AI Interviewer:</p>
                    <p className="text-gray-700">{questions[currentQuestion].question}</p>
                  </div>
                </div>
              </Card>

              <div className="flex justify-between text-sm text-gray-600">
                <span>Time Limit: {questions[currentQuestion].timeLimit}s</span>
                <span>Recording: {isRecording ? "Active" : "Paused"}</span>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
                  disabled={currentQuestion === questions.length - 1}
                >
                  Next Question
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Analysis Results */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            Real-time AI Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Technical Skills</span>
                <span className="text-sm">{analysisResults.technicalScore}%</span>
              </div>
              <Progress value={analysisResults.technicalScore} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Communication</span>
                <span className="text-sm">{analysisResults.communicationScore}%</span>
              </div>
              <Progress value={analysisResults.communicationScore} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Problem Solving</span>
                <span className="text-sm">{analysisResults.problemSolvingScore}%</span>
              </div>
              <Progress value={analysisResults.problemSolvingScore} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Overall Score</span>
                <span className="text-sm font-bold">{analysisResults.overallScore}%</span>
              </div>
              <Progress value={analysisResults.overallScore} />
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold mb-2">AI Insights:</h4>
            <ul className="text-sm space-y-1">
              <li>• Strong technical knowledge demonstrated in React ecosystem</li>
              <li>• Excellent communication skills with clear explanations</li>
              <li>• Shows good problem-solving approach with structured thinking</li>
              <li>• Confident delivery with appropriate technical depth</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-gray-600">
        <p>
          This demo shows our AI interview analysis. Real interviews include sentiment analysis, speech patterns, and
          technical assessment.
        </p>
      </div>
    </div>
  )
}
