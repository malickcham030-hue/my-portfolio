import ArticleListItem from "../components/ArticleListItem"
import articles from "../data/articles.json"

const Blog = () => {
  return (
      <>
        <section className="flex flex-col gap-4">
          <h1 className="text-4xl/tight font-extrabold tracking-tight text-neutral-700 dark:text-neutral-0"><span className="underline decoration-accent decoration-4 underline-offset-4">My Articles</span></h1>
          <p>Below are all my recent blog posts. Click on any title to read the full article.</p>

         
          <ul className="flex flex-col gap-4">
            
            {articles.map((article) => <ArticleListItem key={article.slug} article={article} />)}
          </ul>
        </section>
      </>

   
  )
}

export default Blog