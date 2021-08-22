import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const Banner = () => {

  const data = useStaticQuery(graphql`
  query {
    spring: file(relativePath: { eq: "spring.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fall: file(relativePath: { eq: "fall.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    winter: file(relativePath: { eq: "winter.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
console.log('the data', data)
const image = getImage(data.fall);
console.log('the data', fall)
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text"> Deep Prajapati</div>
          <div className="main-image">
          <GatsbyImage image={image} alt={"pic of fall"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner