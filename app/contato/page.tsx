import type { Metadata } from 'next'
import { Hero } from '@/components/fragments/hero'
import { Contact } from '@/components/fragments/contact'
import { contactInfo } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com a Vintra. Nosso time responde em até um dia útil e ajuda a encaixar a plataforma no seu processo.',
}

export default function ContatoPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Contato"
        title="Fale com a Vintra"
        description="Conte sobre sua operação e mostramos, na prática, como podemos ajudar. Sem compromisso."
      />
      <Contact {...contactInfo} />
    </>
  )
}
