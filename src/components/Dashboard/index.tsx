import { Container } from './styles'

import { ProfileOptions } from '../ProfileOptions'
import { DashboardHead } from '../DashboardHead'
import { Summary } from '../Summary'
import { Chart } from '../Chart'

import { TypeProps } from '../Content'

interface StatesProps extends Partial<TypeProps> {
  isOpened: boolean
  isActive: boolean
}

export function Dashboard({ isOpened, isActive }: StatesProps) {
  return (
    <Container className={isOpened ? 'isOpened' : ''}>
      {isActive &&
        <ProfileOptions />
      }
      <DashboardHead />
      <Summary />
      <Chart />
    </Container>
  )
}