import {AuthorizationStatus, NameSpace} from '../../../utils/const';
import {createSlice} from '@reduxjs/toolkit';
import {checkAuthAction, loginAction, logoutAction} from '../../api-actions';
import {UserData} from '../../../types/state-type';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      });
  }
});

export const {setUserData} = userData.actions;
