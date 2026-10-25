import { useState } from 'react'
import { NavLink } from 'react-router'

type MobileNavItem = {
  label: string
  href: string
}

type MobileProps = {
  items: MobileNavItem[]
}

const linkStyles =
  'block rounded-lg px-3 py-2 text-neutral-700 hover:bg-neutral-200 dark:text-neutral-0 dark:hover:bg-neutral-700'

const activeStyles =
  'font-semibold underline decoration-accent decoration-[3px] underline-offset-[6px]'

const Mobile = ({ items }: MobileProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((current) => !current)}
        className="grid size-10 place-items-center rounded-lg border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-700 sm:hidden"
      >
        <span className="sr-only">Menu</span>
        <img
          src={open ? '/assets/images/icon-menu-close.svg' : '/assets/images/icon-menu.svg'}
          alt=""
          className={open ? 'invert dark:invert-0' : 'dark:invert'}
        />
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="absolute top-full right-0 z-10 mt-2 w-48 rounded-xl border border-neutral-200 bg-neutral-0 p-2 shadow-lg sm:hidden dark:border-neutral-700 dark:bg-neutral-800"
        >
          <ul className="flex flex-col text-sm">
            {items.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  end={item.href === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive ? `${linkStyles} ${activeStyles}` : linkStyles
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}

export default Mobile
