import React from 'react';

import styles from '../../styles/Home.module.css';
import Navbar from '../navbar';

const WhatIfs = ({ children }) => {
  return (
    <>
      <Navbar />

      <main className={styles.main}>{children}</main>
    </>
  );
};

export default WhatIfs;
