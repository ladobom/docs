import React, {ReactNode} from 'react';
import Link from '@docusaurus/Link';

type ChildrenProps = {
  children?: ReactNode;
};

type CalloutProps = ChildrenProps & {
  title?: string;
  icon?: string;
};

type CardProps = ChildrenProps & {
  title?: string;
  href?: string;
  icon?: string;
};

type CardGroupProps = ChildrenProps & {
  cols?: number | string;
};

type AccordionProps = ChildrenProps & {
  title: string;
};

type StepProps = ChildrenProps & {
  title?: string;
};

const calloutClassByType = {
  info: 'mintlify-callout--info',
  note: 'mintlify-callout--note',
  tip: 'mintlify-callout--tip',
  warning: 'mintlify-callout--warning',
};

function CalloutBox({
  children,
  title,
  type,
}: ChildrenProps & {title?: string; type: keyof typeof calloutClassByType}) {
  return (
    <div className={`mintlify-callout ${calloutClassByType[type]}`}>
      {title ? <strong>{title}</strong> : null}
      <div>{children}</div>
    </div>
  );
}

export function Info({children, title}: CalloutProps) {
  return (
    <CalloutBox title={title} type="info">
      {children}
    </CalloutBox>
  );
}

export function Note({children, title}: CalloutProps) {
  return (
    <CalloutBox title={title} type="note">
      {children}
    </CalloutBox>
  );
}

export function Tip({children, title}: CalloutProps) {
  return (
    <CalloutBox title={title} type="tip">
      {children}
    </CalloutBox>
  );
}

export function Warning({children, title}: CalloutProps) {
  return (
    <CalloutBox title={title} type="warning">
      {children}
    </CalloutBox>
  );
}

export function Callout({children, title}: CalloutProps) {
  return (
    <CalloutBox title={title} type="note">
      {children}
    </CalloutBox>
  );
}

export function CardGroup({children, cols = 2}: CardGroupProps) {
  const parsedCols = Number(cols) || 2;
  return (
    <div
      className="mintlify-card-group"
      style={{'--mintlify-card-cols': parsedCols} as React.CSSProperties}>
      {children}
    </div>
  );
}

export function Card({children, title, href, icon}: CardProps) {
  return (
    <div className="mintlify-card">
      <div className="mintlify-card__header">
        {icon ? <span className="mintlify-card__icon" aria-hidden="true" /> : null}
        {title ? <strong>{title}</strong> : null}
      </div>
      <div className="mintlify-card__body">{children}</div>
      {href ? (
        <Link className="mintlify-card__cta" to={href}>
          Acessar
        </Link>
      ) : null}
    </div>
  );
}

export function AccordionGroup({children}: ChildrenProps) {
  return <div className="mintlify-accordion-group">{children}</div>;
}

export function Accordion({children, title}: AccordionProps) {
  return (
    <details className="mintlify-accordion">
      <summary>{title}</summary>
      <div className="mintlify-accordion__body">{children}</div>
    </details>
  );
}

export function Steps({children}: ChildrenProps) {
  return <ol className="mintlify-steps">{children}</ol>;
}

export function Step({children, title}: StepProps) {
  return (
    <li className="mintlify-step">
      {title ? <strong>{title}</strong> : null}
      <div>{children}</div>
    </li>
  );
}
