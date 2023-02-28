import React, { FC, ReactElement } from 'react';

import { Button } from 'dumi-starter';

export type Props = {};

const Demo: FC<Props> = (): ReactElement => {
  return (
    <div>
      <Button />
    </div>
  );
};

export default Demo;
