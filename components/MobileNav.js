import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = ({ navShow, onToggleNav }) => {

  return (
    <div className="sm:hidden">
      <div
        className={`fixed w-full h-screen top-12 right-0  z-40 ease-in-out duration-500 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        } bg-opacity-30 dark:bg-opacity-30 backdrop-blur-lg firefox:bg-opacity-100 dark:firefox:bg-opacity-100`}
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-5 mt-11 h-8 w-8 rounded"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
          </button>
        </div>
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
