import { FC, memo, useCallback, useRef, useState } from 'react';

import * as icons from '@icons';
import { ButtonInput, ModalWindow } from '@components';

interface Props {
  onCreateChat: (name?: string) => Promise<void>;
}

const CreateChatButton: FC<Props> = ({ onCreateChat }) => {
  const [modalWindowOpen, setModalWindowOpen] = useState<boolean>(false);

  const handleCreateSession = useCallback(
    async (name: string) => {
      setModalWindowOpen(false);
      await onCreateChat(name);
    },
    [onCreateChat],
  );

  return (
    <div className="px-6">
      {modalWindowOpen && (
        <ModalWindow
          title="Create new session"
          onClose={() => setModalWindowOpen(false)}
        >
          <ButtonInput
            focusOnLoad={true}
            placeholder="Session name"
            onSubmit={handleCreateSession}
            lengthLimit={32}
          />
        </ModalWindow>
      )}
      <button
        onClick={() => {
          setModalWindowOpen(true);
        }}
        className="flex items-center w-full py-6 hover:bg-white/10 rounded-lg px-5 gap-2 my-3"
      >
        <span>Create new</span>
        <icons.Plus width={18} height={18} />
      </button>
    </div>
  );
};

export default memo(CreateChatButton);
