import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css'
import Navbar from '../navbar'

const WhatIfs = ({children}) => {
  const { query } = useRouter();
  const [selectedSection, setSelectedSection] = useState(query.page);
  useEffect(() => {
    setSelectedSection(query.page);
  }, [query.page]);

  return (
      <>
        <Navbar />
          
       <main className={styles.main}>

        {children}
       </main>
      </>
  );
};

export default WhatIfs;
