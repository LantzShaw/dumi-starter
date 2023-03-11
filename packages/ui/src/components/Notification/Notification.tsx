import React, { useRef, type FC, type ReactElement } from 'react';

import { CSSTransition } from 'react-transition-group';

import { type NotificationProps } from './PropsType';

import classNames from 'classnames';
import { createNamespace } from '../../utils/create';

const [bem] = createNamespace('notification');

function kebabCaseFormat(str: string): string {
  return str.replace(/[A-Z]/g, (item) => {
    return '-' + item.toLowerCase();
  });
}

const Notification: FC<NotificationProps> = (props): ReactElement => {
  const {
    visiable = false,
    position = 'bottomRight',
    style,
    children,
    onClose,
  } = props;

  const notificationRef = useRef<HTMLDivElement>(null);

  const styles = {
    display: visiable ? 'block' : 'none',
    ...style,
  };

  const classes = classNames(bem('container', [kebabCaseFormat(position)]));

  const clickHandler = () => {
    onClose?.(false);
  };

  return (
    <>
      <CSSTransition
        classNames={`${bem(['animation'])}`}
        in={visiable}
        timeout={300}
        nodeRef={notificationRef}
      >
        <div
          ref={notificationRef}
          className={`${bem()}`}
          style={styles}
          onClick={clickHandler}
        >
          <div className={classes}>{children}</div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Notification;
