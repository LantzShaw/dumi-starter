import React, { FC, Fragment, ReactElement } from 'react';

import { SpaceProps } from './Space.d';

import classNames from 'classnames';
import { createNamespace } from '../../utils/create';

const [bem] = createNamespace('space');

const gapFormat = (gap: string | number) =>
  typeof gap === 'number' ? `${gap}px` : gap;

const Space: FC<SpaceProps> = (props): ReactElement => {
  const {
    gap = [0, 0],
    direction = 'horizontal',
    wrap = 'wrap',
    justify,
    align,
    style,
    className,
    children,
    ...rest
  } = props;

  // NOTE: rowGap field is the gap between rows. And the columnGap of the columns
  const [rowGap, columnGap] = gap;

  const styles = {
    ...style,
    gap: `${gapFormat(rowGap)} ${gapFormat(columnGap)} `,
  };

  const classes = classNames(
    [
      bem([
        direction,
        wrap,
        justify ? `justify-${justify}` : false,
        align ? `align-${align}` : false,
      ]),
    ],
    className,
  );

  const childrenRenderer = Array.isArray(children)
    ? children.map((child, index) => {
        return (
          <Fragment key={index}>
            <div>{child}</div>
          </Fragment>
        );
      })
    : children;

  return (
    <div style={styles} className={classes} {...rest}>
      {childrenRenderer}
    </div>
  );
};

export default Space;
