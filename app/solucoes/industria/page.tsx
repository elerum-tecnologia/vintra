import type { Metadata } from 'next'
import { Factory, Boxes, Gauge } from 'lucide-react'
import { Hero } from '@/components/fragments/hero'
import { TextBlock } from '@/components/fragments/text-block'
import { FeatureGrid } from '@/components/fragments/feature-grid'
import { Cta } from '@/components/fragments/cta'
import { defaultCta } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Vintra para Indústria',
  description:
    'Conecte chão de fábrica, suprimentos e vendas com a Vintra para planejar com dados reais e reduzir paradas.',
}

export default function IndustriaPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Soluções · Indústria"
        title="Do chão de fábrica ao planejamento, sem ruído"
        description="Integre produção, suprimentos e comercial numa única base de dados e antecipe gargalos antes que eles parem a linha."
        primary={{ label: 'Falar com um especialista', href: '/contato' }}
        secondary={{ label: 'Ver a plataforma', href: '/produtos/plataforma' }}
      />
      <TextBlock
        eyebrow="O desafio da indústria"
        title="Decisões atrasadas custam produção"
        paragraphs={[
          'Quando o planejamento trabalha com dados de ontem, cada imprevisto vira parada de linha, hora extra ou pedido atrasado. O problema raramente é falta de dado — é dado preso em sistemas que não conversam.',
          'A Vintra conecta MES, ERP e ferramentas de suprimentos para dar visibilidade de ponta a ponta: da ordem de produção à entrega, com alertas automáticos quando algum indicador sai da meta.',
        ]}
        image={{
          src: '/images/hero-dashboard.png',
          alt: 'Painel industrial da Vintra',
        }}
        imagePosition="right"
      />
      <FeatureGrid
        eyebrow="Para a indústria"
        title="Planejamento com dados de agora"
        features={[
          {
            icon: Factory,
            title: 'Produção conectada',
            description:
              'Integre apontamentos de chão de fábrica ao planejamento para acompanhar a execução em tempo real.',
          },
          {
            icon: Boxes,
            title: 'Suprimentos sincronizados',
            description:
              'Antecipe rupturas de insumos com estoque e compras conversando diretamente com a demanda.',
          },
          {
            icon: Gauge,
            title: 'Indicadores de OEE',
            description:
              'Monitore eficiência, paradas e refugo em painéis que consolidam dados de múltiplas plantas.',
          },
        ]}
      />
      <Cta {...defaultCta} />
    </>
  )
}
