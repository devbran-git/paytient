import { Container } from './styles'

import { Aside } from '../Aside'
import { Dashboard } from '../Dashboard'

export function Content() {
  return (
    <Container>
      <Aside />
      <Dashboard />
    </Container>
  )
}