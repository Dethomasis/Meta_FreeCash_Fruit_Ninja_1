"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

const DEFAULT_QUERY = "?s1=Mainvd&s4=spark_puzzle_1"

function AgeGateContent() {
  const searchParams = useSearchParams()
  const qs = searchParams.toString()
  const query = qs ? `?${qs}` : DEFAULT_QUERY

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[#050a05] font-sans text-[#e8edf3] antialiased">
      <div className="flex w-full max-w-[420px] flex-col items-center px-6 py-8 text-center sm:py-12">
        {/* App icon */}
        <div className="mb-[22px] flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-[20px] shadow-[0_0_32px_rgba(44,199,110,0.18)]">
          <Image
            src="/assets/freecash_logo.png"
            alt="FreeCash"
            width={76}
            height={76}
            className="h-[76px] w-[76px] object-cover"
            priority
          />
        </div>

        {/* Badge */}
        <div className="mb-[26px] inline-flex items-center gap-[7px] rounded-full border-[1.5px] border-[rgba(44,199,110,0.35)] bg-[rgba(44,199,110,0.12)] px-[18px] py-[7px] text-[11px] font-bold uppercase tracking-[0.12em] text-[#2cc76e]">
          <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#2cc76e]" />
          Play &amp; Earn
        </div>

        {/* Heading */}
        <h1 className="mb-[10px] text-[clamp(32px,9vw,44px)] font-black leading-[1.1] tracking-[-0.02em] text-white">
          ARE YOU <span className="text-[#2cc76e]">21+</span>?
        </h1>
        <p className="mb-8 text-[14px] leading-[1.5] text-[#7a9880]">
          Earn real cash by playing games and completing offers.
        </p>

        {/* Info card */}
        <div className="mb-7 w-full rounded-[16px] border-[1.5px] border-[#1a3a1c] bg-[#0d1a0e] px-[18px] py-5 text-left">
          <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2cc76e]">
            <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#2cc76e]" />
            Important — Please Read
          </div>

          <div className="mb-[14px] flex items-start gap-3">
            <div className="mt-px flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[rgba(44,199,110,0.1)]">
              <svg
                viewBox="0 0 24 24"
                className="h-[17px] w-[17px] fill-none stroke-[#2cc76e] stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 15 15" />
              </svg>
            </div>
            <div className="text-[13.5px] leading-[1.55] text-[#b8cbbf]">
              You must be <strong className="font-bold text-white">at least 21 years old</strong> to earn money on
              FreeCash
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-px flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[rgba(44,199,110,0.1)]">
              <svg
                viewBox="0 0 24 24"
                className="h-[17px] w-[17px] fill-none stroke-[#2cc76e] stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" y1="8" x2="19" y2="14" />
                <line x1="22" y1="11" x2="16" y2="11" />
              </svg>
            </div>
            <div className="text-[13.5px] leading-[1.55] text-[#b8cbbf]">
              Already have an account? <strong className="font-bold text-white">Create a new account</strong> through
              this page — existing accounts are not eligible
            </div>
          </div>
        </div>

        {/* Actions */}
        <Link
          href={`/lander${query}`}
          className="mb-[10px] block w-full rounded-[14px] bg-[#2cc76e] px-6 py-4 text-center text-[16px] font-bold text-white transition-colors hover:bg-[#25b060]"
        >
            Yes, I&apos;m 21 or Older
        </Link>
        <Link
          href={`/blocked${query}`}
          className="block w-full rounded-[14px] border-[1.5px] border-[#1f3522] bg-transparent px-6 py-[15px] text-center text-[15px] font-medium text-[#7a9880] transition-colors hover:border-[#2a4a2e] hover:text-[#9ab09e]"
        >
            No, I&apos;m Under 21
        </Link>
      </div>
    </div>
  )
}

export function AgeGate() {
  return (
    <Suspense>
      <AgeGateContent />
    </Suspense>
  )
}
