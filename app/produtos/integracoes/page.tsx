import type { Metadata } from 'next'
import { Plug, Boxes, Cpu } from 'lucide-react'
import { Hero } from '@/components/fragments/hero'
import { TextBlock } from '@/components/fragments/text-block'
import { FeatureGrid } from '@/components/fragments/feature-grid'
import { Cta } from '@/components/fragments/cta'
import { defaultCta } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Integrações',
  description:
    'Conecte ERPs, CRMs e sistemas legados à Vintra com conectores prontos e uma API aberta — sem escrever código.',
}

export default function IntegracoesPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Integrações"
        title="Seus sistemas, finalmente conversando"
        description="Conectores prontos para as ferramentas que sua empresa já usa, mais uma API aberta para o que for específico do seu negócio."
        primary={{ label: 'Falar com um especialista', href: '/contato' }}
        secondary={{ label: 'Ver documentação', href: '/recursos/documentacao' }}
      />
      <TextBlock
        eyebrow="Conectividade"
        title="Do legado ao SaaS mais novo, tudo integrado"
        paragraphs={[
          'A Vintra fala a língua dos sistemas que sustentam sua operação: ERPs como SAP e TOTVS, CRMs como Salesforce e HubSpot, gateways de pagamento, e-commerce e bancos de dados internos.',
          'Quando não existe um conector pronto, sua equipe usa nossa API aberta e webhooks para criar a ponte — com mapeamento de campos assistido e sincronização em tempo real ou agendada.',
        ]}
        image={{
          src: '/images/blog-integrations.png',
          alt: 'Diagrama de integrações da Vintra',
        }}
        imagePosition="left"
      />
      <FeatureGrid
        eyebrow="Por dentro"
        title="Integração sem projeto interminável"
        features={[
          {
            icon: Plug,
            title: 'Conectores prontos',
            description:
              'Dezenas de integrações homologadas para ERPs, CRMs e ferramentas de mercado, ativadas em poucos cliques.',
          },
          {
            icon: Boxes,
            title: 'Mapeamento assistido',
            description:
              'Relacione campos entre sistemas com sugestões automáticas e regras de transformação sem código.',
          },
          {
            icon: Cpu,
            title: 'API aberta e webhooks',
            description:
              'Estenda a plataforma para sistemas proprietários com uma API REST documentada e eventos em tempo real.',
          },
        ]}
      />
      <Cta {...defaultCta} />
    </>
  )
}
