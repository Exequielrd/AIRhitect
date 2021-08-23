import React from "react"
import styled from "styled-components"
import Hero from "../components/Hero"
import AboutUs from "../components/Aboutus"
import Works from "../components/Works"
import Team from "../components/Team"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <Container>
      <Hero />
      <AboutUs />
      <Works />
      <Team />
      <Contact />
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
`
