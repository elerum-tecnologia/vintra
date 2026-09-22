import type { Metadata } from 'next'
import { AuthForm } from '@/components/fragments/auth-form'

export const metadata: Metadata = {
  title: 'Criar conta',
  description: 'Crie sua conta na Vintra e comece a unificar sua operação.',
}

export default function CriarContaPage() {
  return (
    <AuthForm
      title="Criar conta"
      description="Comece a unificar sua operação em minutos."
      fields={[
        {
          name: 'name',
          label: 'Nome completo',
          type: 'text',
          autoComplete: 'name',
          placeholder: 'Seu nome',
        },
        {
          name: 'company',
          label: 'Empresa',
          type: 'text',
          autoComplete: 'organization',
          placeholder: 'Nome da empresa',
        },
        {
          name: 'email',
          label: 'E-mail corporativo',
          type: 'email',
          autoComplete: 'email',
          placeholder: 'voce@empresa.com.br',
        },
        {
          name: 'password',
          label: 'Senha',
          type: 'password',
          autoComplete: 'new-password',
          placeholder: '••••••••',
        },
      ]}
      submitLabel="Criar conta"
      successMessage="Conta criada! Em uma aplicação real, você começaria o onboarding agora."
      footerLinks={[
        { prefix: 'Já tem conta?', label: 'Entrar', href: '/entrar' },
      ]}
    />
  )
}
