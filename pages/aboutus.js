import Head from "next/head"
import styled from "styled-components"
import IndexDescription from "../components/IndexDescripion"

const AboutUs = () => {
  return (
    <Container>
      <Head>
        <title>AIRhitect - Sobre nosotros</title>

        <meta name="title" content="AIRhitect - Sobre nosotros" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://air-hitect-eight.vercel.app/aboutus"
        />
        <meta property="og:title" content="AIRhitect - Sobre nosotros" />
        <meta
          property="og:description"
          content="Mauris totor leo, volutpat ut lacus at, maximus eleifend dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridicuvlus mus debitis at voluptatem cumque consequatur suscipit obcaecati dicta. Quaerat amet, incidunt exercitationem earum facere asperiores dicta nobis, maiores est"
        />
        <meta
          property="og:image"
          content="https://air-hitect-f7u6g28kq-exequielrd.vercel.app/meta-aboutus.webp"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@exequielrd" />
        <meta
          name="twitter:url"
          content="https://air-hitect-eight.vercel.app/"
        />
        <meta name="twitter:title" content="AIRhitect - Sobre nosotros" />
        <meta
          name="twitter:description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum similique ipsam a nesciunt blanditiis placeat ducimus! Similique, vero minima! Facilis!"
        />
        <meta
          name="twitter:image"
          content="https://air-hitect-f7u6g28kq-exequielrd.vercel.app/meta-aboutus.webp"
        />
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
