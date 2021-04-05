import PropTypes from 'prop-types';
import './Icon.css';
import { colorDefault } from '../../colors'

export const Icon = ({ name, colorHash, ...props }) => {
  const iconStyles = {
    color: colorHash || colorDefault
  }
  
  return (
    <span className="material-icons" style={iconStyles}>{name}</span>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  colorHash: PropTypes.string
};
