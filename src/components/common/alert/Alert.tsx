import { ReactNode, FC } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

interface AlertProps {
  title: string;
  message: ReactNode;
  onConfirm: () => void;
  children: ReactNode;
}

const Alert: FC<AlertProps> = ({ title, message, onConfirm, children }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>{children}</Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-10 bg-black opacity-70" />
      <Dialog.Content className="fixed left-[50%] top-[50%] z-10 flex h-[192px] w-[346px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded-[16px] bg-white shadow-lg focus:outline-none">
        <Dialog.Description className="mt-[10px] text-center text-[15px] leading-normal">
          <p className="mb-[16px] font-bold text-[#062139]">{title}</p>
          <p className="font-medium text-[#888]">{message}</p>
        </Dialog.Description>

        <div className="mt-[25px] flex justify-center gap-[13px]">
          <Dialog.Close asChild>
            <button className="btn-base h-[48px] w-[134px] border border-solid border-gray3 bg-white p-[8px] text-[15px] font-bold text-[#888]">
              취소
            </button>
          </Dialog.Close>
          <button
            onClick={onConfirm}
            className="btn-base h-[48px] w-[134px] bg-main2 p-[8px] text-[15px] font-bold text-white">
            확인
          </button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Alert;
