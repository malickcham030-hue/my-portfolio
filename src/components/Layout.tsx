import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col border-x border-neutral-300 bg-neutral-100 px-3 sm:px-4 dark:border-neutral-700 dark:bg-neutral-900">
    
        <Header />

        <main className="flex-1 py-10">
            <Outlet />
        </main>

        <Footer />
    </div>
  )
}

export default Layout