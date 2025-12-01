import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          850: "#0f172aE6"
        }
      },
      boxShadow: {
        "glow-emerald": "0 0 20px rgba(16,185,129,0.4)",
        "glow-white": "0 0 20px rgba(255,255,255,0.5)"
      },
      borderRadius: {
        "2xl": "1rem"
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace"
        ]
      }
    }
  },
  plugins: []
}

export default config
