"use client"

import { useEffect } from "react"
import { initRum } from "@/lib/rum"

export default function RumInit() {
  useEffect(() => {
    initRum()
  }, [])
  return null
}
