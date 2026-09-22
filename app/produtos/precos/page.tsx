import type { Metadata } from 'next'
import { Hero } from '@/components/fragments/hero'
import { Pricing } from '@/components/fragments/pricing'
import { Cta } from '@/components/fragments/cta'
import { pricingPlans, defaultCta } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Preços',
  description:
    'Planos da Vintra para times de todos os tamanhos: Essencial, Profissional e Empresarial. Escolha o que acompanha sua operação.',
}

export default function PrecosPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Preços"
        title="Planos que acompanham o seu crescimento"
        description="Comece pequeno e evolua conforme sua operação amadurece. Sem taxas escondidas, com implantação orientada em todos os planos."
        primary={{ label: 'Falar com vendas', href: '/contato' }}
      />
      <Pricing
        title="Escolha o plano ideal para o seu time"
        intro="Todos os planos incluem integrações, automações e suporte. Você paga apenas pelo que a sua operação precisa."
        plans={pricingPlans}
      />
      <Cta {...defaultCta} />
    </>
  )
}
