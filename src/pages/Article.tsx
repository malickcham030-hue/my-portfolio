import { Link, useParams } from "react-router"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import articles from "../data/articles.json"

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })

const Article = () => {
  const { slug } = useParams()

  const article = articles.find((item) => item.slug === slug)

  if (!article) {
    return (
      <section className="flex flex-col gap-5">
        <h1 className="text-4xl/tight font-extrabold tracking-tight text-neutral-700 dark:text-neutral-0">
          <span className="underline decoration-accent decoration-4 underline-offset-4">Article not found</span>
        </h1>
        <p>There is no article with this address. It may have moved, or the link may have a typo.</p>
        <Link to="/blog" className="self-start font-medium text-neutral-700 underline decoration-accent decoration-2 underline-offset-4 hover:decoration-accent-strong dark:text-neutral-0">Back to all articles</Link>
      </section>
    )
  }

  return (
    <article className="flex flex-col gap-4">
      <Link to="/blog" className="self-start text-sm font-medium text-neutral-700 underline decoration-accent decoration-2 underline-offset-4 hover:decoration-accent-strong dark:text-neutral-0">&larr; All articles</Link>
      <h1 className="text-4xl/tight font-extrabold tracking-tight text-neutral-700 dark:text-neutral-0">{article.title}</h1>
      <p className="text-sm italic">Published <time dateTime={article.publishedAt.slice(0, 10)}>{formatDate(article.publishedAt)}</time></p>
      <hr className="border-neutral-200 dark:border-neutral-800" />

      <div className="article-body">
        <Markdown remarkPlugins={[remarkGfm]}>{article.content}</Markdown>
      </div>
    </article>
  )
}

export default Article
