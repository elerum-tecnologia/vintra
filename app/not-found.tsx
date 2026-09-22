import { Hero } from '@/components/fragments/hero'

export default function NotFound() {
  return (
    <Hero
      size="lg"
      eyebrow="Erro 404"
      title="Página não encontrada"
      description="O endereço que você tentou acessar não existe ou foi movido. Vamos te levar de volta ao caminho certo."
      primary={{ label: 'Voltar ao início', href: '/' }}
      secondary={{ label: 'Falar com a Vintra', href: '/contato' }}
    />
  )
}
