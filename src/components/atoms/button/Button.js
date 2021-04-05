import PropTypes from 'prop-types';
import classnames from "classnames";
import './Button.css';
import icons from '../../../assets/icons'

export const Button = ({ label, slot, isLoading, isDisabled, ...props }) => {
  return (
    <button
      type="button"
      className={classnames(
        'button',
        isLoading && 'button--loading', 
        isDisabled && 'button--disabled',
        props.className
      )}
    >
      {isLoading ? (
        <img src={icons.loading} alt="Loading"/>
      ) : (
        !!slot ?
          slot :
          label
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  slot: PropTypes.element,
  isLoading: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  onClick: undefined,
};
