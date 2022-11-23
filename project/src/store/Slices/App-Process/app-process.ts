import {AppProcess} from '../../../types/app-process';
import {AppStatus, NameSpace} from '../../../utils/const';
import {createSlice} from '@reduxjs/toolkit';

const initialState : AppProcess = {
  appStatus: AppStatus.Ok,
  error: null,
};

export const appProcess = createSlice({
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

export const {setAppStatus, setError} = appProcess.actions;
