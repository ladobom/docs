import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Início',
      collapsible: false,
      link: {type: 'doc', id: 'index'},
      items: [
        'conceitos-gerais',
        'sobre-nos',
        'sla-atendimento',
        'contato',
      ],
    },
    {
      type: 'category',
      label: 'Seguro Fiança',
      collapsible: false,
      link: {type: 'doc', id: 'produtos/seguro-fianca/sobre'},
      items: [
        'produtos/seguro-fianca/como-funciona',
        'produtos/seguro-fianca/coberturas',
        'produtos/seguro-fianca/assistencias',
        'produtos/seguro-fianca/processo-sinistro',
        'produtos/seguro-fianca/faq',
      ],
    },
    {
      type: 'category',
      label: 'Seguro Incêndio',
      collapsible: false,
      link: {type: 'doc', id: 'produtos/seguro-incendio/sobre'},
      items: [
        'produtos/seguro-incendio/coberturas',
        'produtos/seguro-incendio/assistencias',
        'produtos/seguro-incendio/contratacao',
        'produtos/seguro-incendio/renovacao',
        'produtos/seguro-incendio/faq',
      ],
    },
    {
      type: 'category',
      label: 'Capitalização',
      collapsible: false,
      link: {type: 'doc', id: 'produtos/capitalizacao/sobre'},
      items: [
        'produtos/capitalizacao/como-funciona',
        'produtos/capitalizacao/beneficios',
        'produtos/capitalizacao/faq',
      ],
    },
    {
      type: 'category',
      label: 'Prestamista',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'produtos/prestamista-capital-vinculado/sobre',
      },
      items: [
        'produtos/prestamista-capital-vinculado/coberturas',
        'produtos/prestamista-capital-vinculado/como-funciona',
        'produtos/prestamista-capital-vinculado/clausulas-contrato-locacao',
        'produtos/prestamista-capital-vinculado/processo-sinistro',
        'produtos/prestamista-capital-vinculado/faq',
      ],
    },
    {
      type: 'category',
      label: 'Regulamentos e Promoções',
      collapsible: false,
      items: [
        'regulamentos-promocoes/pottencializou-ganhou',
        'regulamentos-promocoes/guia-resgate-bonus-alyplus',
        'regulamentos-promocoes/bonificacao-too-seguros',
      ],
    },
  ],
};

export default sidebars;
