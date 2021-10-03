import { Container } from './styles'

import { FaRegBell, FaRegComment } from "react-icons/fa"

export function ActivityIcons() {
  return (
    <Container>
      <div>
        <FaRegComment />
        <div className='badge'>3</div>
      </div>

      <div className='notifications-icon'>
        <FaRegBell />
        <div className='badge'>1</div>
      </div>
    </Container>
  )
}