import styled from 'styled-components';
import { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const hide = keyframes`
  from {
    opacity: 1;
    transform: 0;
  }

  to {
    opacity: 0;
    transform: translateX(-200px);
  }
`;

export const List = styled.ul`
  max-width: 300px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;

  & > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    animation: ${appear} ${props => props.theme.animationDuration}
      ${props => props.theme.animationTimeFunction};
    font-weight: ${props => props.theme.mainTextFontWeight};
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.listItemBcgColor};
    border-radius: 5px;

    &.hidden {
      animation: ${hide} ${props => props.theme.animationDuration}
        ${props => props.theme.animationTimeFunction}
        ${props => props.theme.animationDuration};
    }
  }

  & li + li {
    margin-top: 10px;
  }
`;
