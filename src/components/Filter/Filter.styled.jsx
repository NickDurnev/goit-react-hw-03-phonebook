import styled from 'styled-components';

export const Label = styled.label`
  font-weight: ${props => props.theme.mainTextFontWeight};
  & > input {
    width: 200px;
    margin-left: 10px;
    border-color: ${props => props.theme.bgElementColor};
    background-color: ${props => props.theme.bgColor};
    transition: border-color ${props => props.theme.hoverTransition}
      ${props => props.theme.hoverTimeFunction};

    &:hover,
    &:focus {
      border-color: ${props => props.theme.bgElementHoverColor};
    }
  }
`;
