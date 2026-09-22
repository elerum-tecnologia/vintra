import type { Metadata } from 'next'
import { Rocket, Plug, Workflow, ShieldCheck, CreditCard, Users } from 'lucide-react'
import { Hero } from '@/components/fragments/hero'
import { FeatureGrid } from '@/components/fragments/feature-grid'
import { Faq } from '@/components/fragments/faq'
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
      <Faq
        eyebrow="Perguntas frequentes"
        title="Dúvidas rápidas"
        description="As respostas que mais aparecem nos nossos chamados, reunidas em um só lugar."
        items={[
          {
            question: 'Quanto tempo leva para colocar a primeira automação no ar?',
            answer:
              'Na maioria dos casos, o primeiro fluxo entra em produção já na primeira semana. O mapeamento do processo costuma levar poucos dias e você não precisa automatizar tudo de uma vez — começamos pela etapa que mais consome tempo.',
          },
          {
            question: 'A Vintra se conecta com o ERP e o CRM que já usamos?',
            answer:
              'Sim. Oferecemos conectores prontos para os principais ERPs, CRMs e sistemas legados, além de uma API aberta. A configuração é feita por mapeamento de campos, sem precisar desenvolver a integração do zero.',
          },
          {
            question: 'Como funciona o controle de acesso dos usuários?',
            answer:
              'O acesso é baseado em papéis, com permissões granulares e trilhas de auditoria de cada alteração. Você define quem pode ver e editar cada informação seguindo o princípio do menor privilégio.',
          },
          {
            question: 'Preciso de equipe técnica para operar a plataforma?',
            answer:
              'Não. O editor de fluxos é visual e pensado para times de operação. Para casos mais avançados, a API e a documentação técnica ficam à disposição de quem quiser ir além.',
          },
          {
            question: 'Consigo alterar meu plano depois de contratar?',
            answer:
              'Sim, você pode subir ou descer de plano a qualquer momento pela própria plataforma. As mudanças são refletidas na próxima fatura e você acessa notas fiscais e faturas diretamente na área de cobrança.',
          },
          {
            question: 'Como falo com o suporte se precisar de ajuda?',
            answer:
              'Você pode abrir um chamado a qualquer momento pela Central de ajuda. Nosso time responde em até um dia útil e ajuda a destravar a operação sempre que necessário.',
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
