type Direction = 'horizontal' | 'vertical';

type Justify = 'start' | 'center' | 'end' | 'between' | 'around';

type Align = 'start' | 'center' | 'end' | 'baseline' | 'stretch';

type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

type SpaceProps = PropsWithChildren<
  {
    /** the gap between the elements */
    gap: number[] | string[];

    direction?: Direction;

    justify?: Justify;

    align?: Align;

    wrap?: Wrap;

    /** inline style */
    style?: CSSProperties;

    /** class name */
    className?: ReactNodeClass;
  } & Record<string, any>
>;

export { SpaceProps };
