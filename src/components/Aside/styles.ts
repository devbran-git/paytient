import styled from 'styled-components'

export const Container = styled.aside`
width: 16rem;

height: 100vh;

display: flex;
flex-direction: column;
justify-content: space-between;

background: var(--shape);
box-shadow: 20px 25px 40px 0 rgba(35, 38, 90, 0.06);

padding-left: 2rem;

a {
  &:hover {
    filter: brightness(.1);
  }
}

  nav {
    display: flex;
    flex-direction: column;

    margin-top: 0.6rem;

    transition: filter 0.2s;


    div {
      display: flex;
      align-items: center;

      margin-top: 1.5rem;

      img {
        height: 1rem;

        margin-right: 1rem; 
      }

      svg {
        color: var(--text);
        font-size: 1rem;
        opacity: 0.5;

        margin-right: 1rem;

        &.active {
          color: var(--green);
        }

        &.thin-icons {
          font-size: 1.3rem;
          margin-left: -0.2rem;
        }

        &.client {
          font-size: 1.1rem;
        }
      }

      a {
        font-size: 0.87rem;
        font-weight: 500;
        text-decoration: none;
        opacity: 0.5;

        &.active {
          opacity: 1;
          font-weight: 600;
        }
      }
    }
  }

  div.aside-footer {
    display: flex;
    align-items: center;

    margin-bottom: 2.5rem;

    opacity: 0.5;

    svg {
      font-size: 1rem;
      opacity: 0.5;
    }

    a {
      margin-left: 1rem;
      text-decoration: none;
    }
  }

`
