import type { Metadata } from 'next'
import { AuthForm } from '@/components/fragments/auth-form'

export const metadata: Metadata = {
  title: 'Entrar',
  description: 'Acesse sua conta Vintra.',
}

export default function EntrarPage() {
  return (
    <AuthForm
      title="Entrar na Vintra"
      description="Acesse o painel da sua operação."
      fields={[
        {
          name: 'email',
          label: 'E-mail',
          type: 'email',
          autoComplete: 'email',
          placeholder: 'voce@empresa.com.br',
        },
        {
          name: 'password',
          label: 'Senha',
          type: 'password',
          autoComplete: 'current-password',
          placeholder: '••••••••',
        },
      ]}
      submitLabel="Entrar"
      successMessage="Login enviado! Em uma aplicação real, você seria redirecionado ao painel."
      footerLinks={[
        { prefix: 'Esqueceu a senha?', label: 'Recuperar acesso', href: '/esqueci-senha' },
        { prefix: 'Ainda não tem conta?', label: 'Criar conta', href: '/criar-conta' },
      ]}
    />
  )
}
