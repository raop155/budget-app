import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import store from '../../store/store';
import { login, logout } from '../../actions/auth';

const useGoogleAuth = () => {
  console.log('useGoogleAuth');
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    console.log('useGoogleAuth useEffect');
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        store.dispatch(login(uid));
        setIsLogin(true);
      } else {
        store.dispatch(logout());
        setIsLogin(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return isLogin;
};

export default useGoogleAuth;
