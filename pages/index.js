import Head from "next/head"
import styled from "styled-components"

export default function Home() {
  return (
    <Container>
      <Head>
        <title>AIRhitect - Inicio</title>
        <title>AIRhitect - Inicio</title>
        <meta name="title" content="AIRhitect - Inicio" />
        <meta name="description" content="hola como estas todo bien" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://air-hitect-eight.vercel.app/"
        />
        <meta property="og:title" content="AIRhitect - Inicio" />
        <meta property="og:description" content="hola como estas todo bien" />
        <meta property="og:image" content="/meta-index.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://air-hitect-eight.vercel.app/"
        />
        <meta property="twitter:title" content="AIRhitect - Inicio" />
        <meta
          property="twitter:description"
          content="hola como estas todo bien"
        />
        <meta property="twitter:image" content="/meta-index.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitleContainer>
        <BorderTop />
        <MobileTitle>
          Dedicado <br /> al <br />
          futuro
        </MobileTitle>
        <LargeTitle>Dedicado al futuro</LargeTitle>
        <BorderBottom />
      </TitleContainer>
      <h2>web template</h2>
    </Container>
  )
}

const Container = styled.header`
  width: 100vw;
  height: 100vh;
  background: url("/background_hero.webp") center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    color: rgb(68, 61, 91);
    font-size: 3rem;
    margin: 0;
    font-weight: 300;

    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    background: url("/background_hero_mobile.webp");
    background-size: cover;
  }
`
const TitleContainer = styled.div`
  width: 100%;
  max-width: 100rem;
  color: rgb(68, 61, 91);
  font-size: 1.8rem;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;
  }
`
const MobileTitle = styled.h1`
  width: 100%;
  margin: 2rem 0;
  line-height: 1;

  @media (min-width: 768px) {
    display: none;
  }
`
const LargeTitle = styled.h1`
  margin: 0 1rem;

  @media (max-width: 767px) {
    display: none;
  }
`
const BorderTop = styled.div`
  background: rgb(68, 61, 91);
  width: 8rem;
  height: 0.31rem;
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    width: 12rem;
    position: static;
    transform: translateX(0%);
  }
`

const BorderBottom = styled(BorderTop)`
  bottom: 0;
`
