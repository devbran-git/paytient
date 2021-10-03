import { Container } from './styles'

import { DashboardHead } from '../DashboardHead'
import { DashboardCards } from '../DashboardCards'
import { ProfileOptions } from '../ProfileOptions'
import Chart from '../Chart'

export function Dashboard() {
  return (
    <Container>
      <ProfileOptions />
      <DashboardHead />
      <DashboardCards />
      <Chart />
    </Container>
  )
}