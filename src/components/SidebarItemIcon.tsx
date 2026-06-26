import React from 'react';
import {MintlifyIcon} from './MintlifyCompat';

type SidebarItemWithCustomProps = {
  customProps?: {
    icon?: unknown;
  };
};

export default function SidebarItemIcon({item}: {item: SidebarItemWithCustomProps}) {
  const icon = item.customProps?.icon;

  if (typeof icon !== 'string') {
    return null;
  }

  return <MintlifyIcon className="theme-doc-sidebar-icon" name={icon} />;
}
