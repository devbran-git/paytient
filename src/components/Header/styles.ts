import styled from 'styled-components'

export const Container = styled.header`
  height: 9vh;
  display: flex;
  align-items: center;

  background: var(--shape);

  box-shadow: 20px 25px 40px 0 rgba(35, 38, 90, 0.06);
`
export const Logo = styled.div`
  width: 14rem;
  
  display: flex;

  justify-content: center;
  
  img {
    max-width: 7rem;
    max-height: 3rem;
  }
`

export const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  padding: 0 2rem;

  svg {
    font-size: 1.25rem;
    
    color: var(--text);
    opacity: 0.3;

    transition: filter .2s;
    
    &:hover {
      filter: brightness(.1);
    }
  }
  
  div {
    display: flex;
    align-items: center;

    img {
      width: 2.25rem;
      height: 2.25rem;
  
      border-radius: 1.125rem;

      margin-left: 2rem;
    }
  }

`