'use client'

/**
 * Animated Title Component
 * "Way Back Home" with dreamy space aesthetics
 */

import { motion } from 'framer-motion'

export function AnimatedTitle() {
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const words = ['Way', 'Back', 'Home']

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={titleVariants}
      className="text-center"
    >
      {/* Main title */}
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
        {words.map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            className="inline-block mr-4 last:mr-0"
            variants={letterVariants}
          >
            {word.split('').map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                className={`inline-block ${wordIndex === 2
                  ? 'text-gradient-space'
                  : 'text-space-cream'
                  }`}
                whileHover={{
                  scale: 1.1,
                  color: '#FF9F43',
                  transition: { duration: 0.2 },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-space-lavender/80 text-lg md:text-xl font-body max-w-md mx-auto"
      >
        Find your way through the stars
      </motion.p>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
        className="mt-6 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-space-orange/50 to-transparent"
      />
    </motion.div>
  )
}

/**
 * Smaller title for map view with home navigation
 */
export function MapTitle({ eventName }: { eventName?: string }) {
  return (
    <div className="flex items-center gap-3">
      {/* Home link */}
      <a
        href="/"
        className="w-10 h-10 rounded-full bg-gradient-to-br from-space-orange to-space-peach 
                   flex items-center justify-center hover:scale-110 transition-transform"
        title="Back to Home"
      >
        <span className="text-space-void text-lg">🚀</span>
      </a>

      <div>
        <motion.h1
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-xl font-bold text-space-cream"
        >
          Way Back Home
        </motion.h1>
        {eventName && (
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-space-lavender/60 text-sm font-body"
          >
            {eventName}
          </motion.p>
        )}
      </div>
    </div>
  )
}

/**
 * Footer links for the map view
 */
export function MapFooterLinks() {
  return (
    <div className="flex items-center gap-2">
      {/* Level 0 Codelab */}
      <a
        href="https://codelabs.developers.google.com/way-back-home-level-0/instructions"
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-full bg-space-void-lighter/30 text-space-lavender/40 
                   hover:bg-space-void-lighter/50 hover:text-space-mint transition-all
                   flex items-center justify-center font-mono text-[10px] font-bold"
        title="Level 0 Codelab"
      >
        L0
      </a>

      {/* Level 1 Codelab */}
      <a
        href="https://codelabs.developers.google.com/way-back-home-level-1/instructions"
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-full bg-space-void-lighter/30 text-space-lavender/40 
                   hover:bg-space-void-lighter/50 hover:text-space-orange transition-all
                   flex items-center justify-center font-mono text-[10px] font-bold"
        title="Level 1 Codelab"
      >
        L1
      </a>

      {/* Level 2 Codelab */}
      <a
        href="https://codelabs.developers.google.com/codelabs/survivor-network/instructions#0"
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-full bg-space-void-lighter/30 text-space-lavender/40 
                   hover:bg-space-void-lighter/50 hover:text-space-orange transition-all
                   flex items-center justify-center font-mono text-[10px] font-bold"
        title="Level 2 Codelab"
      >
        L2
      </a>

      {/* Level 3 Codelab */}
      <a
        href="https://codelabs.developers.google.com/way-back-home-level-3/instructions"
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-full bg-space-void-lighter/30 text-space-lavender/40 
                   hover:bg-space-void-lighter/50 hover:text-space-orange transition-all
                   flex items-center justify-center font-mono text-[10px] font-bold"
        title="Level 3 Codelab"
      >
        L3
      </a>

      {/* Level 4 Codelab */}
      <a
        href="https://codelabs.developers.google.com/way-back-home-level-4/instructions"
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-full bg-space-void-lighter/30 text-space-lavender/40 
                   hover:bg-space-void-lighter/50 hover:text-space-orange transition-all
                   flex items-center justify-center font-mono text-[10px] font-bold"
        title="Level 4 Codelab"
      >
        L4
      </a>

      {/* Level 5 Codelab */}
      <a
        href="https://codelabs.developers.google.com/way-back-home-level-5/instructions"
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-full bg-space-void-lighter/30 text-space-lavender/40 
                   hover:bg-space-void-lighter/50 hover:text-space-orange transition-all
                   flex items-center justify-center font-mono text-[10px] font-bold"
        title="Level 5 Codelab"
      >
        L5
      </a>
    </div>
  )
}

export default AnimatedTitle
