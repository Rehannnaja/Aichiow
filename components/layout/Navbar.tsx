'use client'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu } from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import ThemeToggle from '@/components/shared/ThemeToggle'
import { classNames } from '@/utils/classNames'
import { useState } from 'react'
import { FaDiscord, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'

const navItems = [
  { href: '/', label: 'HOME' },
  { href: '/upcoming', label: 'TIMETABLE' },
  { href: '/explore', label: 'EXPLORE' },
  { href: '/manga', label: 'MANGA' },
  { href: '/manhwa', label: 'MANHWA' },
  { href: '/light-novel', label: 'LIGHT NOVEL' },
]

export default function Navbar() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-neutral-900 text-white shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 hover:opacity-90 transition"
        >
          AICHIOW
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-4 sm:gap-5 md:gap-6 text-sm md:text-base font-medium">
            {navItems.map((item) => {
              const isActive =
                router.pathname === item.href || router.pathname.startsWith(item.href + '/')

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={classNames(
                    'transition-colors duration-200 hover:text-blue-400',
                    isActive ? 'text-blue-400' : 'text-white'
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Avatar User */}
          <Link href="/user" className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-blue-500 hover:scale-105 transition-transform">
            <Image
              src="/default-avatar.png" // ganti dengan avatar user real dari auth kalau sudah ada
              alt="User Avatar"
              fill
              className="object-cover"
            />
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          {/* Avatar User Mobile */}
          <Link href="/user" className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-blue-500 hover:scale-105 transition-transform">
            <Image
              src="/default-avatar.png"
              alt="User Avatar"
              fill
              className="object-cover"
            />
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="Menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-neutral-900 text-white w-64 sm:w-72">
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

                {/* Community Section with Icons */}
                <div className="mt-8 border-t border-white/20 pt-4">
                  <p className="text-sm font-semibold uppercase text-white/60 mb-3">Community</p>
                  <div className="flex gap-4 text-lg">
                    <Link href="https://whatsapp.com/channel/0029Vb5lXCA1SWsyWyJbvW0q" target="_blank" aria-label="Discord">
                      <FaDiscord className="hover:text-blue-400 transition" />
                    </Link>
                    <Link href="https://youtube.com/@TakaDevelopment" target="_blank" aria-label="YouTube">
                      <FaYoutube className="hover:text-blue-400 transition" />
                    </Link>
                    <Link href="https://tiktok.com/@putrawangyyy" target="_blank" aria-label="TikTok">
                      <FaTiktok className="hover:text-blue-400 transition" />
                    </Link>
                    <Link href="https://instagram.com/putrasenpaiii" target="_blank" aria-label="Instagram">
                      <FaInstagram className="hover:text-blue-400 transition" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-4">
                <ThemeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
