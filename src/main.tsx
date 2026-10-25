import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from './pages/Index.tsx'
import Blog from './pages/Blog.tsx';
import Layout from './components/Layout.tsx';
import About from './pages/About.tsx';
import Newsletter from './pages/Newsletter.tsx';
import Article from './pages/Article.tsx';
import NotFound from './pages/404.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
