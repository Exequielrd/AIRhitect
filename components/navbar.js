import styled from "styled-components"
import Image from "next/image"
import { Turn as Hamburger } from "hamburger-react"
import { useState } from "react"
import Button from "@material-ui/core/Button"
import Link from "next/link"

const Navbar = ({ white }) => {
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(false)
  }

  return (
    <Container>
      <HamburgerContainer>
        <Button>
          <Hamburger toggled={isOpen} toggle={setOpen} size={18} />
        </Button>
      </HamburgerContainer>
      <LogoContainer>
        <Link href="/">
          <a>
            <Image
              src={white ? "/white_logo.png" : "/logo.png"}
              alt="logo"
              width={150}
              height={25}
            />
          </a>
        </Link>
      </LogoContainer>
      <ContactButton>
        <Link href="/contact">
          <a>
            <Button>
              <FirstCircle src="/circle.svg" alt="" width={15} height={15} />
              <Image src="/circle.svg" alt="" width={15} height={15} />
              Contactar
            </Button>
          </a>
        </Link>
      </ContactButton>
      {isOpen && (
        <Menu>
          <Link href="/">
            <a onClick={handleClick}>Inicio</a>
          </Link>
          <Link href="/aboutus">
            <a onClick={handleClick}>Sobre nosotros</a>
          </Link>
          <Link href="/works">
            <a onClick={handleClick}>Trabajos</a>
          </Link>
          <Link href="/team">
            <a onClick={handleClick}>Nuestro equipo</a>
          </Link>
          <Link href="/contact">
            <a onClick={handleClick}>Contactanos</a>
          </Link>
        </Menu>
      )}
    </Container>
  )
}

export default Navbar

const Container = styled.nav`
  width: 100vw;
  height: 4rem;
  background: transparent;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 1rem;
  z-index: 10;
`
const LogoContainer = styled.div`
  width: 8rem;
  margin: auto;
`
const HamburgerContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
const ContactButton = styled.div`
  background: #fff;
  border-radius: 0.5rem;

  * {
    color: rgb(68, 61, 91);
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const FirstCircle = styled(Image)`
  transform: translateX(0.4rem);
`
const Menu = styled.div`
  background: white;
  width: 14rem;
  height: 15rem;
  position: fixed;
  top: 4.5rem;
  display: flex;
  flex-direction: column;

  a {
    width: 100%;
    height: 4rem;
    color: red;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    color: rgb(68, 61, 91);
    font-size: 0.9rem;

    :hover {
      background: whitesmoke;
    }
  }
`
