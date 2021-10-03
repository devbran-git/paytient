import { Container } from './styles'

import { Dashboard } from '../Dashboard'
import { Header } from '../Header'

export interface TypeProps {
  isActive: boolean
  isOpened: boolean
  handleProfileOptions: () => void
  handleToggleMenu: () => void
}

export function Content(props: TypeProps) {

  const {
    isActive,
    isOpened,
    handleProfileOptions,
    handleToggleMenu
  } = props

  return (
    <Container>
      <Header
        handleToggleMenu={handleToggleMenu}
        handleProfileOptions={handleProfileOptions}
      />

      <Dashboard
        isOpened={isOpened}
        isActive={isActive}
      />
    </Container>
  )
}