import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Header from '../components/header'
import Footer from '../components/footer'
import rehypeReact from "rehype-react"
import SEO from '../components/seo'
import Subscribe from '../components/subscribe'
import Helmet from 'react-helmet'

const renderAst = new rehypeReact({
  createElement: React.createElement
}).Compiler

function index({data}) {
  const show = data.markdownRemark
  return (
    <Layout>
      <SEO
        key={`seo-${show.frontmatter.slug}`}
        postImage={show.frontmatter.featureImage ? show.frontmatter.featureImage : null}
        postData={show}
        isBlogPost
      />
      <Helmet>
        <title>{show.frontmatter.title} | Couple Code Therapy</title>
      </Helmet>
      <Header />
      <Subscribe />
      <Nav show={ { title: show.frontmatter.title, url: show.frontmatter.url } } />
      <div className="show">
        {renderAst(show.htmlAst)}
      </div>
      <Footer />
    </Layout>
  );
}

export default index;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        tags
        slug
        date
        url
      }
    }
  }
`
