import { Container } from './styles'

import logoImg from '../../assets/logo.svg'
import chartIcon from '../../assets/chart.svg'
import shovelIcon from '../../assets/shovel.svg'
import targetIcon from '../../assets/target.svg'
import cartIcon from '../../assets/cart.svg'
import userIcon from '../../assets/user.svg'
import billIcon from '../../assets/bill.svg'
import cogIcon from '../../assets/cog.svg'
import signOutIcon from '../../assets/signOut.svg'

export function AsideShort() {
  return (
    <Container>
      <img src={logoImg} alt='Paytient' />
      <nav>
        <ul>
          <li>
            <img src={chartIcon} />
            <a href='#'>
              Dashboard
            </a>
          </li>

          <li>
            <img src={shovelIcon} />
            <a href='#'>
              Leads
            </a>
          </li>

          <li>
            <img src={targetIcon} />
            <a href='#'>
              Campanhas
            </a>
          </li>

          <li>
            <img src={cartIcon} />
            <a href='#'>
              Vendas
            </a>
          </li>

          <li>
            <img src={userIcon} />
            <a href='#'>
              Clientes
            </a>
          </li>

          <li>
            <img src={billIcon} />
            <a href='#'>
              Cobrança
            </a>
          </li>

          <li>
            <img src={cogIcon} />
            <a href='#'>
              Configurações
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <img src={signOutIcon} />
        <a href='#'>Sair</a>
      </div>
    </Container>
  )
}