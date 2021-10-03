import { Container, HeaderMain } from './styles'

import profileImg from '../../assets/profile.png'
import { CgMenu } from "react-icons/cg"
import { ActivityIcons } from '../ActivityIcons'


import { TypeProps } from '../Content'

interface HandlesProps extends Partial<TypeProps> {
  handleToggleMenu: () => void
  handleProfileOptions: () => void
}

export function Header({ handleToggleMenu, handleProfileOptions }: HandlesProps) {
  return (
    <Container>
      <HeaderMain>
        <button onClick={handleToggleMenu}>
          <CgMenu size={21} />
        </button>

        <div>
          <ActivityIcons />
          <button onClick={handleProfileOptions}>
            <img src={profileImg} alt='Profile' />
          </button>
        </div>
      </HeaderMain>
    </Container>
  )
}