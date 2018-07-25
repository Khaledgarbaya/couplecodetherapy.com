import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Header from '../components/header'
import FeaturedPosts from '../components/featured-posts'
import InstagramFeed from '../components/instagram-feed'
import About from '../components/about'
import Footer from '../components/footer'

function index({...props}) {
return (
  <Layout>
    <Header />
    <Nav />
    <FeaturedPosts />
    <About />
    <Footer />
  </Layout>
  );
}

export default index;
