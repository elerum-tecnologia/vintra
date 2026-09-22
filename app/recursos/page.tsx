import type { Metadata } from 'next'
import { BookOpen, LifeBuoy, FileText } from 'lucide-react'
import { Hero } from '@/components/fragments/hero'
import { FeatureGrid } from '@/components/fragments/feature-grid'
import { BlogList } from '@/components/fragments/blog-list'
import { defaultBlogPosts } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Recursos',
  description:
    'Blog, central de ajuda e documentação da Vintra: tudo para aproveitar ao máximo a sua operação digital.',
}

export default function RecursosPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Recursos"
        title="Conteúdo para operar melhor"
        description="Artigos, guias e documentação técnica para tirar o máximo da Vintra — do primeiro fluxo à automação mais avançada."
        primary={{ label: 'Ler o blog', href: '/recursos/blog' }}
        secondary={{ label: 'Ver documentação', href: '/recursos/documentacao' }}
      />
      <FeatureGrid
        eyebrow="Onde encontrar ajuda"
        title="Escolha o recurso certo"
        features={[
          {
            icon: FileText,
            title: 'Blog',
            description:
              'Ideias práticas sobre automação, integrações e gestão de operações digitais.',
          },
          {
            icon: LifeBuoy,
            title: 'Central de ajuda',
            description:
              'Respostas rápidas para dúvidas do dia a dia e passo a passo para as tarefas mais comuns.',
          },
          {
            icon: BookOpen,
            title: 'Documentação',
            description:
              'Referência técnica completa da API, conectores e recursos da plataforma.',
          },
        ]}
      />
      <BlogList
        eyebrow="Do blog"
        title="Leituras recentes"
        posts={defaultBlogPosts}
        background="muted"
      />
    </>
  )
}
