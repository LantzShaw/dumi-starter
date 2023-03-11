import type { ReactNode } from 'react';

type ModalProps = {
  visible?: boolean;

  onClose?: (status: boolean) => void;

  children?: ReactNode;
} & Record<string, any>;

export { ModalProps };
