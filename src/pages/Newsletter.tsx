const Newsletter = () => {
    return (
      <>
          <section className="flex flex-col gap-5">
          <h1 className="text-4xl/tight font-extrabold tracking-tight text-neutral-700 dark:text-neutral-0"><span className="underline decoration-accent decoration-4 underline-offset-4">Newsletter</span></h1>
          <p>
            Want to stay updated on my latest articles, coding tutorials, and personal
            adventures? Sign up for my newsletter! It's a simple way to keep track of new
            posts and occasional coding tips I discover. Just drop your email in the sign-up
            box, and I'll send you updates whenever there's something new to share.
          </p>
          <p>I'd love to have you along for the ride and also hear about your own journey!</p>

          <p data-success role="status" className="hidden rounded-lg border border-green-700/30 bg-green-50 px-4 py-3 text-sm text-green-800 dark:bg-green-950 dark:text-green-200">
            <img src="/assets/images/icon-success.svg" alt="" className="mr-1 inline-block align-[-2px]" />
            You're subscribed! Check your inbox for a confirmation email.
          </p>

          <form data-newsletter noValidate className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-neutral-0 p-4 dark:border-neutral-700 dark:bg-neutral-800">
            <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-0">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              aria-describedby="email-error"
              className="rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2.5 text-neutral-700 placeholder:text-neutral-400 hover:border-neutral-400 aria-[invalid=true]:border-red-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0"
            />
            <p id="email-error" data-error className="hidden text-sm text-red-600 dark:text-red-400">
              <img src="/assets/images/icon-error.svg" alt="" className="mr-1 inline-block align-[-2px]" />
              Please enter a valid email address.
            </p>
            <button type="submit" className="self-start rounded-lg bg-accent-strong px-5 py-2.5 font-semibold text-white hover:bg-blue-600">
              Stay updated
            </button>
            <p className="text-sm">Unsubscribe anytime. No spam, I promise &#128578;</p>
          </form>
        </section>
      </>
  
     
    )
  }
  
  export default Newsletter