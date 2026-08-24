"use client"

import type React from "react"

import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Suspense, useCallback, useEffect, useState } from "react"

type Review = {
  initials: string
  name: string
  text: string
}

const REVIEWS: Review[] = [
  {
    initials: "MR",
    name: "Maya R.",
    text: "Cashed out $527 in my first week just playing games. Took 5 minutes to set everything up.",
  },
  {
    initials: "JT",
    name: "Jordan T.",
    text: "So happy I unlocked the pro tier. The money hits my PayPal account the same day, and I get better games with higher rewards too. In my first month, I cashed out $2,000. Remember to do a few small in-app purchases to get big bonuses.",
  },
  {
    initials: "SL",
    name: "Sophia L.",
    text: "Way more legit than the other game apps I tried. They paid me out directly to Cash App and I didn't have to jump through hoops to get it.",
  },
]

type Cashout = {
  src: string
  alt: string
}

const CASHOUTS: Cashout[] = [
  { src: "/assets/cashout-woman.jpeg", alt: "FreeCash player holding a phone showing an in-app reward" },
  { src: "/assets/cashout-balance.jpeg", alt: "FreeCash app showing a $272.96 available balance ready to cash out" },
  { src: "/assets/cashout-blockblast.jpeg", alt: "FreeCash app showing a Block Blast reward converted to real cash" },
]

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="5 12 19 12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function LanderContent() {
  const searchParams = useSearchParams()
  const [seconds, setSeconds] = useState(20 * 60)
  const [modalOpen, setModalOpen] = useState(false)

  const s1 = searchParams.get("s1")
  const s4 = searchParams.get("s4")

  const buildClickURL = useCallback(() => {
    // Final CTA points directly to the affiliate offer link.
    // Literal {cf_click_id} token preserved (no URL encoding) for ClickFlare to fill.
    let url = "https://trk.tskrewards.co/cf/click/1"
    if (s1) url += `&s1=${encodeURIComponent(s1)}`
    if (s4) url += `&s4=${encodeURIComponent(s4)}`
    return url
  }, [s1, s4])

  // Countdown timer
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  // Lock scroll + Escape to close when modal is open
  useEffect(() => {
    if (!modalOpen) return
    document.body.style.overflow = "hidden"

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false)
    }

    document.addEventListener("keydown", onKey)

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", onKey)
    }
  }, [modalOpen])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  return (
    <div className="flex min-h-screen justify-center bg-[#0a0a0a] font-sans text-[#f0f0f0] antialiased">
      <div className="relative flex w-full max-w-[430px] flex-col gap-[22px] px-4 pb-[130px] pt-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/freecash_logo.png"
              alt="FreeCash"
              width={32}
              height={32}
              className="h-8 w-8 rounded-[9px] object-cover shadow-[0_0_12px_rgba(44,199,110,0.35)]"
              priority
            />
            <span className="text-[18px] font-extrabold tracking-[-0.4px]">
              FreeCash
            </span>
          </div>

          <div className="flex items-center gap-[5px] rounded-full border border-[#222] bg-[rgba(20,20,20,0.7)] px-3 py-[6px]">
            <svg
              viewBox="0 0 24 24"
              className="h-[13px] w-[13px] fill-none stroke-[#888] stroke-2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>

            <span className="text-[11px] text-[#888]">
              Offer expires in&nbsp;
            </span>

            <span className="text-[11px] font-extrabold text-[#f0f0f0] tabular-nums">
              {mm}:{ss}
            </span>
          </div>
        </div>

        {/* Trust badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-[6px] rounded-full border border-[rgba(44,199,110,0.28)] bg-[rgba(44,199,110,0.09)] px-4 py-2">
            <svg
              viewBox="0 0 24 24"
              className="h-[13px] w-[13px] fill-none stroke-[#2cc76e] [stroke-width:2.5]"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>

            <span className="text-[11px] font-semibold text-[#2cc76e]">
              Trusted by 70M+ Users Worldwide 🌍
            </span>
          </div>
        </div>

        {/* Hero */}
        <div className="flex flex-col gap-[11px] text-center">
          <h1 className="text-[26px] font-black leading-[1.14] tracking-[-0.5px]">
            Earn Real Cash{" "}
            <span className="text-[#2cc76e]">Playing Games</span>
          </h1>

          <p className="px-2 text-[13px] leading-[1.65] text-[#888]">
            Download FreeCash, sign up, and complete game offers to earn real
            money. Start with 2-3 quick games to unlock higher-paying offers.
          </p>
        </div>

        {/* Pills */}
        <div className="flex flex-nowrap justify-center gap-[7px]">
          {[
            { label: "PayPal", emoji: "💙" },
            { label: "Venmo", emoji: "💸" },
            { label: "Bank transfer", emoji: "🏦" },
            { label: "Gift cards", emoji: "🎁" },
          ].map((pill) => (
            <div
              key={pill.label}
              className="inline-flex items-center gap-[6px] rounded-full border border-[#222] bg-[rgba(20,20,20,0.5)] px-3 py-[7px]"
            >
              <span className="text-[13px] leading-none" aria-hidden="true">
                {pill.emoji}
              </span>

              <span className="whitespace-nowrap text-[11px] font-semibold text-[#888]">
                {pill.label}
              </span>
            </div>
          ))}
        </div>

        {/* Trustpilot */}
        <div className="-mt-1 -mb-2 flex items-center justify-center gap-[6px]">
          <div className="flex items-center gap-[3px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="flex h-[16px] w-[16px] items-center justify-center rounded-[2px] bg-[#00b67a]"
              >
                <svg viewBox="0 0 24 24" className="h-[11px] w-[11px] fill-white">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
            ))}
          </div>

          <span className="text-[12px] font-semibold">
            <span className="text-[#00b67a]">Trustpilot</span>
            <span className="text-[#e5e5e5]"> · 4.6</span>
          </span>
        </div>

        {/* Gameplay video */}
        <div className="w-full overflow-hidden rounded-[16px] border border-[rgba(44,199,110,0.38)] bg-[#141414]">
          <video
            src="/assets/fruit-ninja-gameplay.mp4"
            className="aspect-video w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Pro tip */}
        <div className="relative overflow-hidden rounded-[16px] border border-[rgba(44,199,110,0.22)] bg-[#141414] p-5">
          <div className="flex flex-col gap-[9px]">
            <span className="flex w-fit items-center gap-1 rounded-[6px] bg-[#1a1a1a] px-[10px] py-1 text-[11px] font-extrabold text-[#f5c518]">
              <StarIcon className="h-[11px] w-[11px] fill-[#f5c518]" />
              PRO TIP
            </span>

            <div className="text-[17px] font-extrabold leading-[1.25]">
              Complete{" "}
              <span className="text-[#f5c518]">2-3 Starter Games</span> First
            </div>

            <p className="text-[12px] leading-[1.6] text-[#888]">
              New users who finish a few quick starter games unlock access to
              higher-paying offers and earn significantly more over time.
            </p>
          </div>

          <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2cc76e] via-[#f5c518] to-[#ff4500]" />
        </div>

        {/* How it works */}
        <div className="flex flex-col gap-[10px]">
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#888]">
            How It Works
          </span>

          <div className="flex gap-2">
            {[
              {
                step: "1",
                title: "Download App",
                desc: "Get FreeCash free from the App Store in seconds.",
                path: (
                  <>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </>
                ),
              },
              {
                step: "2",
                title: "Complete Games",
                desc: "Finish 2-3 quick starter games to unlock higher payouts.",
                path: <path d="M20 6 9 17l-5-5" />,
              },
              {
                step: "3",
                title: "Cash Out",
                desc: "Withdraw via PayPal, bank transfer, crypto, or gift cards.",
                path: (
                  <>
                    <path d="M12 1v22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </>
                ),
              },
            ].map((card) => (
              <div
                key={card.step}
                className="flex flex-1 flex-col items-center gap-[7px] rounded-[12px] border border-[#222] bg-[rgba(20,20,20,0.5)] px-[10px] py-4 text-center"
              >
                <div className="text-[17px] font-extrabold text-[#2cc76e]">
                  {card.step}
                </div>

                <svg
                  viewBox="0 0 24 24"
                  className="h-[22px] w-[22px] fill-none stroke-[#2cc76e] stroke-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {card.path}
                </svg>

                <div className="text-[12px] font-bold text-[#f0f0f0]">
                  {card.title}
                </div>

                <div className="text-[11px] leading-[1.45] text-[#888]">
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social proof group */}
        <div className="flex flex-col gap-4">
        {/* Player reviews */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#888]">
              What Players Are Saying
            </span>
            <span className="text-[11px] text-[#555]">Results vary</span>
          </div>
          <div className="flex flex-col gap-2">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="flex flex-col gap-2 rounded-[16px] border border-[#222] bg-[rgba(20,20,20,0.5)] px-[14px] py-3"
              >
                <div className="flex items-center gap-[10px]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(44,199,110,0.12)] text-[12px] font-extrabold tracking-[0.02em] text-[#2cc76e]">
                    {review.initials}
                  </div>
                  <span className="text-[14px] font-bold text-[#f0f0f0]">{review.name}</span>
                </div>
                <p className="text-[12px] leading-[1.55] text-[#888]">{review.text}</p>
                <div className="flex gap-[2px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-[13px] w-[13px] fill-[#f5c518]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center gap-[6px] py-1">
          <div className="flex gap-[3px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className="h-5 w-5 fill-[#f5c518]"
              />
            ))}
          </div>

          <div className="text-[13px] text-[#888]">
            <strong className="font-bold text-[#f0f0f0]">4.7/5</strong> from
            270k+ reviews on Trustpilot
          </div>
        </div>

        {/* Recent cashouts */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#888]">Recent Cashouts</span>
            <span className="text-[11px] text-[#555]">Results vary</span>
          </div>
          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CASHOUTS.map((cashout) => (
              <div
                key={cashout.src}
                className="relative aspect-[9/16] w-[46%] shrink-0 snap-start overflow-hidden rounded-[16px] border border-[#222] bg-[rgba(20,20,20,0.5)]"
              >
                <Image
                  src={cashout.src || "/placeholder.svg"}
                  alt={cashout.alt}
                  fill
                  sizes="(max-width: 430px) 46vw, 344px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-1/2 z-40 w-full max-w-[430px] -translate-x-1/2 bg-gradient-to-t from-[#0a0a0a] from-60% to-transparent px-4 pb-[18px] pt-[10px]">
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="flex w-full items-center justify-center gap-2 rounded-[18px] border-none bg-[#2cc76e] px-6 py-[18px] text-[17px] font-extrabold tracking-[-0.2px] text-black transition-transform active:scale-[0.96] animate-[ctaPulse_2.5s_ease-in-out_infinite]"
        >
          Download &amp; Sign Up
          <ArrowIcon className="h-5 w-5 text-black" />
        </button>
      </div>

      {/* Modal */}
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          if (e.target === e.currentTarget) setModalOpen(false)
        }}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/[0.88] p-6 transition-opacity duration-200 ${
          modalOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!modalOpen}
      >
        <div
          role="dialog"
          aria-modal="true"
          className={`relative flex w-full max-w-[360px] flex-col items-center gap-4 rounded-[22px] border border-[#222] bg-[#141414] px-6 py-7 text-center shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-transform duration-200 ${
            modalOpen ? "scale-100" : "scale-90"
          }`}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setModalOpen(false)}
            className="absolute right-[14px] top-[14px] text-[#888] transition-colors hover:text-[#f0f0f0]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px] fill-none stroke-current [stroke-width:2.5]"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#2cc76e]">
            Almost There
          </div>

          <h2 className="text-[21px] font-extrabold leading-[1.25] tracking-[-0.3px]">
            Start with{" "}
            <span className="text-[#2cc76e]">
              2-3 Quick Games
            </span>
          </h2>

          <p className="text-[13px] leading-[1.65] text-[#888]">
            After signing up, complete a few starter games to unlock
            higher-paying offers and maximize your earnings on FreeCash.
          </p>

          <a
            href={buildClickURL()}
            className="flex w-full items-center justify-center gap-2 rounded-[14px] border-none bg-[#2cc76e] px-4 py-4 text-[15px] font-extrabold text-black shadow-[0_0_30px_rgba(44,199,110,0.3)] transition-transform active:scale-[0.97]"
          >
            Download &amp; Sign Up
            <ArrowIcon className="h-[18px] w-[18px] text-black" />
          </a>
        </div>
      </div>
    </div>
  )
}

export function Lander() {
  return (
    <Suspense>
      <LanderContent />
    </Suspense>
  )
}
