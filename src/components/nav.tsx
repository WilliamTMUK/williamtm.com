'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'
import NAVIGATION from '@/data/navigation'

export default function Nav() {
  const path = usePathname()
  return (
    <div className="fixed left-0 top-5 z-50 w-full">
      <nav className="text-text border-border dark:border-darkBorder shadow-light dark:shadow-dark mx-auto flex w-max gap-5 rounded-base border-2 bg-main p-2.5 px-5 text-sm font-base sm:text-base w450:gap-4">
        {NAVIGATION.map((link) => {
          return (
            <Link
              key={link.href}
              className={clsx(
                'hover:border-border dark:hover:border-darkBorder rounded-base border-2 px-2 py-1 transition-colors',
                path === link.href
                  ? 'border-border dark:border-darkBorder'
                  : 'border-transparent',
              )}
              href={link.href}
            >
              {link.text}
            </Link>
          )
        })}
        <ThemeSwitcher />
      </nav>
    </div>
  )
}
