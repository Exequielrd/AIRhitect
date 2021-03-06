import Head from "next/head"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <Container id="hero">
      <Head>
        <title>AIRhitect - Inicio</title>

        <meta name="title" content="AIRhitect - Inicio" />
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum similique ipsam a nesciunt blanditiis placeat ducimus! Similique, vero minima! Facilis!"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://air-hitect-eight.vercel.app/"
        />
        <meta property="og:title" content="AIRhitect - Inicio" />
        <meta
          property="og:description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum similique ipsam a nesciunt blanditiis placeat ducimus! Similique, vero minima! Facilis!"
        />
        <meta
          property="og:image"
          content="https://air-hitect-f7u6g28kq-exequielrd.vercel.app/meta-index.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@exequielrd" />
        <meta
          name="twitter:url"
          content="https://air-hitect-eight.vercel.app/"
        />
        <meta name="twitter:title" content="AIRhitect - Inicio" />
        <meta
          name="twitter:description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum similique ipsam a nesciunt blanditiis placeat ducimus! Similique, vero minima! Facilis!"
        />
        <meta
          name="twitter:image"
          content="https://air-hitect-f7u6g28kq-exequielrd.vercel.app/meta-index.webp"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleContainer>
        <BorderTop
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "12rem", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        />
        <MobileTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2, delay: 1.5 }}
        >
          Dedicado <br /> al <br />
          futuro
        </MobileTitle>
        <LargeTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2, delay: 1.5 }}
        >
          Dedicado al futuro
        </LargeTitle>
        <BorderBottom
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "12rem", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        />
      </TitleContainer>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: 2.5 }}
      >
        web template
      </motion.h2>
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
const MobileTitle = styled(motion.h1)`
  width: 100%;
  margin: 2rem 0;
  line-height: 1;

  @media (min-width: 768px) {
    display: none;
  }
`
const LargeTitle = styled(motion.h1)`
  margin: 0 1rem;

  @media (max-width: 767px) {
    display: none;
  }
`
const BorderTop = styled(motion.div)`
  background: rgb(68, 61, 91);
  width: 8rem;
  height: 0.3rem;
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
