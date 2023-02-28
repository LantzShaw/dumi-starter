import classnames from 'classnames';
import React, { type FC, type ReactElement } from 'react';

import { createNamespace } from '../../utils/create';

const [bem] = createNamespace('button');

import type { PrimaryButtonProps } from './Button.d';

const Button: FC<PrimaryButtonProps> = (props): ReactElement => {
  const {
    type = 'default',
    size = 'medium',
    rounded = false,
    disabled = false,
    className,
    children,
    ...rest
  } = props;

  const classes = classnames(
    [bem([type, size, { disabled, rounded }])],
    className?.split(' '),
  );

  return (
    <>
      <button disabled={disabled} className={classes} {...rest}>
        {children}
      </button>
    </>
  );
};

export default Button;
