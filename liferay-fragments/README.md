# Vintra — Fragmentos Liferay

Coleção de fragmentos que reproduz o site Vintra (projeto Next.js/v0 deste repositório), com a mesma identidade visual, pronta para montar as páginas no Liferay DXP (testado para **2026.q1**; funciona em 7.4+).

As rotas do Next.js não fazem parte da coleção: cada rota vira uma **página de conteúdo** no Liferay, montada com os fragmentos abaixo.

## Como importar

1. Gere o pacote: `./build.sh` → `dist/vintra-fragments.zip` (já versionado para uso direto).
2. No Liferay: **Construtor de Sites › Fragmentos › ⋮ › Importar** e envie o ZIP.
3. Em **Construtor de Sites › Modelos de Página › Páginas Mestras**, crie a mestra "Vintra" com:
   - **Vintra - Base (estilos globais)** — obrigatório, de preferência no topo;
   - **Vintra - Cabeçalho**;
   - a **Área de Soltura** (drop zone) do conteúdo;
   - **Vintra - Rodapé**.
4. Crie as páginas de conteúdo usando essa mestra e arraste os fragmentos.

> O fragmento **Base** carrega as fontes (Sora, Work Sans, IBM Plex Mono), os tokens de cor, os botões e o sprite de ícones. Sem ele na página, os demais fragmentos aparecem sem estilo e sem ícones. Por isso a pré-visualização isolada no editor de fragmentos também fica sem estilo, o que é esperado.

## Fragmentos

| Fragmento | Origem (React) | Editável | Configuração |
|---|---|---|---|
| Vintra - Base | `globals.css` | — | Modo de cor (claro/escuro/automático), cores da marca |
| Vintra - Cabeçalho | `site-header.tsx` | Logo, cada item/subitem do menu (texto + link), Entrar, Criar conta | Nº de itens (1–7), nº de subitens por item (0–6), logo símbolo ou imagem, sticky |
| Vintra - Rodapé | `site-footer.tsx` | Logo, frase, títulos e links das colunas, copyright, links inferiores | Nº de colunas/links, URLs das redes sociais (vazio oculta) |
| Vintra - Hero | `hero.tsx` | Selo, título, descrição, 2 botões, imagem | Grande (com imagem) ou Compacto (centralizado), mostrar/ocultar cada parte |
| Vintra - Grade de recursos | `feature-grid.tsx` | Eyebrow, título, intro, título/descrição de cada card | Nº de cards (1–9), ícone de cada card (31 opções), fundo |
| Vintra - Bloco de texto | `text-block.tsx` | Eyebrow, título, texto rico, imagem | Imagem à direita/esquerda/sem imagem, fundo, espaçamento |
| Vintra - Lista de artigos | `blog-list.tsx` | Cabeçalho + imagem/categoria/título/resumo/link de cada card | Nº de artigos (1–6), fundo |
| Vintra - Card de artigo | `blog-list.tsx` (card) | Imagem, categoria, título, resumo, link, todos mapeáveis | Mostrar categoria/resumo |
| Vintra - Chamada para ação | `cta.tsx` | Título, descrição, botão | Mostrar descrição |
| Vintra - Planos e preços | `pricing.tsx` | Nome, preço, período, descrição, itens (lista), botão, selo | Nº de planos (1–4), plano em destaque, fundo |
| Vintra - Equipe | `team.tsx` | Foto, nome, cargo | Nº de pessoas (1–12), fundo |
| Vintra - Perguntas frequentes | `faq.tsx` | Pergunta (texto) e resposta (texto rico) | Nº de perguntas (1–12), 1ª aberta, fundo |
| Vintra - Contato | `contact.tsx` | Textos, e-mail/telefone (links), endereço, rótulos, botão, mensagens | Endpoint de envio, nomes dos campos, placeholders |
| Vintra - Formulário de acesso | `auth-form.tsx` | Título, rótulos, botão, mensagem de sucesso, links do rodapé | Quais campos exibir, tipo de senha, placeholders, endpoint |
| Vintra - Cabeçalho de artigo | `article-header.tsx` | Voltar, categoria, título, resumo, autor (foto/nome/cargo), data, leitura, capa | Mostrar/ocultar cada parte |
| Vintra - Corpo de artigo | `article-body.tsx` | Texto rico (parágrafos, títulos, listas com check, citação) | Largura do texto |

Todo o conteúdo padrão é o mesmo do site original, e as imagens estão em `src/vintra/resources/` (convertidas para JPG otimizado, de 10 MB para 1 MB).

## Montagem das páginas (equivalência com as rotas)

Configuração padrão = como vem ao arrastar. "Compacto" = Hero com Tamanho *Compacto*.

