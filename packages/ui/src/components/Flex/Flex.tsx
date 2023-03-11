import classNames from 'classnames';
import React, { useMemo, type FC, type ReactElement } from 'react';

import { FlexProps } from './PropsType';

import FlexContext from './FlexContext';

import { createNamespace } from '../../utils/create';

const [bem] = createNamespace('flex');

const Flex: FC<FlexProps> = (props): ReactElement => {
  const {
    direction,
    justify,
    align,
    gutter = 0,
    wrap,
    children,
    style,
    className,
    ...rest
  } = props;

  const getGutter: [number, number] = useMemo(
    () => (Array.isArray(gutter) ? gutter : [gutter, 0]),
    [gutter],
  );

  const styles = {
    ...(getGutter[0]! > 0
      ? {
          marginLeft: getGutter[0]! / -2,
          marginRight: getGutter[0]! / -2,
        }
      : {}),
    ...(getGutter[1]! > 0
      ? {
          marginTop: getGutter[1]! / -2,
          marginBottom: getGutter[1]! / 2,
        }
      : {}),
    ...style,
  };

  const classes = classNames(
    [
      bem([
        direction,
        justify ? `justify-${justify}` : false,
        align ? `align-${align}` : false,
        wrap,
      ]),
    ],
    className,
  );

  return (
    <FlexContext.Provider value={{ gutter: getGutter }}>
      <div className={classes} style={styles} {...rest}>
        {children}
      </div>
    </FlexContext.Provider>
  );
};

export default Flex;
