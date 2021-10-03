import styled from 'styled-components'

export const Container = styled.aside`
display: flex;
flex-direction: column;

width: 5.5rem;

background: var(--shape);
box-shadow: 20px 25px 40px 0 rgba(35, 38, 90, 0.06);

padding-left: 2rem;

img {
  width: 1.90rem;
  height: 1.95rem;
  
  margin-top: 1rem;
  margin-right: 2rem;
}

a { 
  display: none;
}

nav {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  
  ul {
    margin-top: 2rem;
    
    li {
      display: flex;
      align-items: center;
      
      list-style: none;
            
      opacity: 0.5;
      
      &:hover {
        filter: brightness(.1);
      }
           
      img {
        width: 1rem;
        height: 1rem;
        
        margin-right: 1.2rem;
        margin-bottom: .5rem;
      }
    }
  }
}

div {
  display: flex;
  align-items: center;
  
  margin-bottom: 2rem;
  
  opacity: 0.5;
  
  &:hover {
    filter: brightness(.1);
  }
  img {
    width: 1rem;
    height: 1rem;
    
    margin-right: 1.2rem;
    margin-bottom: .5rem;
    
  }
}
`