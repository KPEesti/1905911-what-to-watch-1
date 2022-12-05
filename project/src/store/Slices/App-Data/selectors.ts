import {State} from '../../../types/state';
import {AppStatus, NameSpace} from '../../../utils/const';

export const getAppStatus = (state : State) : AppStatus => state[NameSpace.App].appStatus;

