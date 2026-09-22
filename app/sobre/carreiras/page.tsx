import type { Metadata } from 'next'
import { HeartHandshake, Rocket, Globe } from 'lucide-react'
import { Hero } from '@/components/fragments/hero'
import { TextBlock } from '@/components/fragments/text-block'
import { FeatureGrid } from '@/components/fragments/feature-grid'
import { Cta } from '@/components/fragments/cta'

export const metadata: Metadata = {
  title: 'Carreiras',
  description:
    'Venha construir a Vintra. Conheça nossa cultura, benefícios e as vagas abertas para times de produto, engenharia e vendas.',
}

export default function CarreirasPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Carreiras"
        title="Construa a plataforma que simplifica operações"
        description="Buscamos pessoas curiosas e donas do que fazem, prontas para transformar processos complexos em experiências simples."
        primary={{ label: 'Falar com o time', href: '/contato' }}
        secondary={{ label: 'Conheça a equipe', href: '/sobre/equipe' }}
      />
      <TextBlock
        eyebrow="Trabalhar na Vintra"
        title="Autonomia de verdade, impacto visível"
        paragraphs={[
          'Aqui você não é mais uma engrenagem: cada pessoa acompanha o problema do cliente de ponta a ponta e vê o resultado do próprio trabalho na operação de quem usa a Vintra.',
          'Somos um time enxuto e remoto-first, com encontros presenciais em São Paulo. Priorizamos crescimento, feedback honesto e equilíbrio — porque quem cuida de operações que não param também precisa de tempo para recarregar.',
        ]}
        image={{
          src: '/images/collaboration.png',
          alt: 'Time da Vintra trabalhando',
        }}
        imagePosition="right"
      />
      <FeatureGrid
        eyebrow="Por que a Vintra"
        title="O que oferecemos"
        features={[
          {
            icon: Globe,
            title: 'Trabalho remoto-first',
            description:
              'Trabalhe de onde render melhor, com horário flexível e encontros presenciais que valem a viagem.',
          },
          {
            icon: Rocket,
            title: 'Crescimento acelerado',
            description:
              'Trilhas claras de evolução, orçamento de aprendizado e projetos que ampliam sua responsabilidade.',
          },
          {
            icon: HeartHandshake,
            title: 'Cuidado com pessoas',
            description:
              'Plano de saúde, apoio à saúde mental e uma cultura que respeita o seu tempo fora do trabalho.',
          },
        ]}
      />
      <Cta
        title="Não achou a vaga ideal?"
        description="Mande seu currículo mesmo assim. Estamos sempre de olho em gente boa para os próximos desafios."
        button={{ label: 'Enviar meu currículo', href: '/contato' }}
      />
    </>
  )
}
