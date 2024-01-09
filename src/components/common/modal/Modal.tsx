import React from 'react';
import Modal from 'react-modal';
import { modalChildrenState } from '@recoil/modal';
import { useRecoilValue } from 'recoil';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: any;
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  children,
}) => {
  const modalChildren = useRecoilValue(modalChildrenState);
  const customStyles = getModalStyles(modalChildren);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal">
      {children}
    </Modal>
  );
};

export default ModalComponent;

export const getModalStyles = (modalChildren: string) => {
  if (modalChildren === 'EditDelete') {
    return {
      content: {
        top: 'auto',
        left: '50%',
        right: 'auto',
        bottom: '0',
        marginRight: '-50%',
        transform: 'translate(-50%, 0)',
        width: '415px', // 375px + padding 40 (20 20)
        height: '186px',
        borderTopLeftRadius: '2rem',
        borderTopRightRadius: '2rem',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
      },
    };
  } else if (modalChildren === 'DeleteAlert') {
    return {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '309px',
        height: '192px',
        borderRadius: '2rem',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
      },
    };
  }
};
