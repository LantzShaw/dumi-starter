import type { CSSProperties, ReactNode } from 'react';

type Direction = 'horizontal' | 'vertical';

type Justify = 'start' | 'center' | 'end' | 'between' | 'around';

type Align = 'start' | 'center' | 'end' | 'baseline' | 'stretch';

type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

type SpaceProps = {
  /** the gap between the elements */
  gap: number[] | string[];

  direction?: Direction;

  justify?: Justify;

  align?: Align;

  wrap?: Wrap;

  /** inline style */
  style?: CSSProperties;

  /** class name */
  className?: string;

  children?: ReactNode;
} & Record<string, any>;

export { SpaceProps };
