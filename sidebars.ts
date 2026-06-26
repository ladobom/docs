import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const doc = (id: string, icon: string) =>
  ({
    type: 'doc',
    id,
    customProps: {icon},
  }) as const;

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Início',
      collapsible: false,
      customProps: {icon: 'house'},
      link: {type: 'doc', id: 'index'},
      items: [
        doc('conceitos-gerais', 'book-open'),
        doc('sobre-nos', 'building'),
        doc('sla-atendimento', 'clock'),
        doc('contato', 'phone'),
      ],
    },
    {
      type: 'category',
      label: 'Seguro Fiança',
      collapsible: false,
      customProps: {icon: 'shield-check'},
      link: {type: 'doc', id: 'produtos/seguro-fianca/sobre'},
      items: [
        doc('produtos/seguro-fianca/como-funciona', 'gear'),
        doc('produtos/seguro-fianca/coberturas', 'umbrella'),
        doc('produtos/seguro-fianca/assistencias', 'wrench'),
        doc('produtos/seguro-fianca/processo-sinistro', 'triangle-exclamation'),
        doc('produtos/seguro-fianca/faq', 'question'),
      ],
    },
    {
      type: 'category',
      label: 'Seguro Incêndio',
      collapsible: false,
      customProps: {icon: 'fire'},
      link: {type: 'doc', id: 'produtos/seguro-incendio/sobre'},
      items: [
        doc('produtos/seguro-incendio/coberturas', 'umbrella'),
        doc('produtos/seguro-incendio/assistencias', 'wrench'),
        doc('produtos/seguro-incendio/contratacao', 'file-contract'),
        doc('produtos/seguro-incendio/renovacao', 'sync'),
        doc('produtos/seguro-incendio/faq', 'question'),
      ],
    },
    {
      type: 'category',
      label: 'Capitalização',
      collapsible: false,
      customProps: {icon: 'coins'},
      link: {type: 'doc', id: 'produtos/capitalizacao/sobre'},
      items: [
        doc('produtos/capitalizacao/como-funciona', 'gear'),
        doc('produtos/capitalizacao/beneficios', 'star'),
        doc('produtos/capitalizacao/faq', 'question'),
      ],
    },
    {
      type: 'category',
      label: 'Prestamista',
      collapsible: false,
      customProps: {icon: 'shield-check'},
      link: {
        type: 'doc',
        id: 'produtos/prestamista-capital-vinculado/sobre',
      },
      items: [
        doc('produtos/prestamista-capital-vinculado/coberturas', 'umbrella'),
        doc('produtos/prestamista-capital-vinculado/como-funciona', 'gear'),
        doc(
          'produtos/prestamista-capital-vinculado/clausulas-contrato-locacao',
          'file-signature',
        ),
        doc(
          'produtos/prestamista-capital-vinculado/processo-sinistro',
          'triangle-exclamation',
        ),
        doc('produtos/prestamista-capital-vinculado/faq', 'question'),
      ],
    },
    {
      type: 'category',
      label: 'Regulamentos e Promoções',
      collapsible: false,
      customProps: {icon: 'gift'},
      items: [
        doc('regulamentos-promocoes/pottencializou-ganhou', 'gift'),
        doc('regulamentos-promocoes/guia-resgate-bonus-alyplus', 'gift'),
        doc('regulamentos-promocoes/bonificacao-too-seguros', 'gift'),
      ],
    },
  ],
};

export default sidebars;
