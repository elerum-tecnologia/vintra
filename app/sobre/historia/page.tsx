import type { Metadata } from 'next'
import { Sparkles, Users, Globe } from 'lucide-react'
import { Hero } from '@/components/fragments/hero'
import { TextBlock } from '@/components/fragments/text-block'
import { FeatureGrid } from '@/components/fragments/feature-grid'
import { Cta } from '@/components/fragments/cta'
import { defaultCta } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Nossa história',
  description:
    'De um problema de operação a uma plataforma usada por centenas de times: conheça a trajetória da Vintra.',
}

export default function HistoriaPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Nossa história"
        title="De uma planilha compartilhada a uma plataforma"
        description="A Vintra existe porque vivemos, na pele, o custo de operar com sistemas desconectados. Esta é a trajetória que nos trouxe até aqui."
        primary={{ label: 'Conheça a equipe', href: '/sobre/equipe' }}
      />
      <TextBlock
        eyebrow="O começo"
        title="2021 — o problema que não saía da cabeça"
        paragraphs={[
          'Marina e Bruno trabalhavam juntos numa empresa em rápido crescimento. A operação escalava, mas os sistemas não acompanhavam: cada integração virava um projeto, cada relatório dependia de exportar e colar dados à mão.',
          'Depois de mais uma madrugada consolidando planilhas, ficou claro que aquele problema era comum a praticamente toda empresa em crescimento. Faltava uma camada que unisse tudo sem exigir um exército de desenvolvedores.',
        ]}
        image={{
          src: '/images/blog-automation.png',
          alt: 'Ilustração do início da Vintra',
        }}
        imagePosition="left"
      />
      <TextBlock
        eyebrow="A virada"
        title="2023 — dos primeiros clientes à plataforma"
        paragraphs={[
          'Com os primeiros clientes de varejo e indústria, aprendemos que integrações prontas eram só o começo: os times queriam automatizar processos inteiros sem depender de TI.',
          'Reconstruímos a Vintra como uma plataforma de orquestração, com editor visual de fluxos, governança e trilhas de auditoria. A adoção cresceu de dentro para fora, área por área.',
        ]}
        background="muted"
        imagePosition="none"
      />
      <FeatureGrid
        eyebrow="Onde estamos"
        title="A Vintra hoje"
        features={[
          {
            icon: Users,
            title: 'Centenas de times',
            description:
              'Operações de varejo, indústria e serviços financeiros usam a Vintra no dia a dia.',
          },
          {
            icon: Sparkles,
            title: 'Milhões de automações',
            description:
              'Fluxos rodam todos os dias eliminando tarefas manuais e reduzindo retrabalho.',
          },
          {
            icon: Globe,
            title: 'Presença nacional',
            description:
              'Com base em São Paulo, atendemos empresas em todo o Brasil, com implantação remota e presencial.',
          },
        ]}
      />
      <Cta {...defaultCta} />
    </>
  )
}
