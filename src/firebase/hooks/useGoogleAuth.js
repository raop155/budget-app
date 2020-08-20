import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import store from '../../store/store';
import { login, logout } from '../../actions/auth';

const useGoogleAuth = () => {
  console.log('useGoogleAuth');
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    console.log('useGoogleAuth useEffect');
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const uid = user.uid;
        setIsLogin(true);
        store.dispatch(login(uid));
      } else {
        setIsLogin(false);
        store.dispatch(logout());
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return isLogin;
};

export default useGoogleAuth;
