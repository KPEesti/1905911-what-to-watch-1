import {AppStatus, NameSpace} from '../../../utils/const';
import {createSlice} from '@reduxjs/toolkit';
import {AppProcess} from '../../../types/state-type';

const initialState : AppProcess = {
  appStatus: AppStatus.Loading,
  error: null,
};

export const appData = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setAppStatus: (state, action) => {
      state.appStatus = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {setAppStatus, setError} = appData.actions;
