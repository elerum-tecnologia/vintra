import type { Metadata } from 'next'
import { AuthForm } from '@/components/fragments/auth-form'

export const metadata: Metadata = {
  title: 'Esqueci minha senha',
  description: 'Recupere o acesso à sua conta Vintra.',
}

export default function EsqueciSenhaPage() {
  return (
    <AuthForm
      title="Recuperar acesso"
      description="Informe seu e-mail e enviaremos um link para redefinir a senha."
      fields={[
        {
          name: 'email',
          label: 'E-mail',
          type: 'email',
          autoComplete: 'email',
          placeholder: 'voce@empresa.com.br',
        },
      ]}
      submitLabel="Enviar link de recuperação"
      successMessage="Se este e-mail estiver cadastrado, você receberá um link para redefinir a senha."
      footerLinks={[
        { prefix: 'Lembrou a senha?', label: 'Voltar para entrar', href: '/entrar' },
      ]}
    />
  )
}
