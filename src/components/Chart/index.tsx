import { Container } from './styles'

import {
  Line,
  XAxis,
  YAxis,
  LineChart,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"
import { FaDollarSign } from 'react-icons/fa'

import { chatData } from '../../utils/chartData'

export function Chart() {
  return (
    <Container>

      <div className='chart-header'>
        <div>
          <FaDollarSign />
          <p>Faturamento vs Custo Fixo</p>
        </div>

        <div>
          <div className='legend-box'>
            <div className='revenues-bullet' />
            <span>Faturamento</span>
          </div>

          <div className='legend-box'>
            <div className='cost-bullet' />
            <span>Custo Fixo</span>
          </div>
        </div>

      </div>

      <ResponsiveContainer width='100%' height='75%'>
        <LineChart data={chatData}>
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tickSize={20}
          />

          <YAxis
            dataKey="rev"
            domain={[0, 400]}
            axisLine={false}
            tickLine={false}
          />

          <Line
            type="monotone"
            dataKey="cost"
            dot={false}
            strokeWidth={3}
            stroke="#F00"
            animationEasing='ease-in-out'
            animationDuration={2000}
          />

          <Line
            type="monotone"
            dataKey="rev"
            dot={false}
            strokeWidth={3}
            stroke="#00FF63"
            animationEasing='ease-in-out'
            animationDuration={2000}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
