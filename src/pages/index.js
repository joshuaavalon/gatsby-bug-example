import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              html
            }
          }
        }
      }
    `
  )
  const { html } = allMarkdownRemark.edges[0].node
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
