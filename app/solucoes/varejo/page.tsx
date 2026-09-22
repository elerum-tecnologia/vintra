import type { Metadata } from 'next'
import { Store, RefreshCw, TrendingUp } from 'lucide-react'
import { Hero } from '@/components/fragments/hero'
import { TextBlock } from '@/components/fragments/text-block'
import { FeatureGrid } from '@/components/fragments/feature-grid'
import { Cta } from '@/components/fragments/cta'
import { defaultCta } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Vintra para Varejo',
  description:
    'Unifique loja física, e-commerce e estoque com a Vintra e venda em todos os canais sem ruptura.',
}

export default function VarejoPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Soluções · Varejo"
        title="Omnicanal de verdade, sem ruptura de estoque"
        description="Uma visão única de estoque, pedidos e clientes entre loja física, e-commerce e marketplaces — para vender mais sem prometer o que não tem."
        primary={{ label: 'Falar com um especialista', href: '/contato' }}
        secondary={{ label: 'Ver preços', href: '/produtos/precos' }}
      />
      <TextBlock
        eyebrow="O desafio do varejo"
        title="Quando os canais não se falam, o cliente sente"
        paragraphs={[
          'Estoque duplicado, pedidos parados entre sistemas e promessas de entrega que não se cumprem: o varejo perde vendas quando loja e e-commerce operam em silos.',
          'A Vintra sincroniza estoque, catálogo e pedidos em tempo real entre PDV, plataforma de e-commerce e ERP, para que cada canal enxergue a mesma realidade — e o cliente tenha a mesma experiência em todos eles.',
        ]}
        image={{
          src: '/images/blog-integrations.png',
          alt: 'Integração de canais de varejo na Vintra',
        }}
        imagePosition="left"
      />
      <FeatureGrid
        eyebrow="Para o varejo"
        title="Do estoque à recompra, tudo conectado"
        features={[
          {
            icon: RefreshCw,
            title: 'Estoque unificado',
            description:
              'Sincronize disponibilidade entre lojas, centros de distribuição e canais online em tempo real.',
          },
          {
            icon: Store,
            title: 'Pedidos omnicanal',
            description:
              'Compre online e retire na loja, envie da loja mais próxima e devolva em qualquer ponto, sem retrabalho.',
          },
          {
            icon: TrendingUp,
            title: 'Visão de cliente 360º',
            description:
              'Reúna histórico de compras de todos os canais para campanhas e recompra mais assertivas.',
          },
        ]}
      />
      <Cta {...defaultCta} />
    </>
  )
}
