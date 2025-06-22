import styled from 'styled-components'

const HeroSection = styled.section`
  background-color: #f5f5f5;
  padding: 40px 0;
  text-align: center;
`

const HeroTitle = styled.h2`
  font-size: 24px;
  color: #333;
`

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
`

function Hero() {
  return (
    <HeroSection>
      <Container>
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </Container>
    </HeroSection>
  )
}

export default Hero
