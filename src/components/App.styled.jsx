import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  max-width: 100vw;
  padding: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  text-align: center;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};

  & > h1,
  h2 {
    margin-bottom: 10px;
    color: ${props => props.theme.textColor};
  }
`;
