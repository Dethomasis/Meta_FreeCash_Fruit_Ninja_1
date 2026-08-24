import type { Metadata } from "next"
import { AgeGate } from "@/components/age-gate"

export const metadata: Metadata = {
  title: "Are You 21+?",
  description: "Earn real cash by playing games and completing offers.",
}

export default function Page() {
  return <AgeGate />
}
