import { createContext, useReducer } from 'react';

import { GlobalState } from '../../types';
import { GithubUser } from '../../types';
const githubToken = import.meta.env.VITE_GITHUB_API_TOKEN;
const githubUrl = import.meta.env.VITE_GITHUB_URL;
import githubReducer from './githubReducer';
import { ReducerState } from '../../types';
//Defining the global state
const GithubContext = createContext<GlobalState | null>(null);

export const GithubProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: ReducerState = {
    loading: false,
    users: [],
  };
  const [state, dispatch] = useReducer(
    githubReducer<GithubUser>, // Specify GithubUser as T
    initialState
  );

  //this could be cosndere disaptch fucntion
  const fetchUser = async () => {
    try {
      const res = await fetch(`${githubUrl}/users`, {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      });
      const data: GithubUser[] = await res.json();
      dispatch({ type: 'GET_USERS', payload: data });
    } catch (error) {
      console.error('Something went worng', error);
    }
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        fetchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
