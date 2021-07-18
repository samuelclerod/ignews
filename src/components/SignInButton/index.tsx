import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss';

export const SignInButton = () => {

  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <button
      type="button"
      className={styles.sighInButton}
    >
      <FaGithub color="#04d361" />
      Samuel Rodrigues
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.sighInButton}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>

  );
}