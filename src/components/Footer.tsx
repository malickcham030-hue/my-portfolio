const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t border-neutral-200 py-5 text-sm dark:border-neutral-800">
    <p>Malick Cham · Web Developer</p>
    <ul className="flex gap-1">
      <li>
        <a href="https://x/malickcham030@gmail.com" target="_blank" rel="noreferrer" className="grid size-8 place-items-center rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700">
          <img src="/assets/images/logo-x.svg" alt="X" className="size-4 dark:invert" />
        </a>
      </li>
      <li>
        <a href="https://github/malickcham030@gmail.com" target="_blank" rel="noreferrer" className="grid size-8 place-items-center rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700">
          <img src="/assets/images/logo-github.svg" alt="github" className="size-4 dark:invert" />
        </a>
      </li>
      <li>
        <a href="https://www.linkeding.malickcham030@gmail.com" target="_blank" rel="noreferrer" className="grid size-8 place-items-center rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700">
          <img src="/assets/images/logo-linkedin.svg" alt="linkeding" className="size-4 dark:invert" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.malickcham35.com" target="_blank" rel="noreferrer" className="grid size-8 place-items-center rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700">
          <img src="/assets/images/logo-imstagram.svg" alt="instagram" className="size-4 dark:invert" />
        </a>
      </li>
    </ul>
  </footer>
  )
}

export default Footer