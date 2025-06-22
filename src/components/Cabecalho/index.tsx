import styled from 'styled-components'

const CabecalhoEstilizado = styled.header`
  background-color: #0c2461;
  color: white;
  padding: 20px;
  text-align: center;
`

function Header() {
  return (
    <CabecalhoEstilizado>
      <h1>EBAC Jobs</h1>
    </CabecalhoEstilizado>
  )
}

export default Header
