import Avatar from './Avatar'
import NavItem from './NavItem'
import Mobile from './mobile'

type NavItem = {
  label: string
  href: string
  current?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Newsletter', href: '/newsletter' },
]

const Header = () => {
  return (
    <header className="relative mt-4 flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-0 p-1.5 dark:border-neutral-700 dark:bg-neutral-800">
    <div className="flex items-center gap-3 pl-1">
      <Avatar />
      <div className="min-w-0 leading-tight">
        <p className="truncate text-sm font-semibold text-neutral-700 dark:text-neutral-0">Malick Cham</p>
        <p className="text-xs text-accent-strong dark:text-accent">Web Developer</p>
      </div>
    </div>

    <div className="flex items-center gap-2">
     
      <nav aria-label="Main" className="hidden sm:block">
        <ul className="flex items-center gap-5 px-3 text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              
              <NavItem to={item.href} >
                {item.label}
              </NavItem>
              
            </li>
          ))}
        </ul>
      </nav>

     
      <Mobile items={NAV_ITEMS} />

      <button type="button" data-theme-toggle className="grid size-10 place-items-center rounded-lg border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-700">
        <span className="sr-only">Switch colour theme</span>
        <img src="/assets/images/icon-moon.svg" alt="" className="dark:hidden" />
        <img src="/assets/images/icon-sun.svg" alt="" className="hidden dark:block" />
      </button>
    </div>
  </header>
  )
}

export default Header