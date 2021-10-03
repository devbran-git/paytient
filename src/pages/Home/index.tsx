import { useState } from 'react'
import { Container } from './styles'

import { Content } from '../../components/Content'
import { Aside } from '../../components/Aside'
import { AsideShort } from '../../components/AsideShort'

export function Home() {
  const [isOpened, setIsOpened] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const handleToggleMenu = () => setIsOpened(!isOpened)
  const handleProfileOptions = () => setIsActive(!isActive)

  return (
    <Container>
      {isOpened ?
        <Aside />
        :
        <AsideShort />
      }
      <Content
        handleToggleMenu={handleToggleMenu}
        handleProfileOptions={handleProfileOptions}
        isOpened={isOpened}
        isActive={isActive}
      />
    </Container>
  )
}