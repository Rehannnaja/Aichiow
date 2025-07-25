'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

const STORAGE_KEY = 'aichiow-uji'

export default function UpdateModal() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY)
    if (!seen) setVisible(true)
  }, [])

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, 'seen')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-neutral-900 text-white p-6 rounded-xl max-w-md w-full shadow-2xl border border-neutral-700"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-white/60 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-bold mb-2">🚀 Aichiow beta Telah Hadir!</h2>
            <p className="text-sm text-neutral-300 mb-6">
              Selamat datang di aichiow Beta dimana semua kebutuhan animelovers tersedia di sini
            </p>

            <div className="flex justify-end">
              <button
                onClick={handleClose}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
              >
                Oke, sip!
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
