import { ReactNode } from "react";

export interface MenuItemType {
  icon: any;
  label: string;
  route: string;
  isActive?: boolean;
}

export interface DeckMenuProps {
  children: ReactNode;
  menuItems: MenuItemType[];
}

export interface AnimationConfigType {
  duration: number;
  easing: any;
}
