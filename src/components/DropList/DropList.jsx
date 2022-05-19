import PropTypes from 'prop-types';
import List from './DropList.styled';

const DropList = ({ children, id }) => (
  <List id={id}>
    {children.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </List>
);

DropList.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default DropList;
