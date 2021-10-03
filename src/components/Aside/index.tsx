import { Container } from './styles'

import shovelImg from '../../assets/shovel.svg'
import targetImg from '../../assets/target.svg'
import billImg from '../../assets/bill.svg'

import { FaChartBar, FaRegUser, FaSignOutAlt } from "react-icons/fa"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { BiCog } from "react-icons/bi"

export function Aside() {
  return (
    <Container>
      <nav>
        <div>
          <FaChartBar className='active' />
          <a href='#' className='active'>Dashboard</a>
        </div>

        <div>
          <img src={shovelImg} />
          <a href='#'>Leads</a>
        </div>

        <div>
          <img src={targetImg} />
          <a href='#'>Campanhas</a>
        </div>

        <div>
          <HiOutlineShoppingCart className='thin-icons' />
          <a href='#'>Vendas</a>
        </div>

        <div>
          <FaRegUser className='client' />
          <a href='#'>Clientes</a>
        </div>

        <div>
          <img src={billImg} />
          <a href='#'>Cobrança</a>
        </div>

        <div>
          <BiCog className='thin-icons' />
          <a href='#'>Configurações</a>
        </div>
      </nav>

      <div className='aside-footer'>
        <FaSignOutAlt />
        <a href='#'>Sair</a>
      </div>
    </Container>
  )
}