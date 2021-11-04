import React, {useEffect} from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import {useHistory} from 'react-router-dom';

const Login = ({authService}) => {
  const history = useHistory();
  const goToMaker = (user) => {
    console.log(user.uid);
    history.push({
      pathname: '/maker',
      state: {
        id: user.uid,
        email: user.email
      }
    });
  };
  const onLogin = (e) => {
    authService //
      .login(e.currentTarget.textContent)
      .then((data) => goToMaker(data));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      console.log(user);
      user && goToMaker(user);
    });
  });
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