| Página (rota original) | Fragmentos, em ordem |
|---|---|
| Início `/` | Hero (Grande) · Grade de recursos · Bloco de texto (imagem à direita) · Lista de artigos · Chamada para ação |
| Produtos `/produtos` | Hero Compacto · Bloco de texto (imagem à esquerda) · Grade de recursos · CTA |
| Plataforma `/produtos/plataforma` | Hero Compacto · Bloco de texto (direita) · Grade de recursos · CTA |
| Integrações `/produtos/integracoes` | Hero Compacto · Bloco de texto (esquerda) · Grade de recursos · CTA |
| Preços `/produtos/precos` | Hero Compacto (sem botão secundário) · Planos e preços (sem eyebrow) · CTA |
| Soluções `/solucoes`, Varejo, Indústria, Serviços financeiros | Hero Compacto · Bloco de texto · Grade de recursos · CTA |
| Sobre `/sobre` | Hero Compacto · Bloco de texto (direita) · Equipe (fundo cinza) · CTA |
| Nossa história `/sobre/historia` | Hero Compacto · Bloco de texto (esquerda) · Bloco de texto (sem imagem, fundo cinza) · Grade de recursos · CTA |
| Equipe `/sobre/equipe` | Hero Compacto · Equipe · Bloco de texto (sem imagem, fundo cinza) · CTA |
| Carreiras `/sobre/carreiras` | Hero Compacto · Bloco de texto (direita) · Grade de recursos · CTA |
| Recursos `/recursos` | Hero Compacto · Grade de recursos · Lista de artigos |
| Blog `/recursos/blog` | Hero Compacto (sem botões) · Lista de artigos (sem eyebrow, fundo padrão) ou Exibição de coleção + Card de artigo |
| Artigo `/recursos/blog/[slug]` | **Modelo de Página de Exibição**: Cabeçalho de artigo · Corpo de artigo · Lista de artigos ("Continue lendo") · CTA |
| Central de ajuda `/recursos/ajuda` | Hero Compacto · Grade de recursos (6 cards) · Perguntas frequentes · CTA |
| Documentação `/recursos/documentacao` | Hero Compacto · Bloco de texto (esquerda) · Grade de recursos (6 cards) · CTA |
| Contato `/contato` | Hero Compacto (sem botões) · Contato |
| Entrar `/entrar` | Formulário de acesso (padrão: E-mail + Senha, 2 links) |
| Criar conta `/criar-conta` | Formulário de acesso: marque Nome e Empresa, senha "Nova senha", 1 link |
| Esqueci a senha `/esqueci-senha` | Formulário de acesso: desmarque Senha, 1 link |
| Política de cookies | Hero Compacto (sem botões) · 3× Bloco de texto (sem imagem, o do meio com fundo cinza) · CTA |
| 404 | Configure a página de erro do site com um Hero Grande sem imagem |

### Blog dinâmico (opcional)

- **Página do artigo:** crie um *Modelo de Página de Exibição* para Blog ou Conteúdo Web e mapeie os campos do **Cabeçalho de artigo** (título, resumo, capa, autor, data) e o **Corpo de artigo** (conteúdo).
- **Listagem:** use o fragmento nativo *Exibição de coleção* (3 colunas) com o **Card de artigo** dentro, mapeando imagem, título, resumo e link para a página de exibição.

### Formulários

- **Sem endpoint** (padrão), o envio só mostra a mensagem de sucesso, igual ao protótipo.
- **Com endpoint:** os campos são enviados em JSON via `fetch`, com o cabeçalho `x-csrf-token` do Liferay. Para gravar os contatos num **Objeto** do Liferay:
  1. Crie o objeto (ex.: *Contato*, com os campos `nome`, `email`, `mensagem`).
  2. Dê permissão de *Adicionar* ao papel Guest.
  3. Informe `/o/c/contatos` no campo *Endpoint* do fragmento.
- **Login real:** o *Formulário de acesso* é visual. Para autenticar de verdade, use o widget de login do Liferay ou aponte "Entrar" para a página de login do portal.

## Personalização

- **Cores:** na configuração do fragmento *Base* (cores da marca). Os demais tokens ficam em `vintra-base/index.css` (variáveis `--vt-*`).
- **Modo escuro:** *Base › Modo de cor › Automático* segue o sistema do visitante, como o site original. O padrão é *Claro*, para não conflitar com temas do Liferay.
- **Convenção de CSS:** todo fragmento tem a classe raiz `.vt`, e as regras usam `.vt .vt-*` para não sofrer interferência do Clay/tema.

## Estrutura

```
liferay-fragments/
├── build.sh                 # gera dist/vintra-fragments.zip
├── dist/vintra-fragments.zip
├── src/vintra/              # coleção (formato de import do Liferay)
│   ├── collection.json
│   ├── resources/           # imagens: [resources:arquivo.jpg]
│   └── vintra-*/            # fragment.json, index.html (FreeMarker), index.css, index.js, configuration.json
└── tools/preview/           # renderiza os fragmentos com FreeMarker para conferência local
```

Pré-visualização local, sem Liferay: `tools/preview/preview.sh`. O script usa FreeMarker 2.3.33, a mesma versão do DXP 2026.q1, com a configuração padrão de cada fragmento, e gera páginas em `preview/`.
