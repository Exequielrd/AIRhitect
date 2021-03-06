import { useState } from "react"
import styled from "styled-components"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import Head from "next/head"
import CloseIcon from "@material-ui/icons/Close"

const Works = () => {
  // Index for view images
  const [indexGallery, setIndexGallery] = useState(0)
  const urls = ["/projects1.png", "/projects2.png", "/projects3.png"]

  //Pop up state
  const [open, setOpen] = useState(false)

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

  //Popup handle
  const handleOpen = (i) => {
    setOpen(true)
    setIndexGallery(i)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container id="works">
      <Head>
        <title>AIRhitect - Trabajos</title>
        <meta name="description" content="Trabajos de AIRhitect" />
        <meta name="keywords" content="airhitect, Orci, Mexico"></meta>

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://air-hitect-eight.vercel.app/works"
        />
        <meta property="og:title" content="AIRhitect - Trabajos" />
        <meta
          property="og:description"
          content="Mauris totor leo, volutpat ut lacus at, maximus eleifend dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridicuvlus mus debitis at voluptatem cumque consequatur suscipit obcaecati dicta. Quaerat amet, incidunt exercitationem earum facere asperiores dicta nobis, maiores est"
        />
        <meta
          property="og:image"
          content="https://air-hitect-f7u6g28kq-exequielrd.vercel.app/project1.png"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@exequielrd" />
        <meta
          name="twitter:url"
          content="https://air-hitect-eight.vercel.app/works"
        />
        <meta name="twitter:title" content="AIRhitect - Trabajos" />
        <meta
          name="twitter:description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum similique ipsam a nesciunt blanditiis placeat ducimus! Similique, vero minima! Facilis!"
        />
        <meta
          name="twitter:image"
          content="https://air-hitect-f7u6g28kq-exequielrd.vercel.app/projects1.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Gallery>
        <Card url={"/projects1.png"} onClick={() => handleOpen(0)}>
          <ProjectDescription>
            <h3>Nombre del proyecto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              cumque?
            </p>
          </ProjectDescription>
        </Card>
        <Card url={"/projects2.png"} onClick={() => handleOpen(1)}>
          <ProjectDescription>
            <h3>Nombre del proyecto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              cumque?
            </p>
          </ProjectDescription>
        </Card>
        <Card url={"/projects3.png"} onClick={() => handleOpen(2)}>
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
        <Card url={urls[indexGallery]} onClick={() => handleOpen(indexGallery)}>
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
      {open && (
        <ModalContainer onClick={handleClose}>
          <Modal>
            <img src={urls[indexGallery]} alt="proyecto" />
            <figcaption>
              <h2>Nombre del proyecto</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit nam
                curabitur sollicitudin egestas dis facilisis, luctus nulla sed
                non quam tempus congue suscipit euismod turpis nisi libero.
                Morbi placerat litora mollis odio tincidunt leo magna pulvinar
                ultrices, mauris imperdiet vel ultricies risus metus eros ac,
                aptent auctor pharetra facilisis nec euismod ligula sodales.
                Feugiat ad montes bibendum quis ac nullam neque metus
                pellentesque pulvinar, tristique cubilia litora viverra magna
                sodales quam fusce interdum, quisque nec sollicitudin accumsan
                dapibus enim suscipit sociosqu rutrum.
              </p>
            </figcaption>
            <Close onClick={handleClose} />
          </Modal>
        </ModalContainer>
      )}
    </Container>
  )
}

export default Works

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
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
const Modal = styled.div`
  width: 100%;
  max-width: 55rem;
  height: 30rem;
  background: #fff;
  display: flex;
  position: relative;

  > img {
    height: 100%;
    width: 60%;
    object-fit: cover;
  }

  > figcaption {
    width: 40%;
    color: rgb(68, 61, 91);
    padding: 0 2rem;
    overflow: scroll;

    > h2 {
      text-align: center;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    height: 100vh;

    > img {
      height: 60%;
      width: 100%;
      object-fit: cover;
    }

    > figcaption {
      width: 100%;
      padding: 0 1rem;
    }
  }
`
const Close = styled(CloseIcon)`
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  cursor: pointer;
`
const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 100;
  top: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.8);
`
