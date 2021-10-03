import styled from 'styled-components'

export const Container = styled.div`
  height: 25rem;

  margin: 1.5rem 1.5rem;
  padding: 1.5rem;
  border-radius: 0.9rem;

  background: var(--shape);
  box-shadow: 20px 25px 40px 0 rgba(35, 38, 90, 0.06);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      font-size: 1rem;
      color: var(--green);

      margin-right: .5rem;
    }

    &.chart-header {
      margin-bottom: 2.5rem;
    }

    p {
      font-size: 1rem;
      font-weight: 600;

      opacity: .5;     
    }

    &.legend-box {
      margin-left: 1.5rem;

      div {
        width: .87rem;
        height: .87rem;
        border-radius: .5rem;
      }
    }

    &.revenues-bullet {
      background: var(--green);
    }

    &.cost-bullet {
      background: var(--red)
    }

    span {
      margin-left: .37rem;

      font-size: .75rem;
      font-weight: 600;

      color: var(--text);
      opacity: .5;
    }
  }
`
