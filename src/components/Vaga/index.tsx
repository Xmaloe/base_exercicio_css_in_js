import styled from 'styled-components'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const VagaItem = styled.li`
  border: 5px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  list-style: none;
`

const Titulo = styled.h3`
  margin-bottom: 8px;
  color: #333;
`

const Detalhes = styled.ul`
  margin-bottom: 8px;
  padding-left: 16px;

  li {
    margin-bottom: 4px;
  }
`

const LinkDetalhes = styled.a`
  display: inline-block;
  margin-top: 8px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

function Vaga(props: Props) {
  return (
    <VagaItem>
      <Titulo>{props.titulo}</Titulo>
      <Detalhes>
        <li>Localização: {props.localizacao}</li>
        <li>Senioridade: {props.nivel}</li>
        <li>Tipo de contratação: {props.modalidade}</li>
        <li>
          Salário: {props.salarioMin} - {props.salarioMax}
        </li>
        <li>Requisitos: {props.requisitos.join(', ')}</li>
      </Detalhes>
      <LinkDetalhes href="#">Ver detalhes e candidatar-se</LinkDetalhes>
    </VagaItem>
  )
}

export default Vaga
