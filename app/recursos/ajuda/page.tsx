import type { Metadata } from 'next'
import { Rocket, Plug, Workflow, ShieldCheck, CreditCard, Users } from 'lucide-react'
import { Hero } from '@/components/fragments/hero'
import { FeatureGrid } from '@/components/fragments/feature-grid'
import { Cta } from '@/components/fragments/cta'

export const metadata: Metadata = {
  title: 'Central de ajuda',
  description:
    'Encontre respostas rápidas e guias passo a passo para usar a Vintra no dia a dia.',
}

export default function AjudaPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Central de ajuda"
        title="Como podemos ajudar?"
        description="Guias diretos e respostas para as dúvidas mais comuns, organizados pelos temas que os times mais procuram."
        primary={{ label: 'Falar com o suporte', href: '/contato' }}
        secondary={{ label: 'Ver documentação', href: '/recursos/documentacao' }}
      />
      <FeatureGrid
        eyebrow="Categorias"
        title="Explore por tema"
        features={[
          {
            icon: Rocket,
            title: 'Primeiros passos',
            description:
              'Configure sua conta, convide o time e coloque sua primeira automação para rodar em minutos.',
          },
          {
            icon: Plug,
            title: 'Integrações',
            description:
              'Aprenda a conectar ERPs, CRMs e outras ferramentas e a mapear campos entre sistemas.',
          },
          {
            icon: Workflow,
            title: 'Automação de processos',
            description:
              'Monte fluxos com condições, aprovações e SLAs usando o editor visual da Vintra.',
          },
          {
            icon: ShieldCheck,
            title: 'Segurança e acessos',
            description:
              'Gerencie papéis, permissões e trilhas de auditoria para manter a operação sob controle.',
          },
          {
            icon: CreditCard,
            title: 'Planos e cobrança',
            description:
              'Entenda os planos, altere sua assinatura e acesse notas fiscais e faturas.',
          },
          {
            icon: Users,
            title: 'Conta e usuários',
            description:
              'Adicione e remova pessoas, configure grupos e defina políticas de acesso da sua empresa.',
          },
        ]}
      />
      <Cta
        title="Não encontrou o que procurava?"
        description="Nosso time de suporte responde em até um dia útil e ajuda a destravar sua operação."
        button={{ label: 'Abrir um chamado', href: '/contato' }}
      />
    </>
  )
}
