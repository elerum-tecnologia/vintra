import { Plug, Zap, ShieldCheck } from 'lucide-react'
import type { Feature } from '@/components/fragments/feature-grid'
import type { BlogPost } from '@/components/fragments/blog-list'
import type { TeamMember } from '@/components/fragments/team'
import type { PricingPlan } from '@/components/fragments/pricing'
import type { CtaProps } from '@/components/fragments/cta'
import type { ContactProps } from '@/components/fragments/contact'
import type { ArticleAuthor } from '@/components/fragments/article-header'
import type { ArticleBlock } from '@/components/fragments/article-body'

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
    slug: 'sinais-de-que-sua-operacao-precisa-de-automacao',
    image: { src: '/images/blog-automation.png', alt: 'Ilustração de automação de processos' },
    category: 'Produtividade',
    title: '5 sinais de que sua operação precisa de automação',
    excerpt:
      'Retrabalho, planilhas paralelas e prazos estourados: reconheça os sintomas antes que virem gargalo.',
    href: '/recursos/blog/sinais-de-que-sua-operacao-precisa-de-automacao',
  },
  {
    slug: 'como-reduzir-retrabalho-entre-times-com-integracoes',
    image: { src: '/images/blog-integrations.png', alt: 'Ilustração de integrações entre sistemas' },
    category: 'Integrações',
    title: 'Como reduzir retrabalho entre times com integrações',
    excerpt:
      'Quando os sistemas conversam, os times param de digitar o mesmo dado duas vezes. Veja por onde começar.',
    href: '/recursos/blog/como-reduzir-retrabalho-entre-times-com-integracoes',
  },
  {
    slug: 'seguranca-de-dados-o-que-revisar-em-2026',
    image: { src: '/images/blog-security.png', alt: 'Ilustração de segurança de dados' },
    category: 'Segurança',
    title: 'Segurança de dados: o que toda empresa deveria revisar em 2026',
    excerpt:
      'Controle de acesso, auditoria e criptografia: um checklist prático para proteger a operação digital.',
    href: '/recursos/blog/seguranca-de-dados-o-que-revisar-em-2026',
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

const authors: Record<string, ArticleAuthor> = {
  camila: {
    name: 'Camila Duarte',
    role: 'Head de Produto',
    image: { src: '/images/team-camila.png', alt: 'Retrato de Camila Duarte' },
  },
  bruno: {
    name: 'Bruno Salgado',
    role: 'Diretor de tecnologia (CTO)',
    image: { src: '/images/team-bruno.png', alt: 'Retrato de Bruno Salgado' },
  },
  marina: {
    name: 'Marina Ferraz',
    role: 'Diretora-executiva (CEO)',
    image: { src: '/images/team-marina.png', alt: 'Retrato de Marina Ferraz' },
  },
}

export type Article = BlogPost & {
  author: ArticleAuthor
  date: string
  readTime: string
  blocks: ArticleBlock[]
}

export const articles: Record<string, Article> = {
  'sinais-de-que-sua-operacao-precisa-de-automacao': {
    ...defaultBlogPosts[0],
    author: authors.camila,
    date: '12 de março de 2026',
    readTime: '6 min de leitura',
    blocks: [
      {
        type: 'paragraph',
        text: 'Toda operação que cresce acumula processos manuais pelo caminho. No começo, uma planilha resolve; com o tempo, ela vira o sistema oficial que ninguém assume. O problema raramente aparece de uma vez — ele se instala em pequenos atritos diários que só viram crise quando um pedido se perde ou um prazo estoura.',
      },
      {
        type: 'paragraph',
        text: 'A boa notícia é que os sinais são previsíveis. Se você reconhecer os padrões abaixo, provavelmente já passou da hora de automatizar parte do fluxo.',
      },
      { type: 'heading', text: '1. O mesmo dado é digitado mais de uma vez' },
      {
        type: 'paragraph',
        text: 'Quando um pedido precisa ser recadastrado no ERP, depois no financeiro e de novo na planilha de acompanhamento, cada nova digitação é uma oportunidade de erro. A automação elimina a redundância conectando os sistemas na origem do dado.',
      },
      { type: 'heading', text: '2. Ninguém sabe o status sem perguntar' },
      {
        type: 'paragraph',
        text: 'Se responder "em que pé está o pedido X?" exige abrir três ferramentas e mandar duas mensagens, a operação está gastando tempo só para se manter informada. Fluxos automatizados tornam o status visível e atualizado em tempo real.',
      },
      { type: 'heading', text: '3. Os sinais em uma lista' },
      {
        type: 'list',
        items: [
          'Retrabalho constante para corrigir dados divergentes entre sistemas.',
          'Planilhas paralelas que viraram a fonte de verdade não oficial.',
          'Aprovações que travam porque dependem de alguém específico responder.',
          'Relatórios que levam horas para serem montados manualmente.',
          'Erros recorrentes que sempre acontecem na mesma etapa do processo.',
        ],
      },
      {
        type: 'quote',
        text: 'Automação não é sobre substituir pessoas — é sobre devolver às pessoas o tempo que elas gastam sendo integradoras manuais de sistemas.',
        cite: 'Camila Duarte, Head de Produto da Vintra',
      },
      { type: 'heading', text: 'Por onde começar' },
      {
        type: 'paragraph',
        text: 'Você não precisa automatizar tudo de uma vez. Escolha o processo que mais consome tempo e é mais propenso a erro, mapeie as etapas e automatize apenas a parte repetitiva. Um ganho pequeno e visível cria confiança para os próximos passos.',
      },
      {
        type: 'paragraph',
        text: 'Na Vintra, esse mapeamento costuma levar poucos dias — e o primeiro fluxo automatizado normalmente entra em produção na primeira semana.',
      },
    ],
  },
  'como-reduzir-retrabalho-entre-times-com-integracoes': {
    ...defaultBlogPosts[1],
    author: authors.bruno,
    date: '28 de fevereiro de 2026',
    readTime: '7 min de leitura',
    blocks: [
      {
        type: 'paragraph',
        text: 'O retrabalho entre times quase nunca é culpa das pessoas. Ele nasce de sistemas que não conversam: o vendedor fecha no CRM, alguém recadastra no ERP, o financeiro confere numa planilha e o suporte não enxerga nada disso. Cada fronteira entre sistemas é uma fronteira onde o dado precisa ser copiado à mão.',
      },
      {
        type: 'paragraph',
        text: 'Integrar sistemas é, antes de tudo, decidir qual é a fonte de verdade de cada informação e fazer com que ela flua automaticamente para onde for necessária.',
      },
      { type: 'heading', text: 'Comece pelo dado, não pela ferramenta' },
      {
        type: 'paragraph',
        text: 'Antes de conectar qualquer API, mapeie quais dados cruzam as fronteiras dos times e com que frequência. Cliente, pedido e status costumam ser os três que mais causam retrabalho quando ficam dessincronizados.',
      },
      { type: 'heading', text: 'O que uma boa integração resolve' },
      {
        type: 'list',
        items: [
          'Elimina a redigitação: o dado é cadastrado uma vez e propagado automaticamente.',
          'Reduz divergências: todos os times leem a mesma informação atualizada.',
          'Acelera aprovações: os fluxos avançam sem esperar cópia manual entre sistemas.',
          'Cria rastreabilidade: cada mudança fica registrada com origem e horário.',
        ],
      },
      {
        type: 'quote',
        text: 'Quando os sistemas conversam, os times param de digitar o mesmo dado duas vezes — e passam a confiar no que veem na tela.',
        cite: 'Bruno Salgado, CTO da Vintra',
      },
      { type: 'heading', text: 'Integração não precisa ser um projeto de meses' },
      {
        type: 'paragraph',
        text: 'Conectores prontos para ERPs, CRMs e sistemas legados encurtam o caminho drasticamente. Em vez de desenvolver do zero, a operação configura o mapeamento de campos e valida o fluxo com dados reais antes de colocar em produção.',
      },
      {
        type: 'paragraph',
        text: 'O resultado prático é medido em horas devolvidas por semana — tempo que os times deixam de gastar copiando dados e passam a usar no que realmente importa.',
      },
    ],
  },
  'seguranca-de-dados-o-que-revisar-em-2026': {
    ...defaultBlogPosts[2],
    author: authors.marina,
    date: '15 de janeiro de 2026',
    readTime: '8 min de leitura',
    blocks: [
      {
        type: 'paragraph',
        text: 'Segurança de dados deixou de ser um assunto exclusivo da equipe de TI. Com a operação inteira apoiada em sistemas digitais, um controle de acesso mal configurado ou uma trilha de auditoria inexistente podem custar caro — em multas, em confiança e em tempo de resposta a incidentes.',
      },
      {
        type: 'paragraph',
        text: 'Não é preciso reinventar a política de segurança todo ano. Mas vale revisar, com regularidade, alguns pontos que costumam ficar desatualizados à medida que a empresa cresce.',
      },
      { type: 'heading', text: 'Controle de acesso: quem pode ver o quê' },
      {
        type: 'paragraph',
        text: 'Acessos concedidos "temporariamente" tendem a virar permanentes. Revise periodicamente quem tem acesso a quais dados e aplique o princípio do menor privilégio: cada pessoa acessa apenas o necessário para o seu trabalho.',
      },
      { type: 'heading', text: 'O checklist essencial' },
      {
        type: 'list',
        items: [
          'Acesso baseado em papéis, revisado a cada trimestre.',
          'Autenticação em duas etapas obrigatória para dados sensíveis.',
          'Criptografia de ponta a ponta, em trânsito e em repouso.',
          'Trilhas de auditoria completas e imutáveis de cada alteração.',
          'Plano de resposta a incidentes testado, não apenas documentado.',
        ],
      },
      {
        type: 'quote',
        text: 'A pergunta não é se um incidente vai acontecer, mas quão rápido você consegue detectar, conter e explicar o que aconteceu.',
        cite: 'Marina Ferraz, CEO da Vintra',
      },
      { type: 'heading', text: 'Auditoria é o que transforma dado em confiança' },
      {
        type: 'paragraph',
        text: 'Registrar cada acesso e cada alteração pode parecer burocrático, mas é exatamente isso que permite responder com precisão quando algo dá errado — e comprovar conformidade quando um cliente ou órgão regulador pergunta.',
      },
      {
        type: 'paragraph',
        text: 'Plataformas que já nascem com criptografia, controle granular e auditoria embutidos poupam a operação de montar essa camada peça por peça. É segurança por padrão, não por esforço.',
      },
    ],
  },
}
