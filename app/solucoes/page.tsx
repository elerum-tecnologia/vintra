import type { Metadata } from 'next'
import { Store, Factory, Landmark } from 'lucide-react'
import { Hero } from '@/components/fragments/hero'
import { TextBlock } from '@/components/fragments/text-block'
import { FeatureGrid } from '@/components/fragments/feature-grid'
import { Cta } from '@/components/fragments/cta'
import { defaultCta } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Soluções',
  description:
    'A Vintra se adapta ao seu setor: varejo, indústria e serviços financeiros contam com fluxos e integrações sob medida.',
}

export default function SolucoesPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Soluções"
        title="Feita para o seu setor, não para todos"
        description="Cada operação tem seus gargalos. Configuramos a Vintra com fluxos e integrações que fazem sentido para a realidade do seu mercado."
        primary={{ label: 'Fale com um especialista', href: '/contato' }}
        secondary={{ label: 'Ver a plataforma', href: '/produtos/plataforma' }}
      />
      <TextBlock
        eyebrow="Sob medida"
        title="A mesma base, adaptada à sua realidade"
        paragraphs={[
          'A tecnologia é a mesma, mas os desafios não. Um varejo precisa unir loja física e e-commerce; uma indústria precisa conectar chão de fábrica e planejamento; uma instituição financeira precisa de controles rígidos de conformidade.',
          'Nossos especialistas configuram a Vintra a partir de modelos prontos para cada setor, encurtando a implantação e trazendo boas práticas já testadas em operações semelhantes.',
        ]}
        image={{
          src: '/images/collaboration.png',
          alt: 'Especialistas Vintra configurando soluções por setor',
        }}
        imagePosition="right"
      />
      <FeatureGrid
        eyebrow="Setores"
        title="Onde a Vintra já faz a diferença"
        features={[
          {
            icon: Store,
            title: 'Varejo',
            description:
              'Unifique estoque, PDV e e-commerce para vender em todos os canais sem ruptura nem retrabalho.',
          },
          {
            icon: Factory,
            title: 'Indústria',
            description:
              'Conecte produção, suprimentos e vendas para planejar com dados reais e reduzir paradas.',
          },
          {
            icon: Landmark,
            title: 'Serviços financeiros',
            description:
              'Automatize processos com trilhas de auditoria e controles que atendem às exigências regulatórias.',
          },
        ]}
      />
      <Cta {...defaultCta} />
    </>
  )
}
