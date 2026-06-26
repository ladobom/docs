# Lado Bom Docs

Documentação pública da Lado Bom Seguros em Docusaurus.

## Stack

- Docusaurus 3 com TypeScript
- Conteúdo em Markdown/MDX na pasta `docs/`
- Rotas públicas no GitHub Pages, como `/docs/conceitos-gerais`
- Busca local com `@easyops-cn/docusaurus-search-local`
- Build estático compatível com Vercel, GitHub Pages e Cloudflare Pages

## Instalação

```bash
npm install
```

## Rodar localmente

```bash
npm start
```

O site local fica disponível em `http://localhost:3000`.

## Build

```bash
npm run build
```

Os arquivos estáticos ficam em `build/`.

## Preview na Vercel

Configuração recomendada:

- Build command: `npm run build`
- Output directory: `build`
- Install command: `npm install`
- Node.js: `20` ou superior

Para preview em domínio da Vercel, crie uma branch temporária com `baseUrl: '/'` ou configure um domínio equivalente. A configuração principal deste repositório está preparada para GitHub Pages em `/docs/`.

## Deploy no GitHub Pages

O repositório esperado é:

```text
ladobom/docs
```

A URL pública esperada é:

```text
https://ladobom.github.io/docs/
```

Configuração correspondente em `docusaurus.config.ts`:

```ts
url: 'https://ladobom.github.io',
baseUrl: '/docs/',
organizationName: 'ladobom',
projectName: 'docs',
```

O deploy é feito pelo workflow `.github/workflows/deploy.yml`.

No GitHub, configure `Settings -> Pages -> Build and deployment -> Source` como `GitHub Actions`.

## Redirects

O arquivo `static/_redirects` preserva as antigas URLs `.md`, por exemplo:

```text
/conceitos-gerais.md /conceitos-gerais
```

Esse arquivo é usado diretamente por Cloudflare Pages. Em outras plataformas, configure regras equivalentes se precisar manter compatibilidade com as URLs antigas.

## Como adicionar páginas

1. Crie um arquivo `.md` ou `.mdx` dentro de `docs/`.
2. Use títulos Markdown normais (`# Título`, `## Seção`).
3. Adicione o ID do documento em `sidebars.ts` se a página precisar aparecer no menu lateral.

Exemplo:

```ts
'produtos/seguro-fianca/nova-pagina'
```

## Como alterar a sidebar

A navegação principal fica em `sidebars.ts`.

As categorias estão configuradas como fixas, sem expansão/recolhimento, para manter o comportamento da documentação anterior.

Categorias atuais:

- Início
- Seguro Fiança
- Seguro Incêndio
- Capitalização
- Prestamista
- Regulamentos e Promoções

## Componentes MDX

Os componentes usados nos arquivos da documentação estão registrados em `src/theme/MDXComponents.tsx` e implementados em `src/components/MintlifyCompat.tsx`.

Componentes disponíveis:

- `Info`
- `Note`
- `Tip`
- `Warning`
- `Callout`
- `CardGroup`
- `Card`
- `AccordionGroup`
- `Accordion`
- `Steps`
- `Step`

## Assets

Logos e favicons ficam em `static/img`.

Imagens usadas nas páginas ficam em `static/images`.

## Observações de manutenção

- O conteúdo jurídico, comercial e regulatório deve ser alterado apenas com validação da área responsável.
- Mermaid não está configurado porque a documentação atual não usa diagramas Mermaid.
- A busca local é gerada durante o build e não depende de serviços externos.
