import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-top: 0.5rem;

  transition: filter .2s;
    
  
  div.notifications-icon {
    margin-left: 2.2rem;
  }

  div.badge {
    background: var(--green);
    height: 1.25rem;
    width: 1.25rem;

    border-radius: 0.62rem;

    margin-bottom: 1rem;
    margin-left: -0.5rem;

    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Montserrat', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--shape);
  }

  svg {
    font-size: 1.5rem;

    color: var(--text);
    opacity: 0.3;

    &:hover {
      filter: brightness(.1);
    }
  }
`
