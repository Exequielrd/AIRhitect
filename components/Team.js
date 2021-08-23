import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"

const Team = () => {
  return (
    <Container>
      <Head>
        <title>AIRhitect - Equipo</title>
        <meta name="description" content="Equipo de AIRhitect" />
        <meta name="keywords" content="airhitect, equipo, Mexico"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PersonContainer>
        <PersonCard>
          <Photo>
            <Image src="/person.png" alt="name" width={80} height={80} />
          </Photo>
          <h3>Nombre del empleado</h3>
          <h5>CEO</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam at
            iste error incidunt adipisci et iure quos est voluptates nisi.
          </p>
        </PersonCard>
        <PersonCard>
          <Photo>
            <Image src="/person.png" alt="name" width={80} height={80} />
          </Photo>
          <h3>Nombre del empleado</h3>
          <h5>CEO</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam at
            iste error incidunt adipisci et iure quos est voluptates nisi.
          </p>
        </PersonCard>
        <PersonCard>
          <Photo>
            <Image src="/person.png" alt="name" width={80} height={80} />
          </Photo>
          <h3>Nombre del empleado</h3>
          <h5>CEO</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam at
            iste error incidunt adipisci et iure quos est voluptates nisi.
          </p>
        </PersonCard>
        <PersonCard>
          <Photo>
            <Image src="/person.png" alt="name" width={80} height={80} />
          </Photo>
          <h3>Nombre del empleado</h3>
          <h5>CEO</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam at
            iste error incidunt adipisci et iure quos est voluptates nisi.
          </p>
        </PersonCard>
        <PersonCard>
          <Photo>
            <Image src="/person.png" alt="name" width={80} height={80} />
          </Photo>
          <h3>Nombre del empleado</h3>
          <h5>CEO</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam at
            iste error incidunt adipisci et iure quos est voluptates nisi.
          </p>
        </PersonCard>
      </PersonContainer>
    </Container>
  )
}

export default Team

const Container = styled.aside`
  width: 100vw;
  display: grid;
  place-items: center;
  padding: 10rem 1rem 5rem 1rem;
`
const PersonContainer = styled.div`
  width: 100%;
  min-width: 10rem;
  max-width: 70rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
`
const PersonCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: rgb(68, 61, 91);

  > h3,
  h5,
  > p {
    margin: 0.2rem;
    text-align: center;
  }
`
const Photo = styled.figure`
  width: 8rem;
  height: 8rem;
  margin: auto;
  border-radius: 50%;
  background: whitesmoke;
  display: grid;
  place-items: center;
`
