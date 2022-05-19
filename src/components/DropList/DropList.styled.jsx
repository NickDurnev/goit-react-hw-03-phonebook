import styled from 'styled-components';
import { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);  
  }

  50% {
    opacity:0
  }

  100% {
    opacity: 1;
    transform: 0;
  }
`;

const hide = keyframes`
  0% {
    opacity: 1;
    transform: 0;
  }

  50% {
    opacity:0
  }

  100% {
    opacity: 0;
    transform: translateY(-100px);
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 55px;
  right: 30px;
  width: 150px;
  padding: 10px;
  background-color: ${props => props.theme.listItemBcgColor};
  animation: ${appear} ${props => props.theme.animationDuration}
    ${props => props.theme.animationTimeFunction};

  &.hidden {
    animation: ${hide} ${props => props.theme.animationDuration}
      ${props => props.theme.animationTimeFunction};
  }

  & > li + li {
    margin-top: 10px;
  }
`;

export default List;
