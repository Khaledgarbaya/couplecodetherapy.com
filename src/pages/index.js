import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Header from '../components/header'
import Show from '../components/show'
import Footer from '../components/footer'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Subscribe from '../components/subscribe'
import Helmet from 'react-helmet';

function index({ data }) {
  const latestShow = data.allMarkdownRemark.edges[0].node
  return (
    <Layout>
    <SEO
        key={`seo-home`}
        postData={
          {
          }
        }
      />
      <Helmet>
        <title>Code Therapies for teaching web development for absolute beginner | Couple Code therapy</title>
      </Helmet>
      <Header />
      <Subscribe />
      <Nav show={{title: latestShow.frontmatter.title, url: latestShow.frontmatter.url}} />
      <div className="blog-posts section">
        <h1 className="blog-posts__header section__header h1">Latest therapies</h1>
        { data.allMarkdownRemark.edges.map((edge, index)=> <Show node={edge.node} key={index}/>) }
      </div> 
      <Footer />
    </Layout>
  );
}

export default index;
export const pageQuery = graphql`
        {
          allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { publish: { eq: true } } }
          ) {
            edges {
              node {
                frontmatter {
                  tags
                  title
                  url
                  slug
                  date
                }
                excerpt
              }
            }
          }
        }

`
