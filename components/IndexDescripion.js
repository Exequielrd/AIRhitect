import styled from "styled-components"

const IndexDescripion = ({ children }) => {
  return <Index>{children}</Index>
}

export default IndexDescripion

const Index = styled.div`
  background: #fff;
  font-size: 1rem;
  font-weight: 700;
  color: rgb(68, 61, 91);
  position: fixed;
  top: 4rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  z-index: 5;
  left: 1rem;
`
