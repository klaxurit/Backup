import { SET_DISPLAY_FORMAT, DisplayFormatActionTypes } from '../types';

export const setDisplayFormat = (format: 'mobile' | 'desktop'): DisplayFormatActionTypes => {
  return {
    type: SET_DISPLAY_FORMAT,
    payload: format,
  };
};