import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Header from '../components/header'
import Footer from '../components/footer'

function index({...props}) {
return (
  <Layout>
    <Header />
    <Nav />
    <Footer />
  </Layout>
  );
}

export default index;
