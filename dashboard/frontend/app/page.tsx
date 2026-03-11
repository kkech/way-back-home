'use client'

/**
 * Landing Page
 * Beautiful animated intro for Way Back Home
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedTitle } from '@/components/ui/Title'
import { CelestialBackground } from '@/components/ui/CelestialBackground'

export default function HomePage() {
  const [eventCode, setEventCode] = useState('')
  const [isNavigating, setIsNavigating] = useState(false)

  const handleJoinEvent = (e: React.FormEvent) => {
    e.preventDefault()
    if (eventCode.trim()) {
      setIsNavigating(true)
      window.location.href = `/e/${eventCode.trim().toLowerCase()}`
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated celestial background with cursor-reactive planets */}
      <CelestialBackground />

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg mx-auto">
        {/* Title */}
        <div className="mb-12">
          <AnimatedTitle />
        </div>

        {/* Join event form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="glass-panel p-6"
        >
          <h2 className="font-display text-lg font-semibold text-space-cream mb-4 text-center">
            Join an Event
          </h2>

          <form onSubmit={handleJoinEvent} className="space-y-4">
            <div>
              <label htmlFor="eventCode" className="block text-sm text-space-lavender/60 mb-2">
                Event Code
              </label>
              <input
                id="eventCode"
                type="text"
                value={eventCode}
                onChange={(e) => setEventCode(e.target.value)}
                placeholder="e.g., sandbox"
                className="w-full px-4 py-3 rounded-xl bg-space-void-lighter/50 border border-space-lavender/20
                         text-space-cream placeholder:text-space-lavender/30
                         focus:outline-none focus:ring-2 focus:ring-space-orange/50 focus:border-transparent
                         transition-all duration-200"
              />
            </div>

            <motion.button
              type="submit"
              disabled={!eventCode.trim() || isNavigating}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isNavigating ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    🚀
                  </motion.span>
                  Launching...
                </span>
              ) : (
                'Enter the Map'
              )}
            </motion.button>
          </form>

          {/* Quick links */}
          <div className="mt-6 pt-4 border-t border-space-lavender/10 text-center">
            <p className="text-xs text-space-lavender/40 mb-2">Quick Access</p>
            <a
              href="/e/sandbox"
              className="text-space-mint hover:text-space-mint-light text-sm transition-colors"
            >
              → Sandbox Environment
            </a>
          </div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          {/* Links */}
          <div className="flex items-center gap-3">           
            {/* Level 0 Codelab */}
            <a
              href="https://codelabs.developers.google.com/way-back-home-level-0/instructions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-space-void-lighter/50 text-space-lavender/60 
                         hover:bg-space-void-lighter/70 hover:text-space-mint transition-all
                         backdrop-blur-sm flex items-center justify-center font-mono text-xs font-bold"
              title="Level 0 Codelab"
            >
              L0
            </a>

            {/* Level 1 Codelab */}
            <a
              href="https://codelabs.developers.google.com/way-back-home-level-1/instructions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-space-void-lighter/50 text-space-lavender/60 
                         hover:bg-space-void-lighter/70 hover:text-space-orange transition-all
                         backdrop-blur-sm flex items-center justify-center font-mono text-xs font-bold"
              title="Level 1 Codelab"
            >
              L1
            </a>

            {/* Level 2 Codelab */}
            <a
              href="https://codelabs.developers.google.com/codelabs/survivor-network/instructions#0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-space-void-lighter/50 text-space-lavender/60 
                         hover:bg-space-void-lighter/70 hover:text-space-orange transition-all
                         backdrop-blur-sm flex items-center justify-center font-mono text-xs font-bold"
              title="Level 2 Codelab"
            >
              L2
            </a>

            {/* Level 3 Codelab */}
            <a
              href="https://codelabs.developers.google.com/way-back-home-level-3/instructions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-space-void-lighter/50 text-space-lavender/60 
                         hover:bg-space-void-lighter/70 hover:text-space-orange transition-all
                         backdrop-blur-sm flex items-center justify-center font-mono text-xs font-bold"
              title="Level 3 Codelab"
            >
              L3
            </a>

            {/* Level 4 Codelab */}
            <a
              href="https://codelabs.developers.google.com/way-back-home-level-4/instructions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-space-void-lighter/50 text-space-lavender/60 
                         hover:bg-space-void-lighter/70 hover:text-space-orange transition-all
                         backdrop-blur-sm flex items-center justify-center font-mono text-xs font-bold"
              title="Level 4 Codelab"
            >
              L4
            </a>

            {/* Level 5 Codelab */}
            <a
              href="https://codelabs.developers.google.com/way-back-home-level-5/instructions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-space-void-lighter/50 text-space-lavender/60 
                         hover:bg-space-void-lighter/70 hover:text-space-orange transition-all
                         backdrop-blur-sm flex items-center justify-center font-mono text-xs font-bold"
              title="Level 5 Codelab"
            >
              L5
            </a>
          </div>

          <p className="text-xs text-space-lavender/40">
            An AI-powered workshop experience by Google Cloud.<br />
            Europe Edition by Konstantinos Kechagias.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
