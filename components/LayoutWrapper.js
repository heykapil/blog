import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import NextImage from 'next/image'
import { useState } from 'react'

const LayoutWrapper = ({ children }) => {
  const [navShow, setNavShow] = useState(false)
  const onToggleNav = () => setNavShow((status) => !status)

  return (
    <>
      <MobileNav navShow={navShow} onToggleNav={onToggleNav} />
      <header className="backdrop-filter trasition ease-in-out duration-500 overflow-x-hidden backdrop-blur supports-backdrop-blur:bg-white/50 py-3 sticky top-0 z-40 bg-white/30 dark:bg-dark/50 bg-opacity-50">
        <div className="mx-auto max-w-3xl xl:max-w-5xl flex items-center justify-between px-3 xl:px-0 bg-dpattern dark:bg-pattern">
          <div>
            <Link href="/" aria-label="Kapil's Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3 flex justify-center items-center">
                  <NextImage
                    src="/static/images/logo.jpg"
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block space-x-2">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="link-underline-black link-underline rounded py-1 px-2 font-medium text-gray-900 sm:py-2 sm:px-3 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <button
              className="w-8 h-8 ml-2 mr-1 rounded sm:hidden"
              type="button"
              aria-label="Toggle Menu"
              onClick={onToggleNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-gray-900 dark:text-gray-100"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="max-w-3xl px-3 xl:px-0 mx-auto sm:px-6 xl:max-w-5xl">
        <div className="flex flex-col justify-between min-h-screen">
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default LayoutWrapper
