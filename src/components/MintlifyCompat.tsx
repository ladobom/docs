import React, {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {
  ArrowDown,
  ArrowRightLeft,
  ArrowUp,
  Banknote,
  Bell,
  BookOpen,
  Building,
  Building2,
  Calendar,
  CalendarDays,
  ChartBar,
  Check,
  Circle,
  CircleCheck,
  CircleDollarSign,
  CircleHelp,
  CirclePlus,
  CircleX,
  ClipboardCheck,
  Clock,
  Coins,
  CreditCard,
  DollarSign,
  Eye,
  File,
  FileCheck,
  FilePenLine,
  FilePlus,
  FileText,
  Flag,
  Flame,
  Gift,
  Globe,
  Handshake,
  Headphones,
  Heart,
  Home,
  House,
  Info as InfoIcon,
  Infinity,
  Link as LinkIcon,
  List,
  Lock,
  Mail,
  MapPin,
  Monitor,
  Pencil,
  Percent,
  Phone,
  Plane,
  Play,
  ReceiptText,
  RefreshCw,
  Repeat,
  Scale,
  Search,
  Settings,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  TriangleAlert,
  Truck,
  Umbrella,
  User,
  UserCheck,
  Users,
  Wrench,
  X,
} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';

type ChildrenProps = {
  children?: ReactNode;
};

type CalloutProps = ChildrenProps & {
  title?: string;
  icon?: string;
  iconType?: string;
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

const iconByName: Record<string, LucideIcon> = {
  airplane: Plane,
  'arrow-down': ArrowDown,
  'arrow-path': RefreshCw,
  'arrow-trending-up': TrendingUp,
  'arrow-up': ArrowUp,
  'arrows-right-left': ArrowRightLeft,
  banknotes: Banknote,
  bell: Bell,
  'book-open': BookOpen,
  building: Building,
  'building-office': Building2,
  'building-office-2': Building2,
  calendar: Calendar,
  'calendar-days': CalendarDays,
  'chart-bar': ChartBar,
  'chart-line': TrendingUp,
  check: Check,
  'check-circle': CircleCheck,
  circle: Circle,
  'circle-check': CircleCheck,
  'circle-dollar': CircleDollarSign,
  clock: Clock,
  'clipboard-document-check': ClipboardCheck,
  'cog-6-tooth': Settings,
  'computer-desktop': Monitor,
  'credit-card': CreditCard,
  coins: Coins,
  'currency-dollar': CircleDollarSign,
  'document': File,
  'document-check': FileCheck,
  'document-plus': FilePlus,
  'document-text': FileText,
  'dollar-sign': DollarSign,
  envelope: Mail,
  'exclamation-triangle': TriangleAlert,
  eye: Eye,
  'file-pdf': FileText,
  'file-signature': FilePenLine,
  'file-word': FileText,
  'file-contract': FileText,
  fire: Flame,
  flag: Flag,
  gear: Settings,
  gift: Gift,
  globe: Globe,
  handshake: Handshake,
  headphones: Headphones,
  heart: Heart,
  home: Home,
  house: House,
  infinity: Infinity,
  information: InfoIcon,
  'information-circle': InfoIcon,
  instagram: Globe,
  link: LinkIcon,
  linkedin: LinkIcon,
  'list-bullet': List,
  lock: Lock,
  'lock-closed': Lock,
  'magnifying-glass': Search,
  'map-pin': MapPin,
  pencil: Pencil,
  percent: Percent,
  phone: Phone,
  play: Play,
  plus: CirclePlus,
  'plus-circle': CirclePlus,
  question: CircleHelp,
  'question-mark': CircleHelp,
  repeat: Repeat,
  'receipt-percent': ReceiptText,
  scale: Scale,
  'shield-check': ShieldCheck,
  star: Star,
  sync: RefreshCw,
  target: Target,
  'triangle-exclamation': TriangleAlert,
  truck: Truck,
  umbrella: Umbrella,
  user: User,
  'user-check': UserCheck,
  'user-group': Users,
  'user-headset': Headphones,
  wrench: Wrench,
  'wrench-screwdriver': Wrench,
  'x-circle': CircleX,
  'x-mark': X,
};

export function MintlifyIcon({
  name,
  className,
}: {
  name?: string;
  className: string;
}) {
  if (!name) {
    return null;
  }

  const Icon = iconByName[name] ?? Circle;

  return <Icon aria-hidden="true" className={className} strokeWidth={2} />;
}

function CalloutBox({
  children,
  title,
  type,
  icon,
}: ChildrenProps & {
  title?: string;
  type: keyof typeof calloutClassByType;
  icon?: string;
}) {
  const fallbackIconByType: Record<keyof typeof calloutClassByType, string> = {
    info: 'information-circle',
    note: 'information-circle',
    tip: 'circle-check',
    warning: 'exclamation-triangle',
  };

  return (
    <div className={`mintlify-callout ${calloutClassByType[type]}`}>
      <MintlifyIcon
        className="mintlify-callout__icon"
        name={icon ?? fallbackIconByType[type]}
      />
      <div className="mintlify-callout__content">
        {title ? <strong>{title}</strong> : null}
        <div>{children}</div>
      </div>
    </div>
  );
}

export function Info({children, title, icon}: CalloutProps) {
  return (
    <CalloutBox icon={icon} title={title} type="info">
      {children}
    </CalloutBox>
  );
}

export function Note({children, title, icon}: CalloutProps) {
  return (
    <CalloutBox icon={icon} title={title} type="note">
      {children}
    </CalloutBox>
  );
}

export function Tip({children, title, icon}: CalloutProps) {
  return (
    <CalloutBox icon={icon} title={title} type="tip">
      {children}
    </CalloutBox>
  );
}

export function Warning({children, title, icon}: CalloutProps) {
  return (
    <CalloutBox icon={icon} title={title} type="warning">
      {children}
    </CalloutBox>
  );
}

export function Callout({children, title, icon}: CalloutProps) {
  return (
    <CalloutBox icon={icon} title={title} type="tip">
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
        <MintlifyIcon className="mintlify-card__icon" name={icon} />
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
