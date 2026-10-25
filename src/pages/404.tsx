import { Link } from "react-router"

const NotFound = () => {
    return (

      <section className="flex flex-col gap-5">
          <h1 className="text-4xl/tight font-extrabold tracking-tight text-neutral-700 dark:text-neutral-0"><span className="underline decoration-accent decoration-4 underline-offset-4">Page not found</span></h1>
          <p>There is nothing at this address. It may have moved, or the link may have a typo.</p>
          <Link to="/" className="self-start font-medium text-neutral-700 underline decoration-accent decoration-2 underline-offset-4 hover:decoration-accent-strong dark:text-neutral-0">Back to the home page</Link>
        </section>
       
    )
  }
  
  export default NotFound