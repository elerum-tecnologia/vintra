import type { Metadata } from 'next'
import { Workflow, ChartColumn, ShieldCheck } from 'lucide-react'
import { Hero } from '@/components/fragments/hero'
import { TextBlock } from '@/components/fragments/text-block'
import { FeatureGrid } from '@/components/fragments/feature-grid'
import { Cta } from '@/components/fragments/cta'
import { defaultCta } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Plataforma Vintra',
  description:
    'A Plataforma Vintra reúne dados, automações e integrações num ambiente único, com implantação guiada por especialistas.',
}

export default function PlataformaPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Plataforma Vintra"
        title="O centro de comando da sua operação"
        description="Orquestre pessoas, processos e sistemas a partir de um único ambiente, com a governança que áreas de risco e TI exigem."
        primary={{ label: 'Agendar demonstração', href: '/contato' }}
        secondary={{ label: 'Ver integrações', href: '/produtos/integracoes' }}
      />
      <TextBlock
        eyebrow="A plataforma"
        title="Menos ferramentas soltas, mais operação sob controle"
        paragraphs={[
          'Em vez de somar mais um sistema ao seu ecossistema, a Vintra funciona como a camada que amarra tudo: ela lê e escreve nos seus sistemas atuais e coordena o trabalho entre eles.',
          'Áreas de negócio configuram automações por uma interface visual, enquanto TI mantém o controle sobre acessos, versões e trilhas de auditoria. Cada mudança fica registrada e é reversível.',
        ]}
        image={{
          src: '/images/collaboration.png',
          alt: 'Equipe usando a plataforma Vintra',
        }}
        imagePosition="right"
      />
      <FeatureGrid
        eyebrow="Capacidades"
        title="Feita para escalar com sua operação"
        features={[
          {
            icon: Workflow,
            title: 'Orquestração de processos',
            description:
              'Modele fluxos ponta a ponta com etapas condicionais, aprovações e SLAs monitorados automaticamente.',
          },
          {
            icon: ChartColumn,
            title: 'Painéis operacionais',
            description:
              'Transforme dados de vários sistemas em indicadores acionáveis, atualizados em tempo real.',
          },
          {
            icon: ShieldCheck,
            title: 'Governança e auditoria',
            description:
              'Controle de acesso por papel, versionamento de fluxos e histórico completo de cada alteração.',
          },
        ]}
      />
      <Cta {...defaultCta} />
    </>
  )
}
