import React from 'react';
import styles from '../styles/CtaBtn.module.css';

const CtaBtn = () => {
  //TODO: Figure out how to send email from <button> for semantic clairty
  function handleEmail() {
    console.log('the button was clicked!');
  }

  return (
    <button className={styles.ctaBtn} onClick={handleEmail}>
      zachcos@gmail.com
    </button>
  );
};

export default CtaBtn;
