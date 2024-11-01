// src/jobsAtom.js
import { atom } from 'recoil';

export const jobsAtom = atom({
  key: 'jobsAtom', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
