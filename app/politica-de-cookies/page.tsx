import type { Metadata } from 'next'
import { Hero } from '@/components/fragments/hero'
import { TextBlock } from '@/components/fragments/text-block'
import { Cta } from '@/components/fragments/cta'

export const metadata: Metadata = {
  title: 'Política de cookies',
  description:
    'Entenda como a Vintra utiliza cookies e tecnologias semelhantes e como você pode gerenciar suas preferências.',
}

export default function PoliticaDeCookiesPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Política de cookies"
        title="Como usamos cookies"
        description="Última atualização: janeiro de 2026. Esta página explica o que são cookies, como os utilizamos e quais são as suas escolhas."
      />
      <TextBlock
        title="O que são cookies"
        paragraphs={[
          'Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles ajudam o site a funcionar, a lembrar suas preferências e a entender como a plataforma é utilizada.',
          'Utilizamos também tecnologias semelhantes, como armazenamento local e pixels, para as mesmas finalidades descritas nesta política.',
        ]}
        imagePosition="none"
      />
      <TextBlock
        title="Como utilizamos cookies"
        background="muted"
        imagePosition="none"
        paragraphs={[
          'Cookies essenciais: necessários para o funcionamento do site, como autenticação e segurança. Sem eles, alguns recursos não funcionam corretamente.',
          'Cookies de desempenho: nos ajudam a entender como os visitantes usam o site, de forma agregada e anônima, para melhorar a experiência.',
          'Cookies de preferência: lembram suas escolhas, como idioma e tema, para personalizar a navegação.',
        ]}
      />
      <TextBlock
        title="Gerenciando suas preferências"
        imagePosition="none"
        paragraphs={[
          'Você pode gerenciar ou desabilitar cookies nas configurações do seu navegador. Note que desabilitar cookies essenciais pode afetar o funcionamento do site.',
          'Para dúvidas sobre esta política ou sobre o tratamento dos seus dados, entre em contato pelo e-mail contato@vintra.com.br.',
        ]}
      />
      <Cta
        title="Ficou com alguma dúvida?"
        description="Nosso time está à disposição para esclarecer como tratamos seus dados."
        button={{ label: 'Falar com a Vintra', href: '/contato' }}
      />
    </>
  )
}
