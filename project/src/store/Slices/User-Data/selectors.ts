import {State} from '../../../types/state';
import {NameSpace} from '../../../utils/const';

export const getAuthStatus = (state: State) => state[NameSpace.User].authorizationStatus;
export const getUserData = (state: State) => state[NameSpace.User].userData;
