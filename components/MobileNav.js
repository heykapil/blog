import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = ({ navShow, onToggleNav }) => {
  return (
    <div
      className={`sm:hidden fixed w-full h-screen inset-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-50 transition-transform transform ease-in-out duration-300 ${
        navShow ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        type="button"
        aria-label="toggle modal"
        className="fixed w-8 h-8 right-4 top-4 cursor-auto focus:outline-none"
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
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <nav className="fixed h-full mt-8">
        {headerNavLinks.map((link) => (
          <div key={link.title} className="px-8 py-4">
            <Link
                href={link.href}
                title={link.title}
                className="border-b border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xl font-semibold leading-8 tracking-wide hover:text-black dark:hover:text-white"
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default MobileNav
