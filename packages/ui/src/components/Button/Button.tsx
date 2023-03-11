import classnames from 'classnames';
import React, { type FC, type ReactElement } from 'react';

import { createNamespace } from '../../utils/create';

const [bem] = createNamespace('button');

import type { PrimaryButtonProps } from './PropsType';

const Button: FC<PrimaryButtonProps> = (props): ReactElement => {
  const {
    type = 'default',
    size = 'medium',
    rounded = false,
    disabled = false,
    className,
    children,
    style,
    ...rest
  } = props;

  const classes = classnames(
    [bem([type, size, { disabled, rounded }])],
    className,
  );

  return (
    <>
      <button
        type="button"
        disabled={disabled}
        style={style}
        className={classes}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
