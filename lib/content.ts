import { Plug, Zap, ShieldCheck } from 'lucide-react'
import type { Feature } from '@/components/fragments/feature-grid'
import type { BlogPost } from '@/components/fragments/blog-list'
import type { TeamMember } from '@/components/fragments/team'
import type { PricingPlan } from '@/components/fragments/pricing'
import type { CtaProps } from '@/components/fragments/cta'
import type { ContactProps } from '@/components/fragments/contact'

export const defaultFeatures: Feature[] = [
  {
    icon: Plug,
    title: 'Integrações prontas',
    description:
      'Conecte-se a ERPs, CRMs e sistemas legados sem escrever uma linha de código.',
  },
  {
    icon: Zap,
    title: 'Automação de processos',
    description:
      'Elimine tarefas manuais repetitivas com fluxos configuráveis pela própria equipe de negócio.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança de nível empresarial',
    description:
      'Criptografia de ponta a ponta, controle de acesso granular e trilhas de auditoria completas.',
  },
]

export const defaultBlogPosts: BlogPost[] = [
  {
    image: { src: '/images/blog-automation.png', alt: 'Ilustração de automação de processos' },
    category: 'Produtividade',
    title: '5 sinais de que sua operação precisa de automação',
    excerpt:
      'Retrabalho, planilhas paralelas e prazos estourados: reconheça os sintomas antes que virem gargalo.',
    href: '/recursos/blog',
  },
  {
    image: { src: '/images/blog-integrations.png', alt: 'Ilustração de integrações entre sistemas' },
    category: 'Integrações',
    title: 'Como reduzir retrabalho entre times com integrações',
    excerpt:
      'Quando os sistemas conversam, os times param de digitar o mesmo dado duas vezes. Veja por onde começar.',
    href: '/recursos/blog',
  },
  {
    image: { src: '/images/blog-security.png', alt: 'Ilustração de segurança de dados' },
    category: 'Segurança',
    title: 'Segurança de dados: o que toda empresa deveria revisar em 2026',
    excerpt:
      'Controle de acesso, auditoria e criptografia: um checklist prático para proteger a operação digital.',
    href: '/recursos/blog',
  },
]

export const teamMembers: TeamMember[] = [
  {
    name: 'Marina Ferraz',
    role: 'Diretora-executiva (CEO)',
    image: { src: '/images/team-marina.png', alt: 'Retrato de Marina Ferraz' },
  },
  {
    name: 'Bruno Salgado',
    role: 'Diretor de tecnologia (CTO)',
    image: { src: '/images/team-bruno.png', alt: 'Retrato de Bruno Salgado' },
  },
  {
    name: 'Camila Duarte',
    role: 'Head de Produto',
    image: { src: '/images/team-camila.png', alt: 'Retrato de Camila Duarte' },
  },
  {
    name: 'Rafael Nogueira',
    role: 'Head de Vendas',
    image: { src: '/images/team-rafael.png', alt: 'Retrato de Rafael Nogueira' },
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Essencial',
    price: 'R$ 490',
    period: '/mês',
    description: 'Para times pequenos que estão organizando os primeiros processos.',
    features: ['Até 10 usuários', 'Integrações básicas', 'Suporte por e-mail'],
    cta: { label: 'Começar agora', href: '/criar-conta' },
  },
  {
    name: 'Profissional',
    price: 'R$ 1.290',
    period: '/mês',
    description: 'Para operações em crescimento que precisam de automação.',
    features: [
      'Até 50 usuários',
      'Todas as integrações',
      'Automações ilimitadas',
      'Suporte prioritário',
    ],
    cta: { label: 'Começar agora', href: '/criar-conta' },
    highlighted: true,
    badge: 'Mais popular',
  },
  {
    name: 'Empresarial',
    price: 'Sob consulta',
    description:
      'Para operações complexas, com necessidades específicas de segurança e escala.',
    features: [
      'Usuários ilimitados',
      'Implantação dedicada',
      'Gerente de conta exclusivo',
      'SLA personalizado',
    ],
    cta: { label: 'Falar com vendas', href: '/contato' },
  },
]

export const contactInfo: ContactProps = {
  title: 'Vamos conversar',
  description:
    'Conte sobre sua operação e mostraremos como a Vintra se encaixa no seu processo, sem compromisso.',
  email: 'contato@vintra.com.br',
  phone: '(11) 4000-2020',
  address: 'Av. Paulista, 1200 — São Paulo, SP',
}

export const defaultCta: CtaProps = {
  title: 'Pronto para simplificar sua operação?',
  description:
    'Fale com nosso time e veja como a Vintra se encaixa no seu processo, sem compromisso.',
  button: { label: 'Agendar uma demonstração', href: '/contato' },
}
