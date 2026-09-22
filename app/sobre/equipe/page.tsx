import type { Metadata } from 'next'
import { Hero } from '@/components/fragments/hero'
import { Team } from '@/components/fragments/team'
import { TextBlock } from '@/components/fragments/text-block'
import { Cta } from '@/components/fragments/cta'
import { teamMembers, defaultCta } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Equipe',
  description:
    'Conheça as pessoas que lideram a Vintra e a cultura que guia o nosso trabalho.',
}

export default function EquipePage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Equipe"
        title="As pessoas por trás da Vintra"
        description="Trazemos experiência de operações complexas para dentro do produto. Perto do cliente, longe do jargão."
        primary={{ label: 'Trabalhe conosco', href: '/sobre/carreiras' }}
      />
      <Team
        eyebrow="Liderança"
        title="Time de liderança"
        intro="Quem toma as decisões que moldam a plataforma e a experiência de cada cliente."
        members={teamMembers}
      />
      <TextBlock
        eyebrow="Nossa cultura"
        title="Como trabalhamos"
        paragraphs={[
          'Somos diretos e práticos: preferimos resolver o problema do cliente a discutir a solução perfeita no papel. Cada pessoa tem autonomia e responsabilidade sobre o que entrega.',
          'Valorizamos confiabilidade acima de tudo — no produto e nas relações. Quando dizemos que algo vai funcionar, funciona; quando erramos, corrigimos rápido e com transparência.',
        ]}
        background="muted"
        imagePosition="none"
      />
      <Cta {...defaultCta} />
    </>
  )
}
