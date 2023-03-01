import {
  type CSSProperties,
  type PropsWithChildren,
  type ReactNodeClass,
} from 'react';

type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type Justify = 'start' | 'center' | 'end' | 'between' | 'around';

type Align = 'start' | 'center' | 'end' | 'baseline' | 'stretch';

type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

type FlexProps = PropsWithChildren<{
  direction?: Direction;

  justify?: Justify;

  align?: Align;

  gutter?: number | [number, number];

  wrap?: Wrap;

  /** inline style */
  style?: CSSProperties;

  /** class name */
  className?: ReactNodeClass;
}>;

type FlexItemProps = PropsWithChildren<{
  /** inline style */
  style?: CSSProperties;

  /** class name */
  className?: ReactNodeClass;
}>;

export { FlexProps, FlexItemProps };
