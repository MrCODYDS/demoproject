import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const About = () => {
    const data = useStaticQuery(graphql`
        query {
            about: file(relativePath: { eq: "desmetyarne.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <div className="about py-4 py-md-5" id="about">
            <div className="container">
                <div className="about-inner row d-flex align-items-center">
                    <div className="about-inner--img col-5">
                        <Img fluid={data.about.childImageSharp.fluid}></Img>
                    </div>
                    <div className="about-inner--text col-6 offset-1">
                        <p className="about-inner--text--top">Find more about me</p>
                        <h3 className="about-inner--text--middle">Hi there!</h3>
                        <div className="divider mb-4"></div>
                        <div className="about-inner--text--bottom">
                            <p>My name is Yarne De Smet. I’m born on the 17th of august 1998 in Lier, Belgium. Currently I am studying Multimedia and Communication Technology at KdG Hoboken with Web & Ux as my main subject.</p>
                            <p>I have already worked at various companies where my great interest in web design and development certainly came in handy and as a result I was able to broaden my knowledge.</p>
                            <p>Apart from the work-related activities, I also have hobbies such as badminton, snowboarding, cycling, photo and video editing and gaming.</p>
                            <p>Do not hesitate to contact me for questions about me, work or other things that I can help with!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About