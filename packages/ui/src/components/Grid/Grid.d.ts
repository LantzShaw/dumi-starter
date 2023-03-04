import type { CSSProperties, PropsWithChildren } from 'react';

type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

type GridProps = PropsWithChildren<{
  wrap?: Wrap;
  gutter?: number | [number, number];
  style?: CSSProperties;
  className?: ReactNodeClass;
}>;

type GridItemProps = PropsWithChildren<{
  span?: number;

  order?: number;

  style?: CSSProperties;

  className?: ReactNodeClass;
}>;

export { GridProps, GridItemProps };
