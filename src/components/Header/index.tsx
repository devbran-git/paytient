import { Container, Logo, HeaderMain } from './styles'

import logoImg from '../../assets/fullLogo.svg'
import profileImg from '../../assets/profile.png'
import { CgMenu } from "react-icons/cg"
import { ActivityIcons } from '../ActivityIcons'


export function Header() {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt='Paytient' />
      </Logo>

      <HeaderMain>
        <CgMenu size={21} />

        <div>
          <ActivityIcons />
          <img src={profileImg} alt='Profile' />
        </div>
      </HeaderMain>
    </Container>
  )
}