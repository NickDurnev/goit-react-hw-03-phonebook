import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

const Filter = ({ onChange, filter }) => (
  <Label>
    Find contacts by name
    <input
      type="text"
      name="filter"
      onChange={e => onChange(e.target.value)}
      value={filter}
    />
  </Label>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
