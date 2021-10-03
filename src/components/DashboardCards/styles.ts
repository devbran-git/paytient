import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.5rem;

  div {

    &.cards-wrapper {
      width: 14.5rem;
      height: 10rem;

      padding: 1.3rem 1.12rem 0.5rem;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      border-radius: 15px;
      box-shadow: 20px 25px 40px 0 rgba(35, 38, 90, 0.06);
      
      background: var(--shape);
    }

    p.value {
      font-size: 1.9rem;
      font-weight: 800;
      letter-spacing: -1.46px;
      text-align: center;

        span {
          font-size: 1rem;
          font-weight: 800;
          opacity: 0.6;

          margin-right: 0.25rem;
        }
    }
    

    &.card-header {
      display: flex;
      align-items: center;

      font-size: 1rem;
      font-weight: 600;

      opacity: 0.5;

        svg {
          font-size: 1rem;
          margin-right: 0.12rem;

          &.cart-icon {
            color: var(--blue);
          }

          &.dollar-icon {
            color: var(--green)
          }

          &.exchange-icon {
            color: var(--yellow);
            margin-right: 0.4rem;
          }

          &.lead-icon {
            color: var(--purple);
            margin-right: 0.25rem;
          }
        }
    }

    &.card-footer {
      display: flex;
      align-self: center;

      p {
        font-size: 1rem;
        font-weight: 600;

        opacity: 0.5;
      }

      svg {
          font-size: 1.5rem;
          margin-right: 0.12rem;

          &.sortup-icon {
            position: relative;
            top: 0.27rem;
            color: var(--green);
          }

          &.sortdown-icon {
            position: relative;
            bottom: 0.45rem;
            color: var(--red);
          }
        }
    }
  }
`
