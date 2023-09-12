import { FC, memo, PropsWithChildren, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal: FC<PropsWithChildren> = ({ children }) => {
  const modalRoot = useRef(document.getElementById('modal-root')!);

  return createPortal(children, modalRoot.current);
};

export default memo(Modal);
