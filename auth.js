import { AsyncStorage } from 'react-native';

export const USER_KEY = 'auth-demo-key';

export const onSignIn = (token) => AsyncStorage.setItem(USER_KEY, token);

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(token => {
        if(!token) {
          reject(false);
        }
        resolve(token);
      })
      .catch(err => reject(err));
  })
}