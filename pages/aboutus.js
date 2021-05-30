import Head from "next/head"
import styled from "styled-components"
import IndexDescription from "../components/IndexDescripion"

const AboutUs = () => {
  return (
    <Container>
      <Head>
        <title>AIRhitect - Sobre nosotros</title>
        <title>AIRhitect - Home</title>
        <meta name="title" content="AIRhitect - Home" />
        <meta
          name="description"
          content="Mauris totor leo, volutpat ut lacus at, maximus eleifend dolor.
          Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridicuvlus mus debitis at voluptatem
          cumque consequatur suscipit obcaecati dicta. Quaerat amet, incidunt
          exercitationem earum facere asperiores dicta nobis, maiores est"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://air-hitect-eight.vercel.app/"
        />
        <meta property="og:title" content="AIRhitect - Home" />
        <meta
          property="og:description"
          content="Mauris totor leo, volutpat ut lacus at, maximus eleifend dolor.
          Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridicuvlus mus debitis at voluptatem
          cumque consequatur suscipit obcaecati dicta. Quaerat amet, incidunt
          exercitationem earum facere asperiores dicta nobis, maiores est"
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://air-hitect-eight.vercel.app/"
        />
        <meta property="twitter:title" content="AIRhitect - Home" />
        <meta
          property="twitter:description"
          content="Mauris totor leo, volutpat ut lacus at, maximus eleifend dolor.
          Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridicuvlus mus debitis at voluptatem
          cumque consequatur suscipit obcaecati dicta. Quaerat amet, incidunt
          exercitationem earum facere asperiores dicta nobis, maiores est"
        />
        <meta property="twitter:image" content="/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexDescription>Sobre nosotros</IndexDescription>
      <Text>
        <Border />
        <article>
          Mauris totor leo, volutpat ut lacus at, maximus eleifend dolor.{" "}
          <strong>Orci varius natoque penatibus et magnis dis</strong>{" "}
          parturient montes, nascetur ridicuvlus mus debitis at voluptatem
          cumque consequatur suscipit obcaecati dicta. Quaerat amet, incidunt
          exercitationem earum facere asperiores dicta nobis, maiores est
        </article>
        <Border />
        <TextBottom>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque eos
            veritatis dolor, at corrupti vel repellendus quidem debitis fugiat
            odio?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque eos
            veritatis dolor, at corrupti vel repellendus quidem debitis fugiat
            odio?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque eos
            veritatis dolor, at corrupti vel repellendus quidem debitis fugiat
            odio?
          </p>
        </TextBottom>
      </Text>
    </Container>
  )
}

export default AboutUs

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  background: whitesmoke;
  padding: 8rem 1rem;
  display: grid;
  place-items: center;
`
const Text = styled.section`
  width: 100%;
  max-width: 40rem;
  color: rgb(68, 61, 91);
  text-align: center;

  > article {
    font-weight: 400;
    font-size: 1.5rem;
    overflow-wrap: break-word;
    padding: 1rem 0;
  }
`
const TextBottom = styled.aside`
  display: flex;
  margin: 2rem 0;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`
const Border = styled.div`
  width: 15rem;
  height: 0.1rem;
  background: rgb(68, 61, 91);
  margin: auto;
  border-radius: 0.2rem;

  @media (max-width: 700px) {
    display: none;
  }
`
