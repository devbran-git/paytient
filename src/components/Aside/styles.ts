import styled from 'styled-components'

export const Container = styled.aside`
display: flex;
flex-direction: column;

padding-right: 3rem;

background: var(--shape);
box-shadow: 20px 25px 40px 0 rgba(35, 38, 90, 0.06);

padding-left: 2rem;

img {
  width: 7rem;
  height: 3rem;
  
margin-top: 0.5rem;
}

a { 
  text-decoration: none;
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
      font-size: 0.87rem;
      font-weight: 600;
      
      opacity: 0.5;
      
      &:hover {
        filter: brightness(.1);
      }
      
      &:first-child {
        opacity: 1;
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