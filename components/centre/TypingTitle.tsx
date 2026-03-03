"use client"

import { useEffect, useState } from "react"

export default function TypingTitle({
  text,
  speed = 50,
}: {
  text: string
  speed?: number
}) {
  const [displayed, setDisplayed] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index])
        setIndex(index + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [index, text, speed])

  return (
    <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight">
      {displayed}
      <span className="animate-pulse text-[#C9A14A]">|</span>
    </h1>
  )
}