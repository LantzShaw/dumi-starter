import type { CSSProperties, MouseEvent, ReactNode } from 'react';

type ButtonType = 'default' | 'primary' | 'secondary' | 'link' | 'text';
type ButtonSize = 'mini' | 'small' | 'medium' | 'large';

type BaseButtonProps = {
  /** button types */
  type?: ButtonType;

  /** button child node */
  children?: ReactNode;

  /** button click event */
  onClick?: (event: MouseEvent) => void;

  /** inline style */
  style?: CSSProperties;

  /** class name */
  className?: string;

  /** button size */
  size?: ButtonSize;

  /** button round  */
  rounded?: boolean;

  /** button disabled */
  disabled?: boolean;

  // [propName: string]: any
} & Record<string, any>;

type PrimaryButtonProps = BaseButtonProps;

export { BaseButtonProps, PrimaryButtonProps, ButtonSize, ButtonType };
