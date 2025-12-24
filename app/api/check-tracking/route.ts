import { NextResponse } from "next"
import { createAdminClient } from "@/lib/supabase/admin"

export async function GET() {
  try {
    const supabase = createAdminClient()

    // Get the most recent page views
    const { data: recentViews, error: viewsError } = await supabase
      .from("page_views")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10)

    if (viewsError) {
      console.error("[v0] Error fetching views:", viewsError)
      return NextResponse.json({ error: viewsError.message }, { status: 500 })
    }

    // Get total counts
    const { count: totalViews } = await supabase.from("page_views").select("*", { count: "exact", head: true })

    const { count: newVisitors } = await supabase
      .from("page_views")
      .select("*", { count: "exact", head: true })
      .eq("is_new_visitor", true)

    return NextResponse.json({
      success: true,
      totalViews,
      newVisitors,
      recentViews: recentViews || [],
      message: "Tracking data retrieved successfully",
    })
  } catch (error) {
    console.error("[v0] Error in check-tracking:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
