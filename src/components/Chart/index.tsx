import { Container } from './styles'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts"

const data = [
  {
    name: "01",
    rev: 290,
    cost: 200
  },
  {
    name: "02",
    rev: 200,
    cost: 40
  },
  {
    name: "03",
    rev: 290,
    cost: 200
  },
  {
    name: "04",
    rev: 200,
    cost: 40
  },
  {
    name: "05",
    rev: 290,
    cost: 375
  },
  {
    name: "06",
    rev: 110,
    cost: 290
  },
  {
    name: "07",
    rev: 380,
    cost: 110
  },
  {
    name: "08",
    rev: 295,
    cost: 290
  },
  {
    name: "09",
    rev: 375,
    cost: 40
  },
  {
    name: "10",
    rev: 200,
    cost: 380
  },
  {
    name: "11",
    rev: 290,
    cost: 200
  },
  {
    name: "12",
    rev: 200,
    cost: 290
  },
];

export default function Chart() {
  return (
    <Container>

      <div className='chart-header'>
        <div>
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
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 400]} />

          <Line
            type="monotone"
            dataKey="cost"
            dot={false}
            strokeWidth={3}
            stroke="#f00"
          />

          <Line
            type="monotone"
            dataKey="rev"
            dot={false}
            strokeWidth={3}
            stroke="green"
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
