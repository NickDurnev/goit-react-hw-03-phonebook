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
  }

  to {
    opacity: 0;
  }
`;

const modal = keyframes`
  from {
    transform: scale(0.8) translate(-50%, -50%);
  }

  to {
    transform: scale(1) translate(-50%, -50%);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.backdropColor};
  color: ${props => props.theme.textColor};
  animation: ${appear} ${props => props.theme.animationDuration}
    ${props => props.theme.animationTimeFunction};
  overflow-y: scroll;

  &.hidden {
    animation: ${hide} ${props => props.theme.animationDuration}
      ${props => props.theme.animationTimeFunction};
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  background-color: ${props => props.theme.bgColor};
  font-weight: ${props => props.theme.mainTextFontWeight};
  animation: ${modal} ${props => props.theme.animationDuration}
    ${props => props.theme.animationTimeFunction};

  & > p {
    margin-bottom: 10px;
  }

  & button + button {
    margin-left: 20px;
  }
`;
