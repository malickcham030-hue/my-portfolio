import { Link } from 'react-router'

type Article = {
  title: string
  slug: string
  publishedAt: string
  description: string
}

type ArticleListItemProps = {
  article: Article
}

const ArticleListItem = ({ article }: ArticleListItemProps) => {
  return (
    <li className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-neutral-0 p-4 dark:border-neutral-700 dark:bg-neutral-800">
        <Link 
            to={`/blog/${article.slug}`}
            className="
                text-lg/snug 
                font-semibold 
                text-neutral-700
                 hover:text-accent-strong
                  dark:text-neutral-0
                   dark:hover:text-accent
            ">{article.title}</Link>
        <p className="text-sm italic">{article.publishedAt}</p>
        <p>{article.description}</p>
    </li>
  )
}

export default ArticleListItem