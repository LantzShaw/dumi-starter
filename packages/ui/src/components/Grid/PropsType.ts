import type { CSSProperties, ReactNode } from 'react';

type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

type GridProps = {
  wrap?: Wrap;

  gutter?: number | [number, number];

  style?: CSSProperties;

  className?: string;

  children?: ReactNode;
};

type GridItemProps = {
  span?: number;

  order?: number;

  style?: CSSProperties;

  className?: string;

  children?: ReactNode;
};

export { GridProps, GridItemProps };
