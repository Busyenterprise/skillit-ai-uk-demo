"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Database, Zap, CheckCircle, AlertCircle, Clock } from "lucide-react"

export default function ATSDemo() {
  const [syncStatus, setSyncStatus] = useState("connected")

  const integrations = [
    {
      name: "Workday",
      status: "connected",
      lastSync: "2 minutes ago",
      candidates: 1247,
      icon: "W",
    },
    {
      name: "BambooHR",
      status: "connected",
      lastSync: "5 minutes ago",
      candidates: 892,
      icon: "B",
    },
    {
      name: "Greenhouse",
      status: "syncing",
      lastSync: "Syncing now...",
      candidates: 2156,
      icon: "G",
    },
    {
      name: "Lever",
      status: "error",
      lastSync: "1 hour ago",
      candidates: 0,
      icon: "L",
    },
  ]

  const syncData = [
    {
      type: "Candidate Profiles",
      total: 4295,
      synced: 4295,
      status: "complete",
    },
    {
      type: "Job Postings",
      total: 47,
      synced: 47,
      status: "complete",
    },
    {
      type: "Interview Feedback",
      total: 1834,
      synced: 1821,
      status: "syncing",
    },
    {
      type: "Hiring Pipeline",
      total: 156,
      synced: 156,
      status: "complete",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
      case "complete":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "syncing":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected":
      case "complete":
        return "bg-green-100 text-green-800"
      case "syncing":
        return "bg-blue-100 text-blue-800"
      case "error":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-500" />
            ATS Integration Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="integrations" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="integrations">Active Integrations</TabsTrigger>
              <TabsTrigger value="sync">Data Sync Status</TabsTrigger>
              <TabsTrigger value="settings">Configuration</TabsTrigger>
            </TabsList>

            <TabsContent value="integrations" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrations.map((integration, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-semibold">
                          {integration.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold">{integration.name}</h4>
                          <p className="text-sm text-gray-600">{integration.candidates.toLocaleString()} candidates</p>
                        </div>
                      </div>
                      {getStatusIcon(integration.status)}
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge className={getStatusColor(integration.status)}>{integration.status}</Badge>
                      <span className="text-xs text-gray-500">{integration.lastSync}</span>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-900">Real-time Sync Active</h4>
                </div>
                <p className="text-sm text-blue-700">
                  All candidate data is automatically synchronized in real-time. New applications and updates appear
                  instantly in SKILLIT-AI.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="sync" className="mt-6">
              <div className="space-y-4">
                {syncData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(item.status)}
                      <div>
                        <h4 className="font-medium">{item.type}</h4>
                        <p className="text-sm text-gray-600">
                          {item.synced} of {item.total} items synced
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                      <div className="text-xs text-gray-500 mt-1">
                        {Math.round((item.synced / item.total) * 100)}% complete
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <Button>
                  <Zap className="h-4 w-4 mr-2" />
                  Force Sync All
                </Button>
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Sync Settings
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Sync Frequency</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="frequency" defaultChecked />
                        <span className="text-sm">Real-time (Recommended)</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="frequency" />
                        <span className="text-sm">Every 15 minutes</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="frequency" />
                        <span className="text-sm">Hourly</span>
                      </label>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Data Mapping</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Candidate Name</span>
                        <Badge variant="secondary">Mapped</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Email Address</span>
                        <Badge variant="secondary">Mapped</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Skills</span>
                        <Badge variant="secondary">Mapped</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Experience Level</span>
                        <Badge variant="secondary">Mapped</Badge>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="p-4">
                  <h4 className="font-semibold mb-3">Webhook Configuration</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Webhook URL</label>
                      <input
                        type="url"
                        className="w-full p-2 border rounded text-sm"
                        placeholder="https://your-ats.com/webhooks/skillit-ai"
                        defaultValue="https://workday.company.com/api/webhooks/skillit"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      <label className="text-sm">Send candidate updates to ATS</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      <label className="text-sm">Sync interview feedback</label>
                    </div>
                  </div>
                </Card>

                <div className="flex gap-3">
                  <Button>Save Configuration</Button>
                  <Button variant="outline">Test Connection</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-gray-600">
        <p>
          This demo shows ATS integration capabilities. SKILLIT-AI supports 50+ ATS platforms with real-time
          synchronization.
        </p>
      </div>
    </div>
  )
}
