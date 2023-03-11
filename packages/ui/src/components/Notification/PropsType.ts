import type { CSSProperties, ReactNode } from 'react';

type Position =
  | 'bottomLeft'
  | 'topLeft'
  | 'middleLeft'
  | 'middleTop'
  | 'middle'
  | 'middleBottom'
  | 'middleRight'
  | 'bottomRight'
  | 'topRight';

type NotificationProps = {
  style: CSSProperties;

  position: Position;

  visiable?: boolean;

  onClose?: (status: boolean) => void;

  children?: ReactNode;
} & Record<string, any>;

export { NotificationProps };
