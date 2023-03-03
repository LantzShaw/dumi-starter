import React, { type FC, type ReactElement } from 'react';

import type { ModalProps } from './Modal.d';

import { createNamespace } from '../../utils/create';

const [bem] = createNamespace('modal');

const Modal: FC<ModalProps> = (props): ReactElement => {
  const { visiable = true, style, children, className, onClose } = props;

  const styles = {
    display: visiable ? 'block' : 'none',
    ...style,
  };

  const clickHandler = () => {
    onClose?.(false);
  };

  return (
    <div
      style={styles}
      className={`${bem(['overlay'])}`}
      onClick={clickHandler}
    >
      <div className={`${bem('container')}`}>{children}</div>
    </div>
  );
};

export default Modal;
