import {
  type CSSProperties,
  type PropsWithChildren,
  type ReactNode,
} from 'react';

type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type Justify = 'start' | 'center' | 'end' | 'between' | 'around';

type Align = 'start' | 'center' | 'end' | 'baseline' | 'stretch';

type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

type FlexProps = {
  direction?: Direction;

  justify?: Justify;

  align?: Align;

  gutter?: number | [number, number];

  wrap?: Wrap;

  /** inline style */
  style?: CSSProperties;

  /** class name */
  className?: string;

  children?: ReactNode;
} & Record<string, any>;

type FlexItemProps = PropsWithChildren<{
  /** inline style */
  style?: CSSProperties;

  /** class name */
  className?: string;
}>;

export { FlexProps, FlexItemProps };
