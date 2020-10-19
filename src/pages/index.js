import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Postlink from "../components/Postlink"
import {graphql} from 'gatsby'
import Seo from "../components/Seo"

export default function Home({data}) {
  return (
    <Layout>
      <Seo title='Dev Blog' description='Gatsbyを使って作ったブログです！' />
      <Hero />
      {
        data.allContentfulPost.edges.map(edge => {
          return <Postlink key={edge.node.slug} post={edge.node} />
        })
      }
    </Layout>
  )
}

export const query = graphql`
  query allContentfulPost {
    allContentfulPost {
      edges {
        node {
          title
          image {
            title
            file {
              url
            }
          }
          description {
            description
          }
          slug
          updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
        }
      }
    }
  }
`