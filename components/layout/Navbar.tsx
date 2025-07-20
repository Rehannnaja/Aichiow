'use client'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu } from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import ThemeToggle from '@/components/shared/ThemeToggle'
import { classNames } from '@/utils/classNames'
import { useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/upcoming', label: 'Timetable' },
  { href: '/explore', label: 'Explore' },
  { href: '/search', label: 'Search' },
  { href: '/manga', label: 'Manga' },
]

export default function Navbar() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-neutral-900 text-white shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
        {/* Logo di kiri */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 hover:opacity-90 transition"
        >
          AICHIOW
        </Link>

        {/* Hamburger di kanan */}
        <div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="Menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-neutral-900 text-white w-64 sm:w-72 p-0 overflow-hidden">
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 80, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="h-full flex flex-col"
              >
                <div className="flex flex-col gap-6 mt-10 px-4">
                  {navItems.map((item) => {
                    const isActive =
                      router.pathname === item.href || router.pathname.startsWith(item.href + '/')

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={classNames(
                          'text-lg font-medium transition hover:text-blue-400',
                          isActive ? 'text-blue-400' : 'text-white'
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  })}

                  {/* Community Section */}
                  <div className="mt-8 border-t border-white/20 pt-4">
                    <p className="text-sm font-semibold uppercase text-white/60 mb-3">Community</p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="https://discord.gg/aichinime"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition text-sm"
                      >
                        🗨️ Discord
                      </a>
                      <a
                        href="https://youtube.com/Takadevelopment"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition text-sm"
                      >
                        ▶️ YouTube
                      </a>
                      <a
                        href="https://tiktok.com/@putrawangyyy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition text-sm"
                      >
                        🎵 TikTok
                      </a>
                      <a
                        href="https://instagram.com/putrasenpaiii"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition text-sm"
                      >
                        📷 Instagram
                      </a>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-4">
                  <ThemeToggle />
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
