import { Container } from './styles'

import {
  FaSortUp,
  FaRegUser,
  FaSortDown,
  FaDollarSign,
  FaExchangeAlt,
} from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi'

export function Summary() {
  return (
    <Container>
      <div className='cards-wrapper'>
        <div className='card-header'>
          <HiOutlineShoppingCart className='cart-icon' />
          <p>Vendas</p>
        </div>

        <p className='value'>245</p>

        <div className='card-footer'>
          <FaSortUp className='sortup-icon' />
          <p>12.67%</p>
        </div>
      </div>

      <div className='cards-wrapper'>
        <div className='card-header'>
          <FaDollarSign className='dollar-icon' />
          <p>Faturamento</p>
        </div>

        <p className='value'><span>R$</span>12.167.943</p>

        <div className='card-footer'>
          <FaSortUp className='sortup-icon' />
          <p>4.67%</p>
        </div>
      </div>

      <div className='cards-wrapper'>
        <div className='card-header'>
          <FaExchangeAlt className='exchange-icon' />
          <p>Conversão</p>
        </div>

        <p className='value'>12%</p>

        <div className='card-footer'>
          <FaSortDown className='sortdown-icon' />
          <p>21.67%</p>
        </div>
      </div>

      <div className='cards-wrapper'>
        <div className='card-header'>
          <FaRegUser className='lead-icon' />
          <p>Leads</p>
        </div>
      </div>
    </Container>
  )
}