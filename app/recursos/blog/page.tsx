import type { Metadata } from 'next'
import { Hero } from '@/components/fragments/hero'
import { BlogList } from '@/components/fragments/blog-list'
import { defaultBlogPosts } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artigos da Vintra sobre produtividade, integrações e segurança para operações digitais.',
}

export default function BlogPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Blog"
        title="Ideias para operações mais inteligentes"
        description="Automação, integrações e segurança explicadas de forma prática, por quem vive operações complexas todos os dias."
      />
      <BlogList
        title="Artigos recentes"
        posts={defaultBlogPosts}
      />
    </>
  )
}
