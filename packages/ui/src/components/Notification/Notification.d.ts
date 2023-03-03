import type { CSSProperties, PropsWithChildren } from 'react';

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

type NotificationProps = PropsWithChildren<
  {
    style: CSSProperties;

    position: Position;

    visiable?: boolean;

    onClose?: (boolean) => void;
  } & Record<string, any>
>;

export { NotificationProps };
