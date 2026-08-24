import type { Metadata } from "next"
import { Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Access Restricted",
  description: "This offer is only available to users aged 21 and over.",
}

export default function BlockedPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-black px-6 text-center">
      <div className="flex h-[104px] w-[104px] items-center justify-center rounded-[24px] bg-[#1c1c1c] sm:h-[132px] sm:w-[132px] sm:rounded-[28px]">
        <Lock className="h-11 w-11 text-white sm:h-14 sm:w-14" strokeWidth={2.5} aria-hidden="true" />
      </div>

      <h1 className="mt-8 text-balance text-[clamp(28px,8vw,48px)] font-extrabold uppercase tracking-tight text-white">
        Minimum Age: 21+
      </h1>

      <p className="mt-4 max-w-xs text-pretty text-base leading-relaxed text-neutral-400 sm:mt-5 sm:max-w-md sm:text-lg">
        This offer is only available to users aged 21 and over.
      </p>
    </main>
  )
}
