import type { Metadata } from 'next'
import { Rocket, Code, Plug, Workflow, Lock, Boxes } from 'lucide-react'
import { Hero } from '@/components/fragments/hero'
import { TextBlock } from '@/components/fragments/text-block'
import { FeatureGrid } from '@/components/fragments/feature-grid'
import { Cta } from '@/components/fragments/cta'

export const metadata: Metadata = {
  title: 'Documentação',
  description:
    'Referência técnica da Vintra: guias de início rápido, API REST, webhooks, conectores e modelo de segurança.',
}

export default function DocumentacaoPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Documentação"
        title="Tudo que sua equipe técnica precisa"
        description="Referência completa da plataforma, da primeira chamada de API à automação mais avançada, com exemplos prontos para usar."
        primary={{ label: 'Começar agora', href: '/criar-conta' }}
        secondary={{ label: 'Falar com o time', href: '/contato' }}
      />
      <TextBlock
        eyebrow="Comece por aqui"
        title="Do zero à primeira integração"
        paragraphs={[
          'Nossa documentação foi feita para você entregar valor rápido: comece pelo guia de início rápido, autentique sua aplicação e faça a primeira chamada em poucos minutos.',
          'Cada endpoint traz exemplos em cURL e nas principais linguagens, além de payloads de referência e boas práticas de uso para produção.',
        ]}
        image={{
          src: '/images/blog-automation.png',
          alt: 'Documentação técnica da Vintra',
        }}
        imagePosition="left"
      />
      <FeatureGrid
        eyebrow="Referência"
        title="Navegue pela documentação"
        features={[
          {
            icon: Rocket,
            title: 'Início rápido',
            description:
              'Autenticação, primeiros conceitos e sua primeira automação funcionando em minutos.',
          },
          {
            icon: Code,
            title: 'API REST',
            description:
              'Referência completa de recursos, parâmetros e respostas, com exemplos em várias linguagens.',
          },
          {
            icon: Plug,
            title: 'Conectores',
            description:
              'Detalhes de cada integração pronta, campos suportados e limites de sincronização.',
          },
          {
            icon: Workflow,
            title: 'Automações',
            description:
              'Como modelar fluxos, usar variáveis, condições e disparar ações a partir de eventos.',
          },
          {
            icon: Boxes,
            title: 'Webhooks',
            description:
              'Receba eventos em tempo real, valide assinaturas e trate reentregas com segurança.',
          },
          {
            icon: Lock,
            title: 'Segurança',
            description:
              'Modelo de permissões, tokens, criptografia e recomendações para ambientes de produção.',
          },
        ]}
      />
      <Cta
        title="Precisa de apoio na implementação?"
        description="Nosso time de engenharia de soluções ajuda a acelerar a integração da sua equipe."
        button={{ label: 'Falar com um especialista', href: '/contato' }}
      />
    </>
  )
}
