import PropTypes from 'prop-types';
import './Button.css';
import icons from '../../../assets/icons'

export const Button = ({ label, isLoading, isDisabled, icon, ...props }) => {
  return (
    <button
      type="button"
      className={[
        'button',
        !!icon && 'button--icon',
        isLoading && 'button--loading', 
        isDisabled && 'button--disabled'].join(' ')}
      {...props}
    >
      {isLoading ? (
        <img src={icons.loading} alt="Loading"/>
      ) : (
        !!icon ?
          icon :
          label
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  onClick: undefined,
};
