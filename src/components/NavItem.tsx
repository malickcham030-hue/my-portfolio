import React from 'react'
import { NavLink } from 'react-router'

type NavItemProps = {
  to: string
  children: React.ReactNode
}

const NavItem = ({ to, children }: NavItemProps) => {
  const defaultStyles = "py-1 text-neutral-700  hover:underline dark:text-neutral-0 underline-offset-[6px] decoration-[3px] decoration-accent"
  return (
    <NavLink 
        to={to}
        className={({ isActive }) => isActive ? `${defaultStyles} underline` : `${defaultStyles}`}
        >{children}</NavLink>
  )
}

export default NavItem