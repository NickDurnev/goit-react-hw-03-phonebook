import PropTypes from 'prop-types';
import Wrap from './Button.styled';

const Button = ({
  children,
  onClick,
  padding = '5px',
  position,
  positionX,
  positionY,
}) => (
  <Wrap
    className={position && 'positioned'}
    type="button"
    onClick={onClick}
    padding={padding}
    position={position}
    positionX={positionX}
    positionY={positionY}
  >
    {children}
  </Wrap>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  padding: PropTypes.string,
  position: PropTypes.string,
  positionX: PropTypes.string,
  positionY: PropTypes.string,
};

export default Button;
