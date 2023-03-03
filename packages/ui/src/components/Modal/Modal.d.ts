import type { PropsWithChildren } from 'react';

type ModalProps = PropsWithChildren<
  {
    visible?: boolean;

    onClose?: (boolean) => void;
  } & Record<string, any>
>;

export { ModalProps };
