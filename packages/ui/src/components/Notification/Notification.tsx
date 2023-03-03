import React, { type FC, type ReactElement } from 'react';

import { type NotificationProps } from './Notification.d';

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

  const styles = {
    display: visiable ? 'block' : 'none',
    ...style,
  };

  const classes = classNames(bem('container', [kebabCaseFormat(position)]));

  const clickHandler = () => {
    onClose?.(false);
  };

  return (
    <div className={`${bem()}`} style={styles} onClick={clickHandler}>
      <div className={classes}>{children}</div>
    </div>
  );
};

export default Notification;
