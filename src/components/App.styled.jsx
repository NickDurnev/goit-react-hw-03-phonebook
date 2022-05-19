import styled from 'styled-components';
import { device } from 'deviceSizes';

export const Container = styled.div`
  position: relative;
  margin: auto;
  max-width: 100vw;
  padding: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  text-align: center;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};

  @media ${device.laptop} {
    max-width: 60vw;
  }

  & > h1,
  h2 {
    margin-bottom: 10px;
    color: ${props => props.theme.textColor};
  }
`;
