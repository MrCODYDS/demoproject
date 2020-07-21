import React from "react"
import '../styles/styles.scss'

// Import components
import Header from '../components/header';
import Banner from '../components/banner';
import About from '../components/about';
import Skills from '../components/skills';

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <About />
    <Skills />
  </div>
)

export default IndexPage
