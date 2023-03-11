import classNames from 'classnames';
import React, { useMemo, type FC, type ReactElement } from 'react';

import { createNamespace } from '../../utils/create';
import GridContext from './GridContext';

import type { GridProps } from './PropsType';

const [bem] = createNamespace('grid');

const gutterFormat = (gutter: string | number) =>
  typeof gutter === 'number' ? `${gutter}px` : gutter;

const Grid: FC<GridProps> = (props): ReactElement => {
  const { wrap = 'wrap', gutter = [0, 0], style, children } = props;

  const getGutter: [number, number] = useMemo(() => {
    return Array.isArray(gutter) ? gutter : [0, gutter];
  }, [gutter]);

  const [rowGutter] = getGutter;

  const styles = {
    gap: `${gutterFormat(rowGutter)} 0`,
    ...style,
  };

  const classes = classNames(bem([wrap]));

  return (
    <GridContext.Provider value={{ gutter: getGutter }}>
      <div style={styles} className={classes}>
        {children}
      </div>
    </GridContext.Provider>
  );
};

export default Grid;
