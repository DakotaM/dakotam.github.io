export function koalaIdentify(traits: { id?: string; email?: string; name?: string; [k: string]: any }) {
  if (typeof window === "undefined") return
  const anyWin = window as any
  if (!anyWin._koala) return
  anyWin._koala("identify", traits)
}
