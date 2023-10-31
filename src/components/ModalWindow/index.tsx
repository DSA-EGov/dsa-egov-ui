import { FC, memo, PropsWithChildren } from 'react';

import * as icons from '@icons';
import { Modal } from '@components';

interface Props {
  onClose: () => void;
}

const ModalWindow: FC<PropsWithChildren<Props>> = ({ children, onClose }) => {
  return (
    <Modal>
      <div className="w-screen h-screen absolute flex items-center justify-center z-50">
        <main className="relative flex flex-col gap-3 p-5 rounded-2xl bg-white">
          <button onClick={onClose}>
            <icons.Close />
          </button>
          {children}
        </main>
      </div>
    </Modal>
  );
};

export default memo(ModalWindow);
