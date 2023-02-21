import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Navbar from '../navbar';
import SideBarMenu from '../atoms/nav/SideBarMenu';
import {navigationData} from '@/helpers/navigation';

const Layout = ({ children }) => {



  return (
    <>
      <Head>
        <title>Uptick app</title>
        <meta name="description" content="Uptick application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex h-screen">
        <div className='hidden sm:block w-40 bg-gray-200 h-full pt-20 border-r-2 border-gray-300'>
          {navigationData.map(nav => <SideBarMenu menuObject={nav} key={nav.name} />)}
        </div>
        <div className='flex-1 overflow-y-auto pt-20 px-4'>{children}</div>
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
