import React from 'react';
import styles from '../styles/CtaBtn.module.css';

const CtaBtn = () => {
  function handleEmail() {
    window.location.href = 'mailto: Zachcos@gmail.com?subject=Hey Zach!';
  }

  return (
    <button className={styles.ctaBtn} onClick={handleEmail}>
      zachcos@gmail.com
    </button>
  );
};

export default CtaBtn;
