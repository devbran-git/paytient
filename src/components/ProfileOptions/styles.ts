import styled from 'styled-components'

export const Container = styled.div`
z-index: 1;
position: absolute;

margin-top: 0.125rem;

right: 1.5rem;

width: 11.75rem; 
border-radius:  0 0 0.68rem 0.68rem;

background: var(--shape);
box-shadow: 10px 45px 55px 0 rgba(35, 38, 90, 0.22);

nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  
  opacity: 0.5;
  
  font-size: 0.8rem;
  font-weight: 600;
  
  a {
    padding: 0.8rem 1.18rem;
    text-decoration: none;
    border-bottom: 1px solid var(--divider);
    
    transition: filter .2s;

    p {
      &:last-child {
        border-bottom: 0;
      }
  
      &:hover {
        filter: brightness(.1);
      }
    }
    
  }
}

`
