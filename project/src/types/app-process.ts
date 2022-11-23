import {AppStatus} from '../utils/const';

export type AppProcess = {
  appStatus: AppStatus;
  error: string | null;
};
