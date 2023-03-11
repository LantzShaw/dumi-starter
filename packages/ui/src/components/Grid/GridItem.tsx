import classNames from 'classnames';
import React, { useContext, type FC, type ReactElement } from 'react';
import { createNamespace } from '../../utils/create';

import GridContext from './GridContext';
import { GridItemProps } from './PropsType';

import { GRID_COLUMN_COUNT } from '../../utils/constants';

const [bem] = createNamespace('grid-item');

const GridItem: FC<GridItemProps> = (props): ReactElement => {
  const { span, order = 0, style, children } = props;

  const gridContext = useContext(GridContext);

  let contentStyle;

  if (gridContext.gutter) {
    contentStyle = {
      paddingRight: `${gridContext.gutter[1]}px`,
    };
  }

  const flexBasis = span
    ? `${Math.floor((span / GRID_COLUMN_COUNT) * 100)}%`
    : 'auto';

  const classes = classNames(bem());

  const styles = {
    flexBasis,
    order,
    ...contentStyle,
    ...style,
  };

  return (
    <div style={styles} className={classes}>
      {children}
    </div>
  );
};

export default GridItem;
