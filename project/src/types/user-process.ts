import {AuthorizationStatus} from '../utils/const';
import {UserData} from './user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};
