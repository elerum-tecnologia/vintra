import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleHeader } from '@/components/fragments/article-header'
import { ArticleBody } from '@/components/fragments/article-body'
import { BlogList } from '@/components/fragments/blog-list'
import { Cta } from '@/components/fragments/cta'
import { articles, defaultBlogPosts, defaultCta } from '@/lib/content'

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]
  if (!article) return { title: 'Artigo não encontrado' }
  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) notFound()

  const related = defaultBlogPosts.filter((post) => post.slug !== slug)

  return (
    <>
      <ArticleHeader
        category={article.category}
        title={article.title}
        excerpt={article.excerpt}
        author={article.author}
        date={article.date}
        readTime={article.readTime}
        image={article.image}
      />
      <ArticleBody blocks={article.blocks} />
      <BlogList
        eyebrow="Continue lendo"
        title="Outros artigos"
        posts={related}
        background="muted"
      />
      <Cta {...defaultCta} />
    </>
  )
}
