import styled from 'styled-components';

export const Container = styled.div`
  padding: 1px 50px;
  height: auto;
  background: black;
  @media (max-width: 1000px) {
    padding: 2px 20px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left:100px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 35px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    margin-left:80px;
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 5px;
  font-size: 14px;
  text-decoration: none;
  &:hover {
      color: white;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 17px;
  color: #fff;
  margin-bottom: 1px;
  font-weight: bold;
`;