import type { Metadata } from 'next'
import { Hero } from '@/components/fragments/hero'
import { TextBlock } from '@/components/fragments/text-block'
import { Team } from '@/components/fragments/team'
import { Cta } from '@/components/fragments/cta'
import { teamMembers, defaultCta } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça a Vintra: a história, a equipe e o propósito de unificar a operação digital das empresas.',
}

export default function SobrePage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Sobre a Vintra"
        title="Gente que odeia retrabalho tanto quanto você"
        description="Somos um time de produto, engenharia e operações obcecado por transformar processos truncados em fluxos simples e confiáveis."
        primary={{ label: 'Conheça nossas vagas', href: '/sobre/carreiras' }}
        secondary={{ label: 'Nossa história', href: '/sobre/historia' }}
      />
      <TextBlock
        eyebrow="Quem somos"
        title="Nascemos de um problema real"
        paragraphs={[
          'A Vintra começou quando nossos fundadores, vindos de áreas de operações e tecnologia, cansaram de ver bons times perdendo tempo com sistemas que não conversavam.',
          'Decidimos construir a plataforma que gostaríamos de ter usado: uma base única que conecta ferramentas, automatiza o repetitivo e devolve às pessoas o tempo para o que realmente importa.',
        ]}
        image={{
          src: '/images/collaboration.png',
          alt: 'Equipe da Vintra colaborando',
        }}
        imagePosition="right"
      />
      <Team
        eyebrow="Liderança"
        title="Quem lidera a Vintra"
        intro="Um time com experiência em produto, engenharia e operação, próximo de cada cliente."
        members={teamMembers}
        background="muted"
      />
      <Cta {...defaultCta} />
    </>
  )
}
