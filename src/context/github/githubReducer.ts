import { GithubUser, ReducerState } from '../../types';

export type ACTION_TYPE = 'GET_USERS' | 'SET_USER';

export interface ACTION<T extends GithubUser> {
  type: ACTION_TYPE;
  payload?: T | T[];
}

const githubReducer = <T extends GithubUser>(
  state: ReducerState,
  action: ACTION<T>
): ReducerState => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: Array.isArray(action.payload)
          ? action.payload
          : [action.payload as T], // Ensure array format
        loading: false,
      };

    case 'SET_USER':
      return {
        ...state,
        users: [
          ...state.users,
          ...(Array.isArray(action.payload)
            ? action.payload
            : [action.payload as T]),
        ],
        loading: false,
      };

    default:
      return state;
  }
};

export default githubReducer;
