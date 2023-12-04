import { FC, memo, PropsWithChildren } from 'react';

import * as icons from '@icons';
import { Modal } from '@components';

interface Props {
  title?: string;
  onClose: () => void;
}

const ModalWindow: FC<PropsWithChildren<Props>> = ({
  children,
  onClose,
  title,
}) => {
  return (
    <Modal>
      <div className="w-screen h-screen absolute flex items-center justify-center z-50">
        <main className="relative flex flex-col gap-3 p-3 rounded-2xl bg-secondary">
          <header className="flex justify-between">
            {title && <span>{title}</span>}
            <button
              onClick={onClose}
              className="hover:bg-white/10 p-1 rounded-full self-center"
            >
              <icons.Close width={20} height={20} className="fill-primary" />
            </button>
          </header>
          {children}
        </main>
      </div>
    </Modal>
  );
};

export default memo(ModalWindow);
