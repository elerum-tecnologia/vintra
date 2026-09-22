export type NavChild = { label: string; href: string }
export type NavItem = { label: string; href: string; children?: NavChild[] }

export const siteName = 'Vintra'
export const siteTagline = 'Construindo experiências digitais melhores.'

export const mainNav: NavItem[] = [
  {
    label: 'Produtos',
    href: '/produtos',
    children: [
      { label: 'Plataforma Vintra', href: '/produtos/plataforma' },
      { label: 'Integrações', href: '/produtos/integracoes' },
      { label: 'Preços', href: '/produtos/precos' },
    ],
  },
  {
    label: 'Soluções',
    href: '/solucoes',
    children: [
      { label: 'Varejo', href: '/solucoes/varejo' },
      { label: 'Indústria', href: '/solucoes/industria' },
      { label: 'Serviços financeiros', href: '/solucoes/servicos-financeiros' },
    ],
  },
  {
    label: 'Sobre',
    href: '/sobre',
    children: [
      { label: 'Nossa história', href: '/sobre/historia' },
      { label: 'Equipe', href: '/sobre/equipe' },
      { label: 'Carreiras', href: '/sobre/carreiras' },
    ],
  },
  {
    label: 'Recursos',
    href: '/recursos',
    children: [
      { label: 'Blog', href: '/recursos/blog' },
      { label: 'Central de ajuda', href: '/recursos/ajuda' },
      { label: 'Documentação', href: '/recursos/documentacao' },
    ],
  },
  { label: 'Contato', href: '/contato' },
]
