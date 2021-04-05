import PropTypes from 'prop-types'
import './ButtonGroup.css';

export const ButtonGroup = ({ buttons }) => {
  // TODO: Solve unique keys problem
  return (
    <div className="button-group">
      { buttons }
    </div>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.array.isRequired,
};