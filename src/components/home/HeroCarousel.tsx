'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const slides = [1, 2, 3, 4, 5]

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border bg-gradient-to-br from-blue-50 to-purple-50 shadow-sm dark:from-gray-800 dark:to-gray-900">
      <div className="relative h-[360px] sm:h-[420px] w-full flex items-center justify-center">
        <AnimatePresence initial={false}>
          {slides.map(
            (i) =>
              i === index && (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-6 p-10"
                >
                  {/* Left: Text Skeletons */}
                  <div className="max-w-md flex-1 space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-6 w-5/6" />
                    <Skeleton className="h-6 w-1/2" />
                    <div className="pt-4 flex gap-3">
                      <Button disabled>Join Now</Button>
                      <Button variant="outline" disabled>
                        Learn More
                      </Button>
                    </div>
                  </div>

                  {/* Right: Image placeholder */}
                  <Card className="flex-1 max-w-lg h-64">
                    <CardContent className="flex items-center justify-center h-full">
                      <Skeleton className="h-48 w-3/4" />
                    </CardContent>
                  </Card>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === index
                ? 'bg-purple-600 w-6'
                : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  )
}