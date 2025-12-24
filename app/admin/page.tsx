"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Stats {
  totalViews: number
  uniqueVisitors: number
  topPages: Array<{ page: string; count: number }>
  topReferrers: Array<{ referrer: string; count: number }>
  topUtm: Array<{ source: string; count: number }>
  topCountries: Array<{ country: string; count: number }>
  recentViews: Array<{
    id: string
    created_at: string
    page_path: string
    referrer: string | null
    utm_source: string | null
    utm_campaign: string | null
    visitor_id: string
    country: string | null
    country_code: string | null
    as_name: string | null
    ip_address: string | null
  }>
}

export default function AdminPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [days, setDays] = useState(30)

  const fetchStats = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/admin/stats?days=${days}`)
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error("[v0] Failed to fetch stats:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [days])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-muted-foreground">Loading analytics...</p>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-muted-foreground">Failed to load analytics</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Analytics Dashboard</h1>
            <p className="text-muted-foreground mt-2">Track page views and visitor activity</p>
          </div>
          <div className="flex gap-2">
            <Button variant={days === 7 ? "default" : "outline"} onClick={() => setDays(7)}>
              7 Days
            </Button>
            <Button variant={days === 30 ? "default" : "outline"} onClick={() => setDays(30)}>
              30 Days
            </Button>
            <Button variant={days === 90 ? "default" : "outline"} onClick={() => setDays(90)}>
              90 Days
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Total Page Views</CardTitle>
              <CardDescription>Last {days} days</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{stats.totalViews.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Unique Visitors</CardTitle>
              <CardDescription>Last {days} days</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{stats.uniqueVisitors.toLocaleString()}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>Most viewed pages</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Page</TableHead>
                    <TableHead className="text-right">Views</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stats.topPages.map((page, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-mono text-sm">{page.page}</TableCell>
                      <TableCell className="text-right font-medium">{page.count}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Referrers</CardTitle>
              <CardDescription>Traffic sources</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Referrer</TableHead>
                    <TableHead className="text-right">Views</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stats.topReferrers.length > 0 ? (
                    stats.topReferrers.map((ref, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-mono text-sm max-w-[300px] truncate">{ref.referrer}</TableCell>
                        <TableCell className="text-right font-medium">{ref.count}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={2} className="text-center text-muted-foreground">
                        No referrer data
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Countries</CardTitle>
              <CardDescription>Visitors by location</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Country</TableHead>
                    <TableHead className="text-right">Views</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stats.topCountries && stats.topCountries.length > 0 ? (
                    stats.topCountries.map((country, i) => (
                      <TableRow key={i}>
                        <TableCell className="text-sm">{country.country}</TableCell>
                        <TableCell className="text-right font-medium">{country.count}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={2} className="text-center text-muted-foreground">
                        No location data
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {stats.topUtm.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>UTM Campaigns</CardTitle>
              <CardDescription>Traffic by UTM parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Source / Campaign</TableHead>
                    <TableHead className="text-right">Views</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stats.topUtm.map((utm, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-mono text-sm">{utm.source}</TableCell>
                      <TableCell className="text-right font-medium">{utm.count}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest 20 page views</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Page</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Referrer</TableHead>
                  <TableHead>UTM</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stats.recentViews.map((view) => (
                  <TableRow key={view.id}>
                    <TableCell className="text-sm">{new Date(view.created_at).toLocaleString()}</TableCell>
                    <TableCell className="font-mono text-sm">{view.page_path}</TableCell>
                    <TableCell className="text-sm">
                      {view.country
                        ? `${view.country_code || ""} ${view.country}`.trim()
                        : view.as_name || view.ip_address || "—"}
                    </TableCell>
                    <TableCell className="text-sm max-w-[200px] truncate">{view.referrer || "Direct"}</TableCell>
                    <TableCell className="text-sm">
                      {view.utm_source
                        ? `${view.utm_source}${view.utm_campaign ? ` / ${view.utm_campaign}` : ""}`
                        : "—"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
