import { useState } from "react"
import styled from "styled-components"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import IndexDescription from "../components/IndexDescripion"
import Head from "next/head"

const Works = () => {
  // Index for view images
  const [indexGallery, setIndexGallery] = useState(0)
  const urls = ["/projects1.png", "/projects2.png", "/projects3.png"]

  // Controls for change gallery image
  const leftClick = () => {
    if (indexGallery === 0) {
      return setIndexGallery(3)
    }

    return setIndexGallery(indexGallery - 1)
  }

  const rightClick = () => {
    if (indexGallery === 2) {
      return setIndexGallery(0)
    }

    return setIndexGallery(indexGallery + 1)
  }

  return (
    <Container>
      <Head>
        <title>AIRhitect - Trabajos</title>
        <meta name="description" content="Trabajos de AIRhitect" />
        <meta name="keywords" content="airhitect, Orci, Mexico"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexDescription>Trabajos</IndexDescription>
      <Gallery>
        <Card url={"/projects1.png"}>
          <ProjectDescription>
            <h3>Nombre del proyecto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              cumque?
            </p>
          </ProjectDescription>
        </Card>
        <Card url={"/projects2.png"}>
          <ProjectDescription>
            <h3>Nombre del proyecto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              cumque?
            </p>
          </ProjectDescription>
        </Card>
        <Card url={"/projects3.png"}>
          <ProjectDescription>
            <h3>Nombre del proyecto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              cumque?
            </p>
          </ProjectDescription>
        </Card>
      </Gallery>

      <MobileGallery>
        <Card url={urls[indexGallery]}>
          <ProjectDescription>
            <h3>Nombre del proyecto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              cumque?
            </p>
          </ProjectDescription>
        </Card>
      </MobileGallery>
      <Arrow right={"1rem"} onClick={rightClick}>
        <ArrowForwardIosIcon style={{ fontSize: 30, color: "#eee" }} />
      </Arrow>
      <Arrow left={"1rem"} onClick={leftClick}>
        <ArrowBackIosIcon style={{ fontSize: 30, color: "#eee" }} />
      </Arrow>
    </Container>
  )
}

export default Works

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
const Gallery = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 700px) {
    display: none;
  }
`

const MobileGallery = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 700px) {
    display: none;
  }
`
const Card = styled.figure`
  height: 100%;
  flex: 1;
  border: 1px solid white;
  background: url(${(props) => props.url}) no-repeat;
  background-size: cover;
  position: relative;
  cursor: pointer;
  margin: 0;

  @media (min-width: 700px) {
    :hover {
      > figcaption {
        transform: translateY(0);
      }
    }
  }
`
const ProjectDescription = styled.figcaption`
  width: 100%;
  height: 8rem;
  background: #fff;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  transition: ease-in-out 0.5s;
  padding: 0.5rem;
  color: rgb(68, 61, 91);

  @media (max-width: 700px) {
    transform: translateY(0);
    width: 80%;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
  }
`
const Arrow = styled.button`
  width: 3rem;
  height: 3rem;
  position: absolute;
  background: rgb(68, 61, 91);
  top: 50%;
  transform: translateY(-50%);
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  display: grid;
  place-items: center;
  border-radius: 0.5rem;
  border: none;
`