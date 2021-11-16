import {useQuery, useMutation} from 'react-query';
import {me, signin, signup} from '../services/auth';

export const useSignup = mutationOptions => {
  return useMutation(newUser => signup(newUser), mutationOptions);
};

export const useSignin = mutationOptions => {
  return useMutation(user => signin(user), mutationOptions);
};

export const useMe = token => {
  return useQuery(['me', token], async () => {
    const {data} = await me(token);
    return data.data;
  });
};
