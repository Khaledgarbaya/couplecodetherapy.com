import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Header from '../components/header'
import Show from '../components/show'
import About from '../components/about'
import Footer from '../components/footer'
import { graphql } from 'gatsby'

function index({ data }) {
  const latestShow = data.allMarkdownRemark.edges[0].node
  return (
    <Layout>
      <Header />
      <Nav show={{title: latestShow.frontmatter.title, url: latestShow.frontmatter.url}} />
      <div className="blog-posts section">
        <h2 className="blog-posts__header section__header h1">Latest therapies</h2>
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
