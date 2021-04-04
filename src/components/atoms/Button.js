import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import icons from '../../assets/icons'

export const Button = ({ label, isLoading, isDisabled, ...props }) => {
  return (
    <button
      type="button"
      className={['button', isLoading && 'button--loading', isDisabled && 'button--disabled'].join(' ')}
      {...props}
    >
      {isLoading ? (
        <img src={icons.loading} alt="Loading"/>
      ) : (
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
