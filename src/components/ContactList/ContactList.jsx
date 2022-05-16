import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import Button from 'components/Button';
import { FaUserAlt } from 'react-icons/fa';

const ContactList = ({ filterItems, onClick }) => (
  <List>
    {filterItems.map(({ id, name, number }) => (
      <li key={id} id={id}>
        <FaUserAlt />
        {name}:<span>{number}</span>
        <Button onClick={() => onClick(id)}>Delete</Button>
      </li>
    ))}
  </List>
);

ContactList.propTypes = {
  filterItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
