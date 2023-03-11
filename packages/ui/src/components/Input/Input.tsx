import React, { type FC, type ReactElement } from 'react';

import type { InputProps } from './PropsType';

const Input: FC<InputProps> = (): ReactElement => {
  return <input type="text" />;
};

export default Input;
