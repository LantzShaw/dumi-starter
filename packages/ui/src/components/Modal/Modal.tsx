import React, { useRef, type FC, type ReactElement } from 'react';

import { CSSTransition } from 'react-transition-group';

import type { ModalProps } from './Modal.d';

import { createNamespace } from '../../utils/create';

const [bem] = createNamespace('modal');

const Modal: FC<ModalProps> = (props): ReactElement => {
  const { visiable = true, style, children, className, onClose } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  const styles = {
    display: visiable ? 'block' : 'none',
    ...style,
  };

  const clickHandler = () => {
    onClose?.(false);
  };

  return (
    <CSSTransition
      classNames={`${bem(['animation'])}`}
      in={visiable}
      timeout={300}
      nodeRef={modalRef}
    >
      <div
        ref={modalRef}
        style={styles}
        className={`${bem(['overlay'])}`}
        onClick={clickHandler}
      >
        <div className={`${bem('container')}`}>{children}</div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
