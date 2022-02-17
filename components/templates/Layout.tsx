import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Navbar from '../navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Uptick app</title>
        <meta name="description" content="Uptick application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="">{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
