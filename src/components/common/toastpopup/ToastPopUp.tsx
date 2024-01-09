import React, { useState, useEffect } from 'react';
import { ReactComponent as CircleCheckIcon } from '@assets/images/CircleCheck.svg';

interface ToastPopUpProps {
  noun: string;
  verb: string;
}

const ToastPopUp: React.FC<ToastPopUpProps> = ({ noun, verb }) => {
  const [particle, setParticle] = useState('가');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (noun === '일정') {
    setParticle('이');
  }

  return (
    <div
      className={`fixed flex items-center px-4 `}
      style={{
        top: '0',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: visible ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
        width: '375px',
        height: '64px',
        borderRadius: '1rem',
        border: '1px solid #29DDF6',
        backgroundColor: '#F2FDFF',
        color: '#062139',
        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
        opacity: visible ? 1 : 0,
      }}>
      <CircleCheckIcon fill="#29DDF6" className="mr-2" />
      <p>
        {noun}
        {particle} {verb}되었습니다
      </p>
    </div>
  );
};

export default ToastPopUp;
