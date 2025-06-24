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
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  border-radius: 8px;
  transition: all ease 0.3s;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria;

    a {
      border-color: var(--cor-principal);
      background-color: var(--cor-secundaria);
      color: var(--cor-principal);
    }
  }
`

const Titulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

const LinkDetalhes = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
const ListaDetalhes = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

function Vaga(props: Props) {
  return (
    <VagaItem>
      <Titulo>{props.titulo}</Titulo>
      <ListaDetalhes>
        <li>Localização: {props.localizacao}</li>
        <li>Senioridade: {props.nivel}</li>
        <li>Tipo de contratação: {props.modalidade}</li>
        <li>
          Salário: {props.salarioMin} - {props.salarioMax}
        </li>
        <li>Requisitos: {props.requisitos.join(', ')}</li>
      </ListaDetalhes>
      <LinkDetalhes href="#">Ver detalhes e candidatar-se</LinkDetalhes>
    </VagaItem>
  )
}

export default Vaga
