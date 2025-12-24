// Generate a unique visitor ID that persists across sessions
export function getVisitorId(): string {
  if (typeof window === "undefined") return ""

  const VISITOR_ID_KEY = "visitor_id"

  let visitorId = localStorage.getItem(VISITOR_ID_KEY)

  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`
    localStorage.setItem(VISITOR_ID_KEY, visitorId)
  }

  return visitorId
}

export function getSessionId(): string {
  if (typeof window === "undefined") return ""

  const SESSION_ID_KEY = "session_id"
  const SESSION_TIMEOUT = 30 * 60 * 1000 // 30 minutes

  const stored = sessionStorage.getItem(SESSION_ID_KEY)
  const lastActivity = sessionStorage.getItem("last_activity")

  const now = Date.now()

  // Check if session expired
  if (stored && lastActivity) {
    const timeSinceLastActivity = now - Number.parseInt(lastActivity)
    if (timeSinceLastActivity < SESSION_TIMEOUT) {
      sessionStorage.setItem("last_activity", now.toString())
      return stored
    }
  }

  // Create new session
  const sessionId = `session_${now}_${Math.random().toString(36).substring(2, 15)}`
  sessionStorage.setItem(SESSION_ID_KEY, sessionId)
  sessionStorage.setItem("last_activity", now.toString())

  return sessionId
}
