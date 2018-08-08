import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Header from '../components/header'
import SEO from '../components/seo'
import Footer from '../components/footer'

const ContactPage = ({data}) => {

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
        <title>Couple Code therapy | Contact </title>
      </Helmet>
      <Header />
      <Nav show={{title: latestShow.frontmatter.title, url: latestShow.frontmatter.url}} />
      <div className='contact section'>
        <h1>Contact</h1>
        <p>Wanna say hi? or have a question</p>
        <form name='contact' className='contact__form' method='post' data-netlify>

          <input type="hidden" name="form-name" value="contact" />
          <label for='name'>
            Name
            <input id='name' name='name' type='text' />
          </label>
          <label for='email'>
          Email
          <input id='email' name='email' type='email' />
        </label>
        <label for='name'>
        Message
        <textarea id='name' name='message'/>
      </label>
      <button>Send</button>
      </form>
      </div>
      <Footer />
      </Layout>
  )
}
export default ContactPage
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
