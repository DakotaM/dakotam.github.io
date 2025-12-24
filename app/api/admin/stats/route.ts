import { type NextRequest, NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    const supabase = createAdminClient()

    const searchParams = request.nextUrl.searchParams
    const days = Number.parseInt(searchParams.get("days") || "30")
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    const { count: totalViews } = await supabase
      .from("page_views")
      .select("*", { count: "exact", head: true })
      .gte("created_at", startDate.toISOString())

    const { data: uniqueVisitorsData } = await supabase
      .from("page_views")
      .select("visitor_id")
      .gte("created_at", startDate.toISOString())

    const uniqueVisitors = new Set(uniqueVisitorsData?.map((v) => v.visitor_id) || []).size

    const { data: allPages } = await supabase
      .from("page_views")
      .select("page_path")
      .gte("created_at", startDate.toISOString())

    const pageCounts = (allPages || []).reduce(
      (acc, { page_path }) => {
        acc[page_path] = (acc[page_path] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    const topPages = Object.entries(pageCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([page, count]) => ({ page, count }))

    const { data: allReferrers } = await supabase
      .from("page_views")
      .select("referrer")
      .gte("created_at", startDate.toISOString())
      .not("referrer", "is", null)

    const referrerCounts = (allReferrers || []).reduce(
      (acc, { referrer }) => {
        if (referrer) {
          acc[referrer] = (acc[referrer] || 0) + 1
        }
        return acc
      },
      {} as Record<string, number>,
    )

    const topReferrers = Object.entries(referrerCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([referrer, count]) => ({ referrer, count }))

    const { data: utmData } = await supabase
      .from("page_views")
      .select("utm_source, utm_campaign")
      .gte("created_at", startDate.toISOString())
      .not("utm_source", "is", null)

    const utmCounts = (utmData || []).reduce(
      (acc, { utm_source, utm_campaign }) => {
        const key = `${utm_source}${utm_campaign ? ` / ${utm_campaign}` : ""}`
        acc[key] = (acc[key] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    const topUtm = Object.entries(utmCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([source, count]) => ({ source, count }))

    const { data: allCountries } = await supabase
      .from("page_views")
      .select("country")
      .gte("created_at", startDate.toISOString())
      .not("country", "is", null)

    const countryCounts = (allCountries || []).reduce(
      (acc, { country }) => {
        if (country) {
          acc[country] = (acc[country] || 0) + 1
        }
        return acc
      },
      {} as Record<string, number>,
    )

    const topCountries = Object.entries(countryCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([country, count]) => ({ country, count }))

    const { data: recentViews } = await supabase
      .from("page_views")
      .select(
        "id, created_at, page_path, referrer, utm_source, utm_campaign, visitor_id, country, country_code, as_name, ip_address",
      )
      .order("created_at", { ascending: false })
      .limit(20)

    return NextResponse.json({
      totalViews: totalViews || 0,
      uniqueVisitors,
      topPages,
      topReferrers,
      topUtm,
      topCountries,
      recentViews: recentViews || [],
    })
  } catch (error) {
    console.error("[v0] Admin stats API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
