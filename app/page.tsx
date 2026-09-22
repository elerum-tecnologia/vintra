import { Hero } from '@/components/fragments/hero'
import { FeatureGrid } from '@/components/fragments/feature-grid'
import { TextBlock } from '@/components/fragments/text-block'
import { BlogList } from '@/components/fragments/blog-list'
import { Cta } from '@/components/fragments/cta'
import {
  defaultFeatures,
  defaultBlogPosts,
  defaultCta,
} from '@/lib/content'

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Plataforma digital para empresas"
        title="Sua operação digital, unificada em um só lugar"
        description="A Vintra conecta pessoas, processos e sistemas numa única plataforma — para equipes que precisam de mais velocidade e menos retrabalho."
        primary={{ label: 'Fale com um especialista', href: '/contato' }}
        secondary={{ label: 'Ver planos', href: '/produtos/precos' }}
        image={{
          src: '/images/hero-dashboard.png',
          alt: 'Painel da plataforma Vintra com integrações e automações',
        }}
      />
      <FeatureGrid
        eyebrow="Recursos"
        title="Tudo que sua operação precisa, em um só lugar"
        features={defaultFeatures}
      />
      <TextBlock
        eyebrow="Por que a Vintra"
        title="Feito para times que não podem parar"
        paragraphs={[
          'A Vintra nasceu para resolver um problema comum: sistemas que não conversam entre si e processos que dependem de planilhas paralelas.',
          'Nossa plataforma centraliza dados, automações e integrações num único lugar, com implantação guiada por especialistas.',
          'Hoje, times de operações, atendimento e financeiro usam a Vintra para reduzir retrabalho e tomar decisões com dados atualizados em tempo real.',
        ]}
        image={{
          src: '/images/collaboration.png',
          alt: 'Time de operações colaborando com a plataforma Vintra',
        }}
        imagePosition="right"
      />
      <BlogList
        eyebrow="Do blog"
        title="Ideias para operações mais inteligentes"
        posts={defaultBlogPosts}
        background="muted"
      />
      <Cta {...defaultCta} />
    </>
  )
}
