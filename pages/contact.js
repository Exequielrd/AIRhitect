import styled from "styled-components"
import Image from "next/image"
import IndexDescription from "../components/IndexDescripion"
import { IconButton, TextField } from "@material-ui/core"
import Navbar from "../components/navbar"
import Head from "next/head"
import Snackbar from "@material-ui/core/Snackbar"
import { useState } from "react"
import CloseIcon from "@material-ui/icons/Close"

const Contact = () => {
  const [open, setOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  return (
    <Container>
      <Head>
        <title>AIRhitect - Contacto</title>
        <meta name="description" content="Cotacta con AIRhitect" />
        <meta name="keywords" content="airhitect, contacto, Mexico"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar white={true} />

      <IndexDescription>Contactanos</IndexDescription>

      <ContactInfo>
        <Info>
          <FirstSection>
            <h2>Contactanos via email, telefono o en nuestras oficinas</h2>
            <li>
              <Image src="/email.png" alt="email" width={25} height={20} />
              <span>info@airhitect.com</span>
            </li>
            <li>
              <Image src="/phone.png" alt="email" width={25} height={20} />
              <span>
                +12 34 567 890
                <br />
                +09 87 654 321
              </span>
            </li>
            <li>
              <Image src="/house.png" alt="house" width={25} height={20} />
              <span>
                1012 Budapest <br /> Marvany utca 16
              </span>
            </li>
          </FirstSection>

          <HiringSection>
            <Social>
              <Image src="/linkedin.png" alt="google+" width={30} height={30} />
              <Image src="/facebook.png" alt="google+" width={30} height={30} />
              <Image
                src="/instagram.png"
                alt="google+"
                width={30}
                height={30}
              />
              <Image
                src="/google-plus.png"
                alt="google+"
                width={35}
                height={30}
              />
            </Social>
            <h2>Trabaja con nosotros</h2>
            <p>
              ¡Estamos en la busqueda de nuevos talentos para formar parte de
              nuesro equipo! Si crees que eres la persona correcta para
              AIRhitect envianos un email con tu CV y tu portafolio. No olvides
              escribir algo sobre ti!
            </p>
          </HiringSection>
        </Info>
        <Form>
          <Input id="standard-basic" label="Nombre" />
          <Input id="standard-basic" label="Email" />
          <br />
          <Input id="standard-basic" label="Asunto" />
          <Input
            id="standard-multiline-flexible"
            multiline
            rowsMax={4}
            label="Mensaje"
          />
          <Button onClick={handleClick}>Enviar</Button>
        </Form>
      </ContactInfo>
      <Map />
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Mensaje enviado corectamente!"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Container>
  )
}

export default Contact

const Container = styled.footer`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  background: rgb(68, 61, 91);
  overflow: auto;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const ContactInfo = styled.div`
  width: 60%;
  padding: 8rem 2rem 4rem 3rem;
  color: #eee;

  @media (max-width: 800px) {
    width: 100%;
  }
`
const Info = styled.section`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`
const FirstSection = styled.article`
  width: 50%;
  padding-right: 2rem;

  > h2 {
    font-size: 1.1rem;
  }

  li {
    list-style: none;
    margin: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 0.8rem;

    > span {
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`
const Social = styled.li`
  width: 100%;
  max-width: 15rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`
const Map = styled.figure`
  width: 40%;
  height: 100vh;
  background: url("/map.png");
  background-size: cover;
  background-position: right;
  margin: 0;

  @media (max-width: 800px) {
    width: 100%;
  }
`
const HiringSection = styled.article`
  width: 50%;
  p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }

  h2 {
    margin: 0.5rem 0;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const Input = styled(TextField)`
  width: 100%;

  input,
  textarea {
    color: #eee;
  }

  label,
  label::before,
  label:focus {
    color: #fff;
  }

  div::after,
  div::before {
    border-bottom: 2px solid #fff;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #fff;
  }
`
const Button = styled.button`
  border: none;
  background: whitesmoke;
  color: #333;
  width: 10rem;
  height: 2rem;
  margin-top: 1rem;
  font-weight: 600;
  border-radius: 0.2rem;
  cursor: pointer;

  :hover {
    filter: brightness(0.8);
  }
`
