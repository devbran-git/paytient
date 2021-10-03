import { Container } from './styles'

import { Header } from '../../components/Header'
import { Content } from '../../components/Content'

export function Home() {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  )
}