import { atom } from 'recoil';

export const isModalOpenState = atom({
  key: 'isModalOpenState',
  default: false,
});

export const titleState = atom({
  key: 'titleState',
  default: '',
});