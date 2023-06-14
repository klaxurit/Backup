export const SET_DISPLAY_FORMAT = 'SET_DISPLAY_FORMAT';

interface SetDisplayFormatAction {
  type: typeof SET_DISPLAY_FORMAT;
  payload: 'mobile' | 'desktop';
}

export type DisplayFormatActionTypes = SetDisplayFormatAction;

export interface DisplayFormatState {
  displayFormat: 'mobile' | 'desktop';
}