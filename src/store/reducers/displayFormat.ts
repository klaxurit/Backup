import { DisplayFormatActionTypes, SET_DISPLAY_FORMAT, DisplayFormatState } from '../types';

const initialState: DisplayFormatState = {
  displayFormat: 'mobile',
};

const displayFormatReducer = (state = initialState, action: DisplayFormatActionTypes): DisplayFormatState => {
  switch (action.type) {
    case SET_DISPLAY_FORMAT:
      return {
        ...state,
        displayFormat: action.payload,
      };
    default:
      return state;
  }
};

export default displayFormatReducer;