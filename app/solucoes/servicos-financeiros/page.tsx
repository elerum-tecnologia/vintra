import type { Metadata } from 'next'
import { ShieldCheck, Lock, Workflow } from 'lucide-react'
import { Hero } from '@/components/fragments/hero'
import { TextBlock } from '@/components/fragments/text-block'
import { FeatureGrid } from '@/components/fragments/feature-grid'
import { Cta } from '@/components/fragments/cta'
import { defaultCta } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Vintra para Serviços financeiros',
  description:
    'Automatize processos com trilhas de auditoria e controles de conformidade exigidos pelo setor financeiro.',
}

export default function ServicosFinanceirosPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Soluções · Serviços financeiros"
        title="Automação com a conformidade que o setor exige"
        description="Acelere processos sensíveis mantendo trilhas de auditoria completas, controle de acesso granular e governança de ponta a ponta."
        primary={{ label: 'Falar com um especialista', href: '/contato' }}
        secondary={{ label: 'Ver segurança', href: '/produtos/plataforma' }}
      />
      <TextBlock
        eyebrow="O desafio financeiro"
        title="Velocidade sem abrir mão do controle"
        paragraphs={[
          'No setor financeiro, agilizar um processo não pode significar perder rastreabilidade. Cada etapa precisa de registro, cada acesso precisa de justificativa e cada mudança precisa ser auditável.',
          'A Vintra permite automatizar onboarding, análise e conciliação com regras claras, mantendo trilha de auditoria completa e segregação de funções — para que compliance e operação avancem juntos.',
        ]}
        image={{
          src: '/images/blog-security.png',
          alt: 'Controles de segurança e conformidade da Vintra',
        }}
        imagePosition="left"
      />
      <FeatureGrid
        eyebrow="Para o financeiro"
        title="Conformidade embutida no processo"
        features={[
          {
            icon: ShieldCheck,
            title: 'Trilhas de auditoria',
            description:
              'Todo evento fica registrado com autor, data e contexto, pronto para auditorias internas e externas.',
          },
          {
            icon: Lock,
            title: 'Controle de acesso granular',
            description:
              'Defina permissões por papel e segregação de funções para reduzir risco operacional e fraude.',
          },
          {
            icon: Workflow,
            title: 'Processos com aprovação',
            description:
              'Automatize onboarding, KYC e conciliações com etapas de aprovação e alçadas configuráveis.',
          },
        ]}
      />
      <Cta {...defaultCta} />
    </>
  )
}
