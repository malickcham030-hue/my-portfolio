const Index = () => {
  return (
    <>
      <section className="flex flex-col gap-5 border-b border-neutral-200 pb-10 dark:border-neutral-800">
        <p className="text-sm font-semibold tracking-wide text-accent-strong uppercase dark:text-accent">Web Developer</p>
        <h1 className="text-4xl/tight font-extrabold tracking-tight text-neutral-700 dark:text-neutral-0"><span className="underline decoration-accent decoration-4 underline-offset-4">Hi, I'm Malick Cham</span> &#128075;</h1>
        <p>
          Hi, I'm Malick Cham  an aspiring web developer with a strong passion for technology, creativity, and problem solving. My journey into web development is driven by a desire to turn ideas into meaningful digital experiences. I enjoy exploring how websites work, writing code, and building interfaces that are not only visually appealing but also functional, responsive, and easy to use. For me, coding is more than just writing lines of code; it's a continuous process of learning, thinking critically, and bringing ideas to life.
        </p>
        <ul className="flex flex-wrap gap-2">
          {['HTML', 'CSS', 'JavaScript', 'React'].map((skill) => (
            <li key={skill} className="rounded-full border border-neutral-200 bg-neutral-0 px-3 py-1 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-accent">
              {skill}
            </li>
          ))}
        </ul>
        <ul className="flex gap-3">
          <li>
            <a href="https://x.com/malickchamwljh" target="_blank" rel="noreferrer" className="grid size-10 place-items-center rounded-lg border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-700">
              <img src="/assets/images/logo-x.svg" alt="X" className="size-4 dark:invert" />
            </a>
          </li>
          <li>
            <a href="https://github.com/malickcham030-hue" target="_blank" rel="noreferrer" className="grid size-10 place-items-center rounded-lg border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-700">
              <img src="/assets/images/logo-github.svg" alt="GitHub" className="size-4 dark:invert" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/malick-cham-952b92443/" target="_blank" rel="noreferrer" className="grid size-10 place-items-center rounded-lg border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-700">
              <img src="/assets/images/logo-linkedin.svg" alt="LinkedIn" className="size-4 dark:invert" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/malickcham35" target="_blank" rel="noreferrer" className="grid size-10 place-items-center rounded-lg border border-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-700">
              <img src="/assets/images/logo-instagram.svg" alt="instagram" className="size-4 dark:invert" />
            </a>
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-6 pt-10">
        <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-neutral-700 dark:text-neutral-0">Latest Articles <span className="h-0.5 w-6 self-end bg-accent mb-2" aria-hidden="true"></span></h2>

       
        <ul className="flex flex-col gap-4">
          <li className="flex flex-col gap-1 rounded-xl border border-neutral-200 bg-neutral-0 p-4 dark:border-neutral-700 dark:bg-neutral-800">
            <a href="/blog/balancing-hobbies-and-coding" className="text-lg/snug font-semibold text-neutral-700 hover:text-accent-strong dark:text-neutral-0 dark:hover:text-accent">Balancing Hobbies and Coding: How Hiking and Rock Climbing Help Me Stay Motivated</a>
            <p className="text-sm italic">February 18, 2025</p>
          </li>
          <li className="flex flex-col gap-1 rounded-xl border border-neutral-200 bg-neutral-0 p-4 dark:border-neutral-700 dark:bg-neutral-800">
            <a href="/article" className="text-lg/snug font-semibold text-neutral-700 hover:text-accent-strong dark:text-neutral-0 dark:hover:text-accent">Reading for Inspiration: 5 Books That Shaped My Coding Journey</a>
            <p className="text-sm italic">February 15, 2025</p>
          </li>
          <li className="flex flex-col gap-1 rounded-xl border border-neutral-200 bg-neutral-0 p-4 dark:border-neutral-700 dark:bg-neutral-800">
            <a href="/article" className="text-lg/snug font-semibold text-neutral-700 hover:text-accent-strong dark:text-neutral-0 dark:hover:text-accent">Overcoming Imposter Syndrome as a New Developer</a>
            <p className="text-sm italic">February 10, 2025</p>
          </li>
          <li className="flex flex-col gap-1 rounded-xl border border-neutral-200 bg-neutral-0 p-4 dark:border-neutral-700 dark:bg-neutral-800">
            <a href="/article" className="text-lg/snug font-semibold text-neutral-700 hover:text-accent-strong dark:text-neutral-0 dark:hover:text-accent">Exploring the World of Responsive Design</a>
            <p className="text-sm italic">February 4, 2025</p>
          </li>
          <li className="flex flex-col gap-1 rounded-xl border border-neutral-200 bg-neutral-0 p-4 dark:border-neutral-700 dark:bg-neutral-800">
            <a href="/article" className="text-lg/snug font-semibold text-neutral-700 hover:text-accent-strong dark:text-neutral-0 dark:hover:text-accent">My Favorite Dev Tools for Productivity</a>
            <p className="text-sm italic">January 29, 2025</p>
          </li>
        </ul>

        <a href="/blog" className="self-start font-medium text-neutral-700 underline decoration-accent decoration-2 underline-offset-4 hover:decoration-accent-strong dark:text-neutral-0">View all articles</a>
      </section>
    </>

   
  )
}

export default Index