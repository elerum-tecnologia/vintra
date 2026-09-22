import type { Metadata } from 'next'
import { Layers, RefreshCw, Gauge } from 'lucide-react'
import { Hero } from '@/components/fragments/hero'
import { TextBlock } from '@/components/fragments/text-block'
import { FeatureGrid } from '@/components/fragments/feature-grid'
import { Cta } from '@/components/fragments/cta'
import { defaultCta } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Produtos',
  description:
    'Conheça a plataforma Vintra: uma base única para integrar sistemas, automatizar processos e operar com segurança.',
}

export default function ProdutosPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Produtos"
        title="Uma plataforma, toda a sua operação"
        description="Integrações, automação e governança reunidas numa base única — para você parar de emendar ferramentas e começar a operar com fluidez."
        primary={{ label: 'Fale com um especialista', href: '/contato' }}
        secondary={{ label: 'Ver preços', href: '/produtos/precos' }}
      />
      <TextBlock
        eyebrow="Visão geral"
        title="Do dado disperso à operação conectada"
        paragraphs={[
          'A Vintra concentra num só lugar as três camadas que sustentam qualquer operação digital: a conexão com seus sistemas, os fluxos que movem o trabalho e os controles que mantêm tudo seguro.',
          'Você começa com integrações prontas, desenha automações sem depender de TI e acompanha cada etapa com trilhas de auditoria — sem trocar de tela e sem planilhas paralelas.',
        ]}
        image={{
          src: '/images/hero-dashboard.png',
          alt: 'Visão geral da plataforma Vintra',
        }}
        imagePosition="left"
      />
      <FeatureGrid
        eyebrow="Como funciona"
        title="Três camadas que trabalham juntas"
        features={[
          {
            icon: Layers,
            title: 'Base única de dados',
            description:
              'Centralize informações de vendas, atendimento e financeiro num modelo consistente, sem duplicidade.',
          },
          {
            icon: RefreshCw,
            title: 'Fluxos sempre em dia',
            description:
              'Sincronize sistemas em tempo real e mantenha cada time trabalhando com a mesma versão da verdade.',
          },
          {
            icon: Gauge,
            title: 'Visibilidade em tempo real',
            description:
              'Acompanhe indicadores e gargalos por painéis que atualizam conforme a operação acontece.',
          },
        ]}
      />
      <Cta {...defaultCta} />
    </>
  )
}
