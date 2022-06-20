import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = ({ navShow, onToggleNav }) => {

  return (
    <div className="sm:hidden">
     <button
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded py-1"
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
      <div
        className={`fixed w-full h-screen top-12 right-0  z-40 ease-in-out duration-500 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        } bg-opacity-30 dark:bg-opacity-30 backdrop-blur-lg firefox:bg-opacity-100 dark:firefox:bg-opacity-100`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed z-30 w-full h-full cursor-auto focus:outline-none "
          onClick={onToggleNav}
        ></button>
        <nav className="mt-8 relative space-y-8 z-40">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12">
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
    </div>
  )
}

export default MobileNav
